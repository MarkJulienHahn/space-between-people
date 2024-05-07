import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: '0g52zai0',
  dataset: "production",
  apiVersion: "2024-04-16",
});

export default client;

export async function getWork() {
  return client.fetch(groq`*[_type == "work"]|order(orderRank){...}`);
}
