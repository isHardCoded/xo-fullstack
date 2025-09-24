from django.db import models
from users.models import User

class Invitation(models.Model):
    from_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sent_invitations')
    to_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='received_invitations')
    status = models.CharField(
        max_length=20,
        choices=(
            ("pending", "Ожидание"),
            ("accepted", "Принято"),
            ("declined", "Отклонено")
        ),
        default="pending"
    )