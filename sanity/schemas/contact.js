import { defineType } from "sanity";

export default defineType({
  name: "contact",
  title: "Contact",
  type: "document",

  fields: [
    {
      name: "intro",
      title: "Intro",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
          marks: {
            decorators: [{ title: "Emphasis", value: "em" }],
          },
        },
      ],
    },
    {
      name: "addresses",
      title: "Addresses",
      type: "array",
      of: [
        {
          name: "address",
          title: "Address",
          type: "object",
          fields: [
            {
              name: "address",
              title: "Address",
              type: "array",
              of: [
                {
                  type: "block",
                  styles: [{ title: "Normal", value: "normal" }],
                  lists: [],
                  marks: {
                    decorators: [{ title: "Emphasis", value: "em" }],
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    { name: "email", title: "Email", type: "string" },
    { name: "phone", title: "Phone", type: "string" },
    { name: "newsletterMessage", title: "Newsletter Message", type: "string" },
  ],
  preview: {
    prepare() {
      return {
        title: "Contact",
      };
    },
  },
});
