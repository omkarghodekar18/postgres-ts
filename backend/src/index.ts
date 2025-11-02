import { Client } from "pg";

const pgClient = new Client(
  "postgresql://neondb_owner:npg_eCFgp6SZ7wyD@ep-late-lab-a4406ohb-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
);

async function main() {
  await pgClient.connect();
  const response = await pgClient.query("Select * from users");
  console.log(response);
}

main();
