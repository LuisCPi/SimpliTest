import graphene
from graphene_django import DjangoObjectType
from polls.models import Company
from polls.models import Employee

class CompanyType(DjangoObjectType):

    class Meta:
        model = Company

class EmployeeType(DjangoObjectType):

    class Meta:
        model = Employee