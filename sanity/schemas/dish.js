export default {
  name: "dish",
  title: "Ruokalaji",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Ruokalajin nimi",
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
      name: "price",
      title: "Ruokalajin hinta euroina (€)",
      type: "number",
    },
    {
      name: "image",
      title: "Ruokalajin kuva",
      type: "string",
    },
  ],
};
