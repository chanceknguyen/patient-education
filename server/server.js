const app = require('./app.js');

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

module.exports = server;