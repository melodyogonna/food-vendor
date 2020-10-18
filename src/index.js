const app = require('express')();

app.use('/api/v1/users', require('./routes/userRoutes'));
app.use('/api/v1/foods', require('./routes/foodRoutes'));
app.use('/api/v1/orders', require('./routes/orderRoutes'));

module.exports = app;
