# -- coding: utf-8 --
import graphene
import polls.schema

class Query(
    polls.schema.Query,
):
    pass

class Mutation(
    polls.schema.Mutation,
    graphene.ObjectType,
):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)