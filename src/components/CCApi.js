  import express from 'express';  // Import express using ES Modules
  import bodyParser from 'body-parser';  // Import bodyParser
  import cors from "cors";

  const app = express();
  const port = 10043;

  let problems = [];

  app.use(cors());
  app.use(bodyParser.json());

  app.post('/', (req, res) => {
    const data = req.body;
    problems.push(data);

    console.log(`Problem name: ${data.name}`);
    console.log(`Problem group: ${data.group}`);
    console.log('Full body:');
    console.log(JSON.stringify(data, null, 4));

    res.sendStatus(200);
  });

  app.listen(port, err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    console.log(`Listening on port ${port}`);
  });

  app.get('/', (req, res) => {
      if (problems.length > 0) res.send(problems[problems.length - 1]);
      else res.send("Data Not Found!");
  });