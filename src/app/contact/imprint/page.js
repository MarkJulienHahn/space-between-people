import Administrative from "../../../../components/Administrative";

import { getImprint } from "../../../../sanity/sanity-utils";

export default async function page() {
  const imprint = await getImprint();
  return (
    <main>
      <Administrative content={imprint[0]} />
    </main>
  );
}

export const revalidate = 10;
