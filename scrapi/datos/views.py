from rest_framework.response import Response
from .models import Papers
from .serializers import *
from rest_framework import status, generics, viewsets
from rest_framework.decorators import api_view

import os
import boto3

@api_view(['GET'])
def send(request, format=None):
    

    return Response({'message': 'Backend'}, status=status.HTTP_200_OK)


@api_view(['GET'])
def papers_list(request, format=None):
    if request.method == 'GET':
        paper = Papers.objects.all()
        serializer = Papers_Serializer(paper, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def año_list_2019(request, format=None):
    if request.method == 'GET':
        paper = Papers.objects.filter(año=' 2019').order_by('año')
        serializer = Papers_Serializer(paper, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def año_list_2020(request, format=None):
    if request.method == 'GET':
        paper = Papers.objects.filter(año=' 2020').order_by('año')
        serializer = Papers_Serializer(paper, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def fecha_list(request, format=None):
    if request.method == 'GET':
        paper = Papers.objects.all()
        serializer = Fecha_Serializer(paper, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def mapa_list(request, format=None):
    if request.method == 'GET':
        #filter(lugares__icontains = 'Colombia')|Papers.objects.filter(lugares__icontains= 'Ecuador')|Papers.objects.filter(lugares__icontains= 'Chile')
        paper = Papers.objects.all()
        serializer = Mapa_Serializer(paper, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def sudamerica_list(request, format=None):
    if request.method == 'GET':
        paper = Papers.objects.filter(pais= 'Brazil')|Papers.objects.filter(pais = 'Colombia')|Papers.objects.filter(pais= 'Ecuador')|Papers.objects.filter(pais= 'Chile')|Papers.objects.filter(pais = 'Argentina')|Papers.objects.filter(pais = 'Uruguay')
        serializer = Sudamerica_Serializer(paper, many=True)
        return Response(serializer.data)
        