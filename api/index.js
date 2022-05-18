import express from 'express';
import bodyParser from 'body-parser';
import functions from './apiCalls.js';

const { createUser } = functions;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/createUser', async (req, res) => {
  const body = req.body;
  const { firstName, lastName, username } = body;
  const user = await createUser(firstName, lastName, username);
  

  res.status(200).json({user})
});

app.listen(3001, () => console.log('Server started'));
