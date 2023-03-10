const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;

const app = express();
const PORT = 4000;

app.use('/graphql', expressGraphQL({
  graphiql: true
}));

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
});