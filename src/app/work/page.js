import { getWork } from "../../../sanity/sanity-utils";

export default async function page() {
  const work = await getWork();
  return <></>;
}

export const revalidate = 10;
