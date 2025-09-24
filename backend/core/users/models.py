from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    full_name = models.CharField(max_length=100)
    birth_date = models.DateField(null=True, blank=True)
    gender = models.CharField(max_length=1, choices=(('M', 'Male'), ('F', 'Female')))
    status = models.CharField(max_length=20, choices=(('free', 'Свободен'), ('in_game', 'В игре')), default='free')
    account_status = models.CharField(max_length=20, choices=(('active', 'Активен'), ('blocked', 'Заблокирован')), default='active')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class UserRating(models.Model):
    pass

class UserBlock(models.Model):
    pass
