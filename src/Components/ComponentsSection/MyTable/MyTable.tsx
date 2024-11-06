import { Switch, Table } from "@mantine/core";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { SizeAndRadiusSlider } from "../../SizeAndRadiusSlider/SizeAndRadiusSlider";
import { table, TableProps } from "../../../store/TableStore";
import { SwitchStack } from "../SwitchStack/SwitchStack";

const elements = [
  { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];

const Component = () => {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};

const Settings = () => {
  return (
    <>
      <SizeAndRadiusSlider
        label="Horizontal spacing"
        value={table.values[TableProps.horizontalSpacing].value}
        onChange={(value) => {
          table.setValue(TableProps.horizontalSpacing, value);
        }}
      />

      <SizeAndRadiusSlider
        label="Vertical spacing"
        value={table.values[TableProps.verticalSpacing].value}
        onChange={(value) => {
          table.setValue(TableProps.verticalSpacing, value);
        }}
      />

      <SwitchStack>
        <Switch
          label="Sticky header"
          checked={table.values[TableProps.stickyHeader].value}
          onChange={(event) => {
            table.setValue(
              TableProps.stickyHeader,
              event.currentTarget.checked
            );
          }}
        />

        <Switch
          label="Striped"
          checked={table.values[TableProps.striped].value}
          onChange={(event) => {
            table.setValue(TableProps.striped, event.currentTarget.checked);
          }}
        />

        <Switch
          label="Highlight on hover"
          checked={table.values[TableProps.highlightOnHover].value}
          onChange={(event) => {
            table.setValue(
              TableProps.highlightOnHover,
              event.currentTarget.checked
            );
          }}
        />

        <Switch
          label="With table border"
          checked={table.values[TableProps.withTableBorder].value}
          onChange={(event) => {
            table.setValue(
              TableProps.withTableBorder,
              event.currentTarget.checked
            );
          }}
        />

        <Switch
          label="With column borders"
          checked={table.values[TableProps.withColumnBorders].value}
          onChange={(event) => {
            table.setValue(
              TableProps.withColumnBorders,
              event.currentTarget.checked
            );
          }}
        />

        <Switch
          label="With row borders"
          checked={table.values[TableProps.withRowBorders].value}
          onChange={(event) => {
            table.setValue(
              TableProps.withRowBorders,
              event.currentTarget.checked
            );
          }}
        />
      </SwitchStack>
    </>
  );
};

export const MyTable = () => {
  return (
    <ComponentsWrapper
      label="Table"
      isDirty={table.isDirty}
      onReset={table.reset}
      component={<Component />}
      settings={<Settings />}
    />
  );
};
