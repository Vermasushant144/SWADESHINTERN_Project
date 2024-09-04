from django.urls import path
from .views import leaderboard

urlpatterns = [
    path('api/leaderboard/', leaderboard),
]