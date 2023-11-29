import graphene
from polls.app_schema.types import EmployeeType
from polls.models import Employee

class GetAllEmployees(graphene.ObjectType):
    list_of_employees = graphene.List(
        EmployeeType,
        company_rut=graphene.String(required=True))
    
    def resolve_list_of_employees(self, info, company_rut):
        employees = Employee.objects.filter(company_id=company_rut)
        return employees