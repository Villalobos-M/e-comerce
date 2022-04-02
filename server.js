const { app } = require('./app');

// Utils
const { sequelize } = require('../cine-clon/api-ecommerce/util/database');
const { initModels } = require('../cine-clon/api-ecommerce/util/initModels');

// Database authenticated
sequelize
  .authenticate()
  .then(() => console.log('Database authenticated'))
  .catch((err) => console.log(err));

// Init relations
initModels();

sequelize
  .sync()
  .then(() => console.log('Database synced'))
  .catch((err) => console.log(err));

// Spin up server
const PORT = process.env.PORT || 4000;
app.listen(4000, () => {
  console.log(`Express app running on port: 4000`);
});
