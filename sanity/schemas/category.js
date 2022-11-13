export default {
  name: "category",
  title: "Kategoria",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Kategorian nimi",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Kategorian kuva",
      type: "string",
    },
  ],
};
