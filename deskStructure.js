import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

export const myStructure = (S, context) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Homepage")
        .id("home")
        .child(S.document().schemaType("home").documentId("home")),

      S.divider(),

      orderableDocumentListDeskItem({
        type: "work",
        title: "Work",
        S,
        context,
      }),
      S.listItem()
        .title("About")
        .id("about")
        .child(S.document().schemaType("about").documentId("about")),
      S.listItem()
        .title("Contact")
        .id("contact")
        .child(S.document().schemaType("contact").documentId("contact")),

      S.divider(),

      S.listItem()
        .title("Imprint")
        .id("imprint")
        .child(S.document().schemaType("imprint").documentId("imprint")),

      S.listItem()
        .title("Privacy")
        .id("privacy")
        .child(S.document().schemaType("privacy").documentId("privacy")),

      S.divider(),
      S.divider(),

      orderableDocumentListDeskItem({
        type: "categories",
        title: "Categories",
        S,
        context,
      }),
    ]);
