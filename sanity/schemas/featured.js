export default {
  name: "featured",
  title: "Suositellut valikon luokat",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Suositeltu luokan nimi",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Lyhyt kuvaus",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "restaurants",
      type: "array",
      title: "Ravintolat",
      of: [{ type: "reference", to: [{ type: "restaurant" }] }],
    },
  ],
};
