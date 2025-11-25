import { getAbout, getCategories } from "../../../sanity/sanity-utils";

import AboutPage from "../../../components/About/AboutPage"
import ContactSection from "../../../components/ContactSection";

export default async function page() {
  const about = await getAbout();

  return (
    <main>
      <AboutPage about={about} />
      {/* <ContactSection /> */}
    </main>
  );
}

export const revalidate = 10;
