import { defineType } from "sanity";

export default defineType({
  name: "home",
  title: "Homepage",
  type: "document",

  fields: [
    {
      name: "introSlider",
      title: "Intro Images",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        {
          name: "image",
          title: "Image",
          type: "image",
          fields: [
            {
              title: "Alternative Text",
              name: "alt",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "introText",
      title: "Intro Text",
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
  preview: {
    prepare() {
      return {
        title: "Space Between People",
      };
    },
  },
});
