const server = require('express')();
const bodyParser = require('body-parser');
const { port } = require('./config');
const apolloServer = require('./data/apollo-server');

apolloServer.start().then(() => {
  apolloServer.applyMiddleware({ app: server })

  server.use(bodyParser.json());

  server.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}).catch((err) => console.log(err));
