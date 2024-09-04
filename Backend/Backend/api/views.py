from django.conf import settings
from rest_framework.response import Response
from rest_framework.decorators import api_view
from pymongo import MongoClient
from .serializers import MyDataSerializer

# Set up the MongoDB client
client = MongoClient(settings.MONGO_HOST, settings.MONGO_PORT)
db = client[settings.MONGO_DB_NAME]

@api_view(['GET', 'POST'])
def leaderboard(request):
    if request.method == 'GET':
        # Fetch data from MongoDB and sort by score in descending order
        data = list(db.Leaderboard.find().sort("Score", -1))
        for item in data:
            item['_id'] = str(item['_id'])  # Convert ObjectId to string
        return Response(data)
    
    elif request.method == 'POST':
        serializer = MyDataSerializer(data=request.data)
        if serializer.is_valid():
            # Insert data into the leaderboard collection
            db.Leaderboard.insert_one(serializer.validated_data)
            return Response({"message": "User added to leaderboard successfully!"})
        return Response(serializer.errors, status=400)