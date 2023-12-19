const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Connect server.js to environment variables
dotenv.config({ path: './config.env' });
const app = require('./app');
// app.use(cors());

const uri = process.env.DATABASE;

const actualUri = uri.replace('<password>', process.env.PASSWORD);



mongoose.connect(actualUri, {})
.then(() => {
  console.log('Connection Success!');
}).catch(err => console.log(err.reason));

const port = process.env.PORT || 3001;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});