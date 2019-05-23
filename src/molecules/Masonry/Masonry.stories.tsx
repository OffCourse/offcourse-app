// import React, { Fragment } from "react";
// import styled from "styled-components";
// import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
// import { withKnobs, select } from "@storybook/addon-knobs";
// import { map, values, addIndex } from "ramda";

// import { Card } from "atoms";
// import Masonry from "./Masonry";
// import { Direction, Variant, Size, ErrorState } from "enums";
// const mapWithIndex = addIndex(map);

// const text = `
// Lorem ipsum dolor amet small batch heirloom thundercats sartorial irony crucifix. Butcher locavore cloud bread humblebrag meh celiac hexagon biodiesel sustainable kale chips messenger bag. Ramps forage next level leggings, retro kale chips disrupt photo booth shaman farm-to-table cornhole neutra bicycle rights cred woke. Vexillologist cornhole vape, subway tile microdosing sartorial jianbing authentic biodiesel. Portland pop-up shabby chic gastropub mlkshk bushwick shoreditch before they sold out craft beer coloring book.
// `;

// const randInt = (min: number, max: number) => {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// const createFragment = () => {
//   return text.slice(randInt(0, 200), randInt(300, 600)).trim();
// };

// const fragments = [0, 1, 2, 3, 4, 5, 6, 7, 8].map(createFragment);

// const breakpoints = [624, 928];

// storiesOf("Molecules|Masonry", module)
//   .addDecorator(withKnobs)
//   .add("resizes on different breakpoints", () => {
//     return (
//       <Masonry breakpoints={breakpoints}>
//         {mapWithIndex(
//           (fragment, index) => (
//             <Card key={index}>{fragment}</Card>
//           ),
//           fragments
//         )}
//       </Masonry>
//     );
//   });
