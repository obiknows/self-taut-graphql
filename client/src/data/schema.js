export const typeDefs = `

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
`
