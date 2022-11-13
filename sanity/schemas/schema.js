import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import category from "./category";
import restaurant from "./restaurant";
import featured from "./featured";
import dish from "./dish";
import blockContent from "./blockContent";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    restaurant,
    category,
    dish,
    featured,
    blockContent,
  ]),
});
