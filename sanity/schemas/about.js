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
      ],
    },
    {
      name: "research",
      title: "Research",
      type: "object",
      fields: [
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
      ],
    },
    {
      name: "consulting",
      title: "Consulting",
      type: "object",
      fields: [
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
      ],
    },
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
