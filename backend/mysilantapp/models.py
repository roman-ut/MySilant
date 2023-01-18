from django.db import models
from django.contrib.auth.models import User, Group


class UserSilant(models.Model):
    silUser = models.OneToOneField(User, on_delete=models.CASCADE, blank=True)

    MANAGER = 'MG'
    CLIENT = 'CL'
    SERVICECOMPANY = 'SK'

    CATEGORY_CHOICES = (
        (MANAGER, 'Менеджер'),
        (CLIENT, 'Клиент'),
        (SERVICECOMPANY, 'Сервисная компания'),
    )

    categoryType = models.CharField(max_length=2, choices=CATEGORY_CHOICES)

    def __str__(self):
        return '{}'.format(self.silUser)

    def user_name(self) -> str:
        return self.silUser.username


class ReferenceBook(models.Model):
    title = models.CharField(max_length=30)
    description = models.CharField(max_length=400, blank=True, null=True)

    class Meta:
        abstract = True

    def __str__(self):
        return f'{self.title}'


class ModelMachine(ReferenceBook):
    pass


class ModelEngine(ReferenceBook):
    pass


class ModelTransmission(ReferenceBook):
    pass


class ModelDriveAxle(ReferenceBook):
    pass


class ModelSteeringAxle(ReferenceBook):
    pass


class ServiceCompany(ReferenceBook):
    user = models.ForeignKey(User, on_delete=models.PROTECT)


class Machine(models.Model):
    serNumM = models.CharField(max_length=30)
    modelM = models.ForeignKey(ModelMachine, on_delete=models.PROTECT, null=True)
    modelE = models.ForeignKey(ModelEngine, on_delete=models.PROTECT, null=True)
    serNumE = models.CharField(max_length=30)
    modelT = models.ForeignKey(ModelTransmission, on_delete=models.PROTECT, null=True)
    serNumT = models.CharField(max_length=30)
    modelDA = models.ForeignKey(ModelDriveAxle, on_delete=models.PROTECT, null=True)
    serNumDA = models.CharField(max_length=30)
    modelSA = models.ForeignKey(ModelSteeringAxle, on_delete=models.PROTECT, null=True)
    serNumSA = models.CharField(max_length=30)
    NumSupContract = models.CharField(max_length=30)
    dateShipmentFactory = models.DateField()
    consignee = models.CharField(max_length=30)
    addressOperation = models.CharField(max_length=128)
    equipment = models.CharField(max_length=400)
    userClient = models.ForeignKey(User, on_delete=models.PROTECT)
    userService = models.ForeignKey(ServiceCompany, on_delete=models.PROTECT)

    def __str__(self):
        return f'{self.modelM.title}'

    def modelm_title(self) -> list:
        return self.modelM.title

    def modele_title(self) -> list:
        return self.modelE.title

    def modelt_title(self) -> list:
        return self.modelT.title

    def modelda_title(self) -> list:
        return self.modelDA.title

    def modelsa_title(self) -> list:
        return self.modelSA.title


class TypeMaintenance(ReferenceBook):
    pass


class Maintenance(models.Model):
    type = models.ForeignKey(TypeMaintenance, on_delete=models.PROTECT)
    date = models.DateField()
    operTime = models.PositiveIntegerField
    workOrder = models.CharField(max_length=30)
    dateWorkOrder = models.DateField()
    serviceCompany = models.ForeignKey(ServiceCompany, on_delete=models.PROTECT)
    machine = models.ForeignKey(Machine, on_delete=models.PROTECT, blank=True)


class TypeFailure(ReferenceBook):
    pass


class RecoveryMethod(ReferenceBook):
    pass


class Claim(models.Model):
    dateRejection = models.DateField()
    operTime = models.PositiveIntegerField
    typeFailure = models.ForeignKey(TypeFailure, on_delete=models.PROTECT)
    failDescription = models.CharField(max_length=128)
    recMethod = models.ForeignKey(RecoveryMethod, on_delete=models.PROTECT)
    spareParts = models.CharField(max_length=128)
    dateRecovery = models.DateField()
    downtime = models.PositiveIntegerField(blank=True)
    machine = models.ForeignKey(Machine, on_delete=models.PROTECT)

    def save(self, *args, **kwargs):
        self.downtime = (self.dateRecovery - self.dateRejection).days
        return super(Claim, self).save(*args, **kwargs)
