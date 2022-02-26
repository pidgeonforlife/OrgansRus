from rest_framework import serializers
from userauth.serializers import RecipientUserSerializer
from . import models

class PostSerializer(serializers.ModelSerializer):
    # author = RecipientUserSerializer(required=False)

    class Meta:
        model = models.Post
        fields = "__all__"

    