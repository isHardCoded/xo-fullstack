from rest_framework.generics import ListCreateAPIView, UpdateAPIView
from rest_framework.permissions import IsAuthenticated

from games.models import Invitation
from games.serializers import InvitationSerializer

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


