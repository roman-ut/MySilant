from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny, IsAuthenticatedOrReadOnly
from rest_framework.authentication import TokenAuthentication
from . import serializers
from .models import *


class UserCroupView(ListAPIView):
    serializer_class = serializers.UserSilantSerializer
    queryset = UserSilant.objects.all()
    permission_classes = (AllowAny,)


class MachineViewListAPIView(ListAPIView):
    serializer_class = serializers.MachineViewSerializer
    queryset = Machine.objects.all()
    permission_classes = (AllowAny,)


class MachineListAPIView(ListCreateAPIView):
    serializer_class = serializers.MachineSerializer
    queryset = Machine.objects.all()
    permission_classes = (AllowAny,)
    authentication_classes = (TokenAuthentication,)


class ModelMachineAPIView(ListCreateAPIView, RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.ModelMachineSerializer
    queryset = ModelMachine.objects.all()
    permission_classes = (IsAuthenticated,)
    authentication_classes = (TokenAuthentication,)


class ModelMachineDetailAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.ModelMachineSerializer
    queryset = ModelMachine.objects.all()
    permission_classes = (IsAuthenticated,)
    authentication_classes = (TokenAuthentication,)



