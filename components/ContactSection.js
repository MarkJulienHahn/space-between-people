import React from "react";
import { getAbout, getContact } from "../sanity/sanity-utils";

export default async function ContactSection() {
  const about = await getAbout();
  const contact = await getContact();
  return (
    <div className={"contactSection"}>
      <div className={"contactColumn"}>
        <h1>{about[0].subjectsTitle}</h1>
        <ul>
          {about[0].subjects.map((entry, i) => (
            <li key={i}>{entry}</li>
          ))}
        </ul>
      </div>
      <div className={"contactColumn"}>
        <h1>Questions? Just write me!</h1>
        <ul>
          <li>
            <a href={`mailto:${contact[0].email}`}>{contact[0].email}</a>
          </li>
          <li>{contact[0].phone}</li>
        </ul>
      </div>
    </div>
  );
}
