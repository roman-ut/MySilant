from rest_framework import filters
from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny, IsAuthenticatedOrReadOnly
from rest_framework.authentication import TokenAuthentication
from . import serializers
from .filters import MachineFilter, MaintenanceFilter, ClaimFilter
from .models import *
from django.db.models import Q

from .serializers import MaintenanceSerializer, ClaimSerializer


class UserCroupView(ListAPIView):
    serializer_class = serializers.UserSilantSerializer
    queryset = UserSilant.objects.all()
    permission_classes = (AllowAny,)


class MachineAPIViewPublic(ListAPIView):
    serializer_class = serializers.MachinePublicSerializer
    queryset = Machine.objects.all()
    filter_backends = [filters.SearchFilter]
    search_fields = ['serNumM']
    permission_classes = (AllowAny,)


class MachineAPIView(ListCreateAPIView):
    serializer_class = serializers.MachineSerializer
    queryset = Machine.objects.all()
    permission_classes = (AllowAny,)
    authentication_classes = (TokenAuthentication,)
    filterset_class = MachineFilter
    ordering = ['dateShipmentFactory']

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['filter'] = MachineFilter(self.request.GET, queryset=self.get_queryset())
        return context

    # def get_queryset(self):
    #     user = self.request.user
    #     if not UserSilant.objects.get(silUser=user).categoryType == "MG":
    #         return Machine.objects.filter(Q(userClient=user) | Q
    #         (userService=ServiceCompany.objects.get(user=UserSilant.objects.get(silUser=user)).id))
    #
    #     else:
    #         return Machine.objects.all()


class MachineAPIViewDetail(RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.MachineSerializer
    queryset = Machine.objects.all()
    permission_classes = (AllowAny,)
    authentication_classes = (TokenAuthentication,)


class MaintenanceAPIView(ListCreateAPIView):
    serializer_class = serializers.MaintenanceSerializer
    queryset = Maintenance.objects.all()
    permission_classes = (AllowAny,)
    authentication_classes = (TokenAuthentication,)
    filterset_class = MaintenanceFilter
    ordering = ['date']

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['filter'] = MaintenanceFilter(self.request.GET, queryset=self.get_queryset())
        return context

    # def get_queryset(self):
    #     user = self.request.user
    #     if not UserSilant.objects.get(silUser=user).categoryType == "MG":
    #         return Maintenance.objects.filter(Q(serviceCompany=user) | Q
    #         (userService=ServiceCompany.objects.get(user=UserSilant.objects.get(silUser=user)).id))
    #
    #     else:
    #         return Maintenance.objects.all()


class MaintenanceAPIViewDetail(RetrieveUpdateDestroyAPIView):
    serializer_class = MaintenanceSerializer
    queryset = Maintenance.objects.all()
    permission_classes = (AllowAny,)
    authentication_classes = (TokenAuthentication,)


class ClaimAPIView(ListCreateAPIView):
    serializer_class = ClaimSerializer
    queryset = Claim.objects.all()
    permission_classes = (AllowAny,)
    authentication_classes = (TokenAuthentication,)
    filterset_class = ClaimFilter
    search_fields = ['dateRejection', 'operTime', 'typefailure_title', 'failDescription', 'recmethode_title',
                     'spareParts', 'dateRecovery', 'downtime', 'machine_title']
    ordering = ['dateRejection']


class ClaimAPIViewDetail(RetrieveUpdateDestroyAPIView):
    serializer_class = ClaimSerializer
    queryset = Claim.objects.all()
    permission_classes = (AllowAny,)
    authentication_classes = (TokenAuthentication,)


class ReferenceBookAPIView:
    permission_classes = (IsAuthenticated,)
    authentication_classes = (TokenAuthentication,)

    class Meta:
        abstract = True


class ModelMachineAPIView(ListCreateAPIView):
    serializer_class = serializers.ModelMachineSerializer
    queryset = ModelMachine.objects.all()


class ModelMachineDetailAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.ModelMachineSerializer
    queryset = ModelMachine.objects.all()


class ModelEngineAPIView(ListCreateAPIView):
    serializer_class = serializers.ModelEngineSerializer
    queryset = ModelEngine.objects.all()


class ModelEngineDetailAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.ModelEngineSerializer
    queryset = ModelEngine.objects.all()


class ModelTransmissionAPIView(ListCreateAPIView):
    serializer_class = serializers.ModelTransmissionSerializer
    queryset = ModelTransmission.objects.all()


class ModelTransmissionDetailAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.ModelTransmissionSerializer
    queryset = ModelTransmission.objects.all()


class ModelDriveAxleAPIView(ListCreateAPIView):
    serializer_class = serializers.ModelDriveAxleSerializer
    queryset = ModelDriveAxle.objects.all()


class ModelDriveAxleDetailAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.ModelDriveAxleSerializer
    queryset = ModelDriveAxle.objects.all()


class ModelSteeringAxleAPIView(ListCreateAPIView):
    serializer_class = serializers.ModelSteeringAxleSerializer
    queryset = ModelSteeringAxle.objects.all()


class ModelSteeringAxleDetailAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.ModelSteeringAxleSerializer
    queryset = ModelSteeringAxle.objects.all()


class ServiceCompanyAPIView(ListCreateAPIView):
    serializer_class = serializers.ServiceCompanySerializer
    queryset = ServiceCompany.objects.all()


class ServiceCompanyDetailAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.ServiceCompanySerializer
    queryset = ServiceCompany.objects.all()


class TypeMaintenanceAPIView(ListCreateAPIView):
    serializer_class = serializers.TypeMaintenanceSerializer
    queryset = TypeMaintenance.objects.all()


class TypeMaintenanceDetailAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.TypeMaintenanceSerializer
    queryset = TypeMaintenance.objects.all()


class TypeFailureAPIView(ListCreateAPIView):
    serializer_class = serializers.TypeFailureSerializer
    queryset = TypeFailure.objects.all()


class TypeFailureDetailAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.TypeFailureSerializer
    queryset = TypeFailure.objects.all()


class RecoveryMethodAPIView(ListCreateAPIView):
    serializer_class = serializers.RecoveryMethodSerializer
    queryset = RecoveryMethod.objects.all()


class RecoveryMethodDetailAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.RecoveryMethodSerializer
    queryset = RecoveryMethod.objects.all()
