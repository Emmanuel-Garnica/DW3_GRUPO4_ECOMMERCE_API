const { gql } = require('apollo-server');

const usersTypeDefs = gql `
    type Tokens {
        refresh: String!
        access: String!
    }

    type Access {
        access: String!
    }

    input CredentialsInput {
        username: String!
        password: String!
    }
    
    type UserInformation {
        id: String!
        username: String
        password: String
        address: String
        telephone: Int
        email: String
    }

    extend type Query {
        getUserById(userId: String!): [UserInformation]
    }

    extend type Mutation {
        authenticate(credentials: CredentialsInput!): Tokens!
        refreshToken(refresh: String!): Access!
    }
`;

module.exports = usersTypeDefs;