from rest_framework.views import APIView
from rest_framework.response import Response
from . import serializers

class DonorSignUp(APIView):
    permission_classes = []
    
    def post(self, request):
        serializer = serializers.DonorUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Successfully created ID'})
        else:
            return Response(serializer.errors)

class RecipientSignUp(APIView):
    permission_classes = []
    
    def post(self, request):
        serializer = serializers.RecipientUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Successfully created ID'})
        else:
            return Response(serializer.errors)