import graphene
from polls.app_schema.types import CompanyType
from polls.models import Company

class GetCompany(graphene.ObjectType):
    list_of_companies = graphene.List(CompanyType)
    
    def resolve_list_of_companies(self, info):
        companies = Company.objects.all()
        return companies