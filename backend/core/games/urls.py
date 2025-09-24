from django.urls import path

from games.views import InvitationListCreateView, InvitationUpdateView

urlpatterns = [
    path('invitations/', InvitationListCreateView.as_view(), name='invitations'),
    path('invitations/<int:pk>/', InvitationUpdateView.as_view(), name='invitation'),
]


# GET http://127.0.0.1:8000/games/invitations/
# POST http://127.0.0.1:8000/games/invitations/

# PATCH http://127.0.0.1:8000/games/invitations/id
