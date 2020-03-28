//keys.js - figure out what set of credential to return


if (process.env.NODE_ENV === "production") {
    // we are in production - return the prod set of keys
    module.exports =  require('./prod');
}
else{
    // we are in development mode - return the dev keys!!!
    module.exports =  require('./dev');
}
// tlBeb56FvY27pDlD
//mongodb+srv://myuser:<password>@cluster0-uu1ts.mongodb.net/test?retryWrites=true&w=majority