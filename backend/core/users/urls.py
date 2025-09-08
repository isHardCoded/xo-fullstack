from django.urls import path
from users.views import RegisterView, LoginView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
]

# POST http://127.0.0.1:8000/users/register/
# POST http://127.0.0.1:8000/users/login/

