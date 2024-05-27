import React from "react";
import { getContact } from "../sanity/sanity-utils";
import FooterInner from "./FooterInner"

export default async function Footer() {
  const contact = await getContact();

  return <FooterInner contact={contact} />;
}
