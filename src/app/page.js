import React from "react";

import { getHome, getAbout, getContact } from "../../sanity/sanity-utils";
import { PortableText } from "next-sanity";

import Link from "next/link";

import Introslider from "../../components/Introslider";
import ContactSection from "../../components/ContactSection";

export default async function page() {
  const home = await getHome();
  const about = await getAbout();
  const contact = await getContact();

  return (
    <main>
      <Introslider images={home[0].introSlider} />
      <div className={"sliderSpacer"} />
      <div className={"pageWrapper homePage"}>
        <div className={"textSection"}>
          <PortableText value={home[0].introText} />
        </div>
        <h3>What are you interested in?</h3>
        <div className={"homeNavigation"}>
          <Link href={"/about#design"}>
            <div className={"navButton"}>
              <h1>Design</h1>
            </div>
          </Link>

          <Link href={"/about#research"}>
            <div className={"navButton"}>
              <h1>Research</h1>
            </div>
          </Link>
          <Link href={"/about#consulting"}>
            <div className={"navButton"}>
              <h1>Consulting</h1>
            </div>
          </Link>
        </div>
        <ContactSection />
      </div>
    </main>
  );
}
