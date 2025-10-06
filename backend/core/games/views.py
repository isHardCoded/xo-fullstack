from rest_framework.generics import ListCreateAPIView, UpdateAPIView, CreateAPIView
from rest_framework.permissions import IsAuthenticated
from django.db.models import F

from games.models import Invitation, Game
from users.models import UserRating

from games.serializers import InvitationSerializer, GameSerializer


class InvitationListCreateView(ListCreateAPIView):
    serializer_class = InvitationSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Invitation.objects.filter(to_user=self.request.user, status='pending')

    def perform_create(self, serializer):
        serializer.save(from_user=self.request.user)

class InvitationUpdateView(UpdateAPIView):
    queryset = Invitation.objects.all()
    serializer_class = InvitationSerializer
    permission_classes = [IsAuthenticated]

class GameCreateView(CreateAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        game = serializer.save()

        players = [game.player_x, game.player_o]

        for player in players:
            rating, created = UserRating.objects.get_or_create(user=player)

            rating.total_games = F('total_games') + 1
            rating.save()

        if game.winner:
            winner_rating, created = UserRating.objects.get_or_create(user=game.winner)
            winner_rating.wins = F('wins') + 1
            winner_rating.save()

            if players[0] != game.winner:
                loser = players[0]
            else:
                loser = players[1]

            loser_rating, created = UserRating.objects.get_or_create(user=loser)
            loser_rating.losses = F('losses') + 1
            loser_rating.save()


        
