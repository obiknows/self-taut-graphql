import {
  makeExecutableSchema,
  addMockFunctionsToSchema, # we'll use this later
} from 'graphql-tools';

const typeDefs = `

type Channel {
  id: ID!  # ! means req'd
  name: String
}

##
# Entrypoints into API
##
type Query {
  channels: [Channel]
}
`;

const schema = makeExecutableSchema({ typeDefs });
export { schema };
