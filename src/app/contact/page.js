import { getContact } from "../../../sanity/sanity-utils";
import { PortableText } from "next-sanity";

export default async function page() {
  const contact = await getContact();
  return (
    <div className="contactWrapper">
      <div className="col-50 caption">
        <PortableText value={contact[0].intro} />
      </div>
      <div className="col-50">
        <div className="col-right">
          <div className="col-50">
            <PortableText value={contact[0].addresses[0].address} />
          </div>
          <div className="col-50">
            <PortableText value={contact[0].addresses[1].address} />
          </div>
        </div>
        <div className="contactLine">
          <a href={`mailto:${contact[0].email}`}>
            <p>{contact[0].email}</p>
          </a>
        </div>
        <div className="contactLine">
          <p>{contact[0].phone}</p>
        </div>
      </div>
    </div>
  );
}

export const revalidate = 10;
