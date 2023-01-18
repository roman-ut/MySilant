from django.urls import path, re_path, include
from .views import *

urlpatterns = [
    path('machineview/', MachineViewListAPIView.as_view(), name='api_machineview'),
    path('machine/', MachineListAPIView.as_view(), name='api_machine'),
    path('modelmachine/', ModelMachineAPIView.as_view(), name='api_modelmachinelist'),
    path('modelmachine/<int:pk>/', ModelMachineAPIView.as_view(), name='api_modeldetailmachine'),
    path('usgroup/', UserCroupView.as_view(), name='api_usergroup'),
    path('auth/', include('djoser.urls')),
    re_path(r'^auth/', include('djoser.urls.authtoken'))
]
