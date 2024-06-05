import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: "0g52zai0",
  dataset: "production",
  apiVersion: "2024-04-16",
});

export default client;

export async function getHome() {
  return client.fetch(
    groq`*[_type == "home"]{..., introSlider[]{..., "asset": asset->{...}}}`
  );
}

export async function getWork() {
  return client.fetch(
    groq`*[_type == "work"]|order(orderRank){..., images[]{..., "asset": asset->{...}}, "category": category->{title, slug}}`
  );
}

export async function getAbout() {
  return client.fetch(
    groq`*[_type == "about"]{..., design{..., "category": category->{...}, image{..., "asset": asset->{...}}}, consulting{..., "category": category->{...}, image{..., "asset": asset->{...}}}, research{..., "category": category->{...}, image{..., "asset": asset->{...}}}}`
  );
}

export async function getContact() {
  return client.fetch(groq`*[_type == "contact"]{...}`);
}

export async function getCategories() {
  return client.fetch(groq`*[_type == "categories"]|order(orderRank){...}`);
}

export async function getImprint() {
  return client.fetch(groq`*[_type == "imprint"]{...}`);
}

export async function getPrivacy() {
  return client.fetch(groq`*[_type == "privacy"]{...}`);
}
