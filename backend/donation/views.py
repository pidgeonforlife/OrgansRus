from rest_framework.views import APIView
from rest_framework.response import Response
from . import models
from . import serializers
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import SessionAuthentication, BasicAuthentication

# Create your views here.
class OrganView(APIView):
    authentication_classes = (SessionAuthentication, BasicAuthentication)
    permission_classes = [IsAuthenticated]

    def get(self, request):
        organs = models.Organ.objects.all()
        serializer = serializers.OrganSerializer(organs, many=True)
        return Response(serializer.data)