from django.urls import path

from games.views import InvitationListCreateView, InvitationUpdateView, GameCreateView

urlpatterns = [
    path('invitations/', InvitationListCreateView.as_view(), name='invitations'),
    path('invitations/<int:pk>/', InvitationUpdateView.as_view(), name='invitation'),
    path('', GameCreateView.as_view(), name='game-create'),
]


# GET http://127.0.0.1:8000/games/invitations/

# POST http://127.0.0.1:8000/games/invitations/
# POST http://127.0.0.1:8000/games/

# PATCH http://127.0.0.1:8000/games/invitations/id
