import { Client } from "pg";
import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());

const pgClient = new Client(process.env.POSTGRES_URL);

async function main() {
  await pgClient.connect();
}

app.post("/signup", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const insertQuery = `Insert into users (name, password) values ($1, $2) returning id;`;

  const addUser = await pgClient.query(insertQuery, [email, password]);

  res.json({
    message: "Registered",
    id: addUser,
  });
});

app.listen(3000, async () => {
  main();
  console.log("Server started");
});
