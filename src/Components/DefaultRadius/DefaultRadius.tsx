// import { Container, MantineSize, Slider, Text } from "@mantine/core";
// import { colors } from "../../store/ColorThemeStore";

// const marks = [
//   {
//     value: 0,
//     label: "xs",
//   },
//   {
//     value: 1,
//     label: "sm",
//   },
//   {
//     value: 2,
//     label: "md",
//   },
//   {
//     value: 3,
//     label: "lg",
//   },
//   {
//     value: 4,
//     label: "xl",
//   },
// ];

// export const DefaultRadius = () => {
//   const handleRadiusChange = (value: number) => {
//     colors.setRadius(marks[value].label as MantineSize);
//   };

//   return (
//     <Container>
//       <Text>Default Radius</Text>
//       <Slider
//         defaultValue={2}
//         step={1}
//         marks={marks}
//         min={0}
//         max={4}
//         label={(value) => marks[value].label}
//         onChange={handleRadiusChange}
//       />
//     </Container>
//   );
// };
