from rest_framework import serializers
from . import models


class Papers_Serializer(serializers.ModelSerializer):
    class Meta:
        model = models.Papers
        fields = ('acronimo','titulo','descripcion','año','mes','dia','ciudad','pais','topicos')

class Mapa_Serializer(serializers.ModelSerializer):
    class Meta:
        model = models.Papers
        fields = ('pais','año')

class Sudamerica_Serializer(serializers.ModelSerializer):
    class Meta:
        model = models.Papers
        fields = ('pais','ciudad')

class Fecha_Serializer(serializers.ModelSerializer):
    class Meta:
        model = models.Papers
        fields = ('titulo','descripcion','pais','ciudad','mes','año','topicos')