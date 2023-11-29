import graphene
from graphene_django.types import ObjectType
from polls.app_schema.mutations import AddCompany
from polls.app_schema.mutations import AddEmployee
from polls.app_schema.query import GetCompany
from polls.app_schema.query import GetAllEmployees


class Query(
    GetCompany,
    GetAllEmployees,
):
    pass

class Mutation(ObjectType):
    AddCompany = AddCompany.Field()
    AddEmployee = AddEmployee.Field()
