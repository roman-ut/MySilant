from rest_framework.serializers import ModelSerializer
from .models import Machine, ModelMachine, UserSilant


class UserSilantSerializer(ModelSerializer):

    class Meta:
        model = UserSilant
        fields = ('user_name', 'categoryType')


class MachineViewSerializer(ModelSerializer):

    class Meta:
        model = Machine
        fields = ('id', 'serNumM', 'modelm_title', 'modele_title', 'serNumE', 'modelt_title', 'serNumT',
                  'modelda_title', 'serNumDA', 'modelsa_title', 'serNumSA', 'NumSupContract', 'dateShipmentFactory',
                  'consignee', 'addressOperation', 'equipment', 'userClient', 'userService')


class MachineSerializer(ModelSerializer):
    class Meta:
        model = Machine
        fields = "__all__"


class ModelMachineSerializer(ModelSerializer):
    class Meta:
        model = ModelMachine
        fields = "__all__"
