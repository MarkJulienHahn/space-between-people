import { getAbout, getCategories } from "../../../sanity/sanity-utils";

import Link from "next/link";

import AboutEntry from "../../../components/About/AboutEntry";
import ContactSection from "../../../components/ContactSection";

export default async function page() {
  const about = await getAbout();
  const categories = await getCategories();

  return (
    <main>
      <div className="subNavWrapper">
        <div className="subNav subNavAbout">
          <div>
            {categories.map((category, i) => (
              <Link href={`/about/#${category?.slug?.current}`}>
                <span key={i}>{category.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="aboutPageWrapper">
        <AboutEntry content={about[0].design} subject={"Design"} />
        <AboutEntry content={about[0].consulting} subject={"Consulting"} />
        <AboutEntry content={about[0].research} subject={"Research"} />
        <ContactSection />
      </div>
    </main> 
  );
}

export const revalidate = 10;
