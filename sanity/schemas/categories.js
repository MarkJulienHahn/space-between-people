import { defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";

export default defineType({
  name: "categories",
  title: "Categories",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    orderRankField({ type: "categories" }),
  ],
});
