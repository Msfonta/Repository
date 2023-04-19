const Client = require('pg').Client
const client = new Client({
    user: 'postgres',
    password: 'm1s2f3senna',
    host: 'localhost',
    port: 5432,
    database: 'testeMHR'
});

try {
    client.connect();
    console.log('Connected to database');
  } catch (error) {
    console.error('Error connecting to database:', error);
  }