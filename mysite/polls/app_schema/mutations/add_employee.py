import graphene
from polls.models import Employee

class AddEmployee(graphene.Mutation):
    class Arguments:
        employee_name = graphene.String(required=True)
        employee_rut = graphene.String(required=True)
        employee_company = graphene.String(required=True)
        employee_email = graphene.String(required=True)

    success = graphene.Boolean()

    def mutate(self, info, **kwargs):
        employee_name = kwargs.get('employee_name')
        employee_rut = kwargs.get('employee_rut')
        employee_company = kwargs.get('employee_company')
        employee_email = kwargs.get('employee_email')
        new_employee = Employee(
            company_id=employee_company,
            full_name=employee_name,
            rut=employee_rut,
            email=employee_email,
        )
        new_employee.save()
        return AddEmployee(success=True)