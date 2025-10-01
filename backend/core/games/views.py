from rest_framework.generics import ListCreateAPIView, UpdateAPIView, CreateAPIView
from rest_framework.permissions import IsAuthenticated

from games.models import Invitation, Game
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
        serializer.save()