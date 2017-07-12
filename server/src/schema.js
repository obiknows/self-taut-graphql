import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';

import { resolvers } from './resolvers';

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

const schema = makeExecutableSchema({ typeDefs, resolvers });
// addMockFunctionsToSchema({ schema });  // for fake data [testing]
export { schema };
