from rest_framework import serializers

class MyDataSerializer(serializers.Serializer):
    GitHub_Username = serializers.CharField(max_length=100)
    PRs = serializers.IntegerField()
    Score = serializers.IntegerField()