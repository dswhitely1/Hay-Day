const publicRoutes = require('./routes/routes.public');

module.exports = server => {
    publicRoutes(server)
};
