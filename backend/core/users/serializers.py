from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password
from rest_framework import serializers
from users.models import User, UserRating

class RegisterSerializer(serializers.Serializer):
    username = serializers.CharField()
    email = serializers.EmailField()
    full_name = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        user = User.objects.create(**validated_data)
        return user

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = authenticate(
            username=data['username'],
            password=data['password']
        )

        if user:
            return user

        raise serializers.ValidationError('Неправильный логин или пароль')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'email',
            'full_name',
            'birth_date',
            'gender',
            'status',
            'account_status'
        ]

class UserListSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'full_name',
            'email',
            'birth_date',
            'gender',
            'status',
            'account_status',
            'created_at',
            'updated_at'
        ]

class UserRatingSerializer(serializers.ModelSerializer):
    full_name = serializers.CharField(source='user.full_name')
    win_percentage = serializers.SerializerMethodField()

    class Meta:
        model = UserRating
        fields = ['full_name', 'total_games', 'wins', 'losses', 'win_percentage']

    def get_win_percentage(self, obj):
        return obj.win_percentage