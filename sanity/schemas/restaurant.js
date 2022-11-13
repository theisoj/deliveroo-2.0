export default {
  name: "restaurant",
  title: "Ravintola",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Ravintolan nimi",
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
      name: "image",
      type: "string",
      title: "Ravintolan kuva",
    },
    {
      name: "lat",
      type: "number",
      title: "Leveysaste",
    },
    {
      name: "long",
      type: "number",
      title: "Pituusaste",
    },
    {
      name: "address",
      type: "string",
      title: "Ravintolan osoite",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type: "number",
      title: "Anna arvostelu (1-5 tähteä)",
      validation: (Rule) =>
        Rule.required().min(1).max(5).error("Anna arvo 1-5:n väliltä."),
    },
    {
      name: "type",
      type: "string",
      title: "Kategoria",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "dishes",
      type: "array",
      title: "Ruokalajit",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
};
