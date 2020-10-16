const app = require('express')();

app.use('/api/v1/users', require('./routes/userRoutes'));
app.use('/api/v1/foods', require('./routes/foodRoutes'));

module.exports = app;
