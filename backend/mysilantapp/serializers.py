from rest_framework.serializers import ModelSerializer
from .models import *


class UserSilantSerializer(ModelSerializer):

    class Meta:
        model = UserSilant
        fields = ('id', 'silUser', 'user_name', 'categoryType')


class MachinePublicSerializer(ModelSerializer):

    class Meta:
        model = Machine
        fields = ('id', 'serNumM', 'modelm_title', 'modele_title', 'serNumE', 'modelt_title', 'serNumT',
                  'modelda_title', 'serNumDA', 'modelsa_title', 'serNumSA')


class MachineSerializer(ModelSerializer):

    class Meta:
        model = Machine
        fields = ('id', 'serNumM', 'modelM', 'modelm_title', 'modelE', 'modele_title', 'serNumE', 'modelT',
                  'modelt_title', 'serNumT', 'modelDA', 'modelda_title',   'serNumDA', 'modelSA', 'modelsa_title',
                  'serNumSA', 'NumSupContract', 'dateShipmentFactory', 'consignee', 'addressOperation', 'equipment',
                  'user', 'userClient', 'service_company', 'userService')


class MaintenanceSerializer(ModelSerializer):

    class Meta:
        model = Maintenance
        fields = ('id', 'type_title', 'date', 'operTime', 'workOrder', 'dateWorkOrder',
                  'service_company', 'machine_title')


class ClaimSerializer(ModelSerializer):

    class Meta:
        model = Claim
        fields = ('id', 'dateRejection', 'operTime', 'typefailure_title', 'failDescription', 'recmethode_title',
                  'spareParts', 'dateRecovery', 'downtime', 'machine_title', 'service_company')

class ModelMachineSerializer(ModelSerializer):
    class Meta:
        model = ModelMachine
        fields = "__all__"


class ModelEngineSerializer(ModelSerializer):
    class Meta:
        model = ModelEngine
        fields = "__all__"


class ModelTransmissionSerializer(ModelSerializer):
    class Meta:
        model = ModelTransmission
        fields = "__all__"


class ModelDriveAxleSerializer(ModelSerializer):
    class Meta:
        model = ModelDriveAxle
        fields = "__all__"


class ModelSteeringAxleSerializer(ModelSerializer):
    class Meta:
        model = ModelSteeringAxle
        fields = "__all__"


class ServiceCompanySerializer(ModelSerializer):
    class Meta:
        model = ServiceCompany
        fields = "__all__"


class TypeMaintenanceSerializer(ModelSerializer):
    class Meta:
        model = TypeMaintenance
        fields = "__all__"


class TypeFailureSerializer(ModelSerializer):
    class Meta:
        model = TypeFailure
        fields = "__all__"


class RecoveryMethodSerializer(ModelSerializer):
    class Meta:
        model = RecoveryMethod
        fields = "__all__"

