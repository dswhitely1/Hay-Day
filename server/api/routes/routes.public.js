const testRouter = require('./test/test.route');

module.exports = server => {
    server.use('/', testRouter);
};
