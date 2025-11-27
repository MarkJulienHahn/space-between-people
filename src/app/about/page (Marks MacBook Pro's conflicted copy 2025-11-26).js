import { getAbout, getCategories } from "../../../sanity/sanity-utils";

import AboutPage from "../../../components/About/AboutPage"
import ContactSection from "../../../components/ContactSection";

export default async function page() {
  const about = await getAbout();
  const categories = await getCategories();

  return (
    <main>
      <AboutPage about={about} categories={categories} />
      <ContactSection />
    </main>
  );
}

export const revalidate = 10;
