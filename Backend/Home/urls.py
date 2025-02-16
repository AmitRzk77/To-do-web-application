from django.shortcuts import render
from rest_framework import routers
from django.contrib import admin
from django.urls import path, include
from .views import *

router = routers.DefaultRouter()
router.register(r'todos', TodoViewSet, basename='todo')



urlpatterns = [
    path('', include(router.urls)),
    
]
