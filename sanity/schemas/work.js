import { defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";

export default defineType({
  name: "work",
  title: "Work",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(3).max(80),
    },
    {
      name: "year",
      title: "Select Year",
      type: "number",
      options: {
        list: (() => {
          const currentYear = new Date().getFullYear() + 1;
          const years = [];
          for (let year = currentYear; year >= 2000; year--) {
            years.push({ title: `${year}`, value: year });
          }
          return years;
        })(),
      },
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      validation: (Rule) => Rule.required(),
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
      name: "images",
      title: "Images",
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
      title: "Category",
      name: "Category",
      type: "reference",
      to: [{ type: "categories" }],
      validation: (Rule) => Rule.required(),
    },

    orderRankField({ type: "work" }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'images.0.image', // adjusted path if nested differently
    },
    prepare(selection) {
      const {title, media} = selection;
      return {
        title,
        media: media || 'some-default-image' // Fallback image if the first is not available
      }
    }
  },
});
