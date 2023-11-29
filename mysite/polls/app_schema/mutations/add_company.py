import graphene
from polls.models import Company

class AddCompany(graphene.Mutation):
    class Arguments:
        company_name = graphene.String(required=True)
        company_rut = graphene.String(required=True)
        company_phone = graphene.Int(required=True)
        company_address = graphene.String(required=True)

    success = graphene.Boolean()

    def mutate(self, info, **kwargs):
        company_name = kwargs.get('company_name')
        company_rut = kwargs.get('company_rut')
        company_phone = kwargs.get('company_phone')
        company_address = kwargs.get('company_address')
        new_company = Company(
            name=company_name,
            address=company_address,
            rut=company_rut,
            phone=company_phone,
        )
        new_company.save()
        return AddCompany(success=True)