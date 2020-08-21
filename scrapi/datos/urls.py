from datos.views import *
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    path('papers/',papers_list),
    path('papers/anio-2019',año_list_2019),
    path('papers/anio-2020', año_list_2020),
    path('papers/mapa',mapa_list),
    path('papers/sudamerica',sudamerica_list),
    path('papers/fecha',fecha_list),
    path('send_message',send),
]

urlpatterns = format_suffix_patterns(urlpatterns)