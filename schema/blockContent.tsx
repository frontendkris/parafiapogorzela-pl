import {defineType, defineArrayMember} from "sanity";
import {MenuIcon} from "@sanity/icons";
import type {PropsWithChildren} from "react";

export default defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      title: "Block",
      type: "block",
      //@ts-ignore
      styles: [
        {
          title: "Normal",
          value: "normal",
          component: (props: PropsWithChildren) => (
            <p className="mb-2">{props.children}</p>
          ),
        },
        {
          title: "H1",
          value: "h1",
          component: (props: PropsWithChildren) => (
            <p className="text-6xl max-md:text-4xl font-medium leading-none">
              {props.children}
            </p>
          ),
        },
        {
          title: "H2",
          value: "h2",
          component: (props: PropsWithChildren) => (
            <h2 className="text-[40px] max-md:text-3xl font-bold leading-snug">
              {props.children}
            </h2>
          ),
        },
        {
          title: "H3",
          value: "h3",
          component: (props: PropsWithChildren) => (
            <h3 className="text-4xl max-md:text-2xl font-medium leading-none">
              {props.children}
            </h3>
          ),
        },
        {
          title: "H4",
          value: "h4",
          component: (props: PropsWithChildren) => (
            <h4 className="text-[24px] max-md:text-xl font-semibold leading-snug">
              {props.children}
            </h4>
          ),
        },
        {
          title: "H5",
          value: "h5",
          component: (props: PropsWithChildren) => (
            <h5 className="text-[20px] max-md:text-xl font-semibold leading-loose">
              {props.children}
            </h5>
          ),
        },
        {
          title: "Quote",
          value: "blockquote",
          component: (props: PropsWithChildren) => (
            <blockquote className="block p-6 !my-8 bg-[rgba(0,0,0,0.2)] border-l-4 border-gray-300">
              <p className="italic font-medium leading-relaxed">
                {props.children}
              </p>
            </blockquote>
          ),
        },
      ],
      lists: [
        {title: "Bullet", value: "bullet"},
        {title: "Numbered", value: "number"},
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: "Strong", value: "strong"},
          {title: "Emphasis", value: "em"},
          {title: "Underline", value: "underline"},
          {
            title: "Center",
            value: "center",
            icon: MenuIcon,
            component: (props: PropsWithChildren) => (
              <div className="w-full text-center">{props.children}</div>
            ),
          },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    }),
    {
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity.",
        },
      ],
    },
  ],
});
