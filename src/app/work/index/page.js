import WorkPage from "../../../../components/Work/WorkPage";

import { getWork, getCategories } from "../../../../sanity/sanity-utils";

export default async function page() {
  const work = await getWork();
  const categories = await getCategories();
  return (
    <main>
      <WorkPage categories={categories} work={work} indexInitial={true}/>
    </main>
  );
}

export const revalidate = 10;
