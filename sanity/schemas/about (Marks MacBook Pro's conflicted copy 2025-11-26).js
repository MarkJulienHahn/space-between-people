import { defineType } from "sanity";

export default defineType({
  name: "about",
  title: "About",
  type: "document",

  fields: [
    {
      name: "design",
      title: "Design",
      type: "object",
      fields: [
        {
          title: "Category",
          name: "category",
          type: "reference",
          to: [{ type: "categories" }],
          validation: (Rule) => Rule.required(),
        },
        {
          name: "headline",
          title: "Headline",
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
      name: "research",
      title: "Research",
      type: "object",
      fields: [
        {
          title: "Category",
          name: "category",
          type: "reference",
          to: [{ type: "categories" }],
          validation: (Rule) => Rule.required(),
        },
        {
          name: "headline",
          title: "Headline",
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
      name: "consulting",
      title: "Collaboration",
      type: "object",
      fields: [
        {
          title: "Category",
          name: "category",
          type: "reference",
          to: [{ type: "categories" }],
          validation: (Rule) => Rule.required(),
        },
        {
          name: "headline",
          title: "Headline",
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

    { name: "subjectsTitle", title: "Subjects Title", type: "string" },

    {
      name: "subjects",
      title: "Subjects",
      type: "array",
      of: [{ name: "subject", title: "", type: "string" }],
    },
  ],

  preview: {
    prepare() {
      return {
        title: "About",
      };
    },
  },
});
