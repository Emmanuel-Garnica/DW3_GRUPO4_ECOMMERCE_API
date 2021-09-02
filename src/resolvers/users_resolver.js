const usersResolver = {
    Query: {
        getUserById: (_, { userId }, {dataSources, userIdToken}) => {
            if(userId == userIdToken) 
                return dataSources.accountAPI.getUserById(userId)
            else
                return null
        }
    },

    Mutation: {
        authenticate: (_, { credentials }, { dataSources }) => dataSources.usersAPI.authRequest(credentials),
        refreshToken: (_, { refresh }, { dataSources }) => dataSources.usersAPI.refreshToken(refresh),
        updateUserInformation: (_, { userId },{ information }, {dataSources, userIdToken}) => {
            if(userId == userIdToken) 
                return dataSources.accountAPI.updateUserInformation(information)
            else
                return null
        }
    }
};

module.exports = usersResolver;