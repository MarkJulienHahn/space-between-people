import Administrative from "../../../../components/Administrative";

import { getPrivacy } from "../../../../sanity/sanity-utils";

export default async function page() {
  const privacy = await getPrivacy();
  return (
    <main>
      <Administrative content={privacy[0]} />
    </main>
  );
}

export const revalidate = 10;
