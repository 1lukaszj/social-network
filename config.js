module.exports = function(){
    switch(process.env.NODE_ENV){
        case 'development':
            return {database: "localhost:27017/node-angular"};

        case 'production':
            var connection = "mongodb://user:password@ds011452.mlab.com:11452/social-network-production";
            connection = connection.replace("user", process.env.USER);
            connection = connection.replace("password", process.env.PASSWORD);
            return {database: connection};

        default:
            return {error: "No database selected"};
    }
};