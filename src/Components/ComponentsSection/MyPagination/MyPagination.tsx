import { Pagination, Switch } from "@mantine/core";
import { SizeAndRadiusSlider } from "../../SizeAndRadiusSlider/SizeAndRadiusSlider";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { ColorSelect } from "../../ColorSelect/ColorSelect";
import { pagination, PaginationProps } from "../../../store/PaginationStore";
import { SwitchStack } from "../SwitchStack/SwitchStack";

const Component = () => {
  return <Pagination total={10} />;
};

const Settigns = () => {
  return (
    <>
      <ColorSelect
        label="Color"
        value={pagination.values[PaginationProps.color].value}
        onChange={(value) => {
          pagination.setValue(PaginationProps.color, value);
        }}
      />

      <SizeAndRadiusSlider
        label="Size"
        value={pagination.values[PaginationProps.size].value}
        onChange={(value) => {
          pagination.setValue(PaginationProps.size, value);
        }}
      />

      <SizeAndRadiusSlider
        label="Radius"
        value={pagination.values[PaginationProps.radius].value}
        onChange={(value) => {
          pagination.setValue(PaginationProps.radius, value);
        }}
      />

      <SwitchStack>
        <Switch
          label="With controls"
          onChange={(event) =>
            pagination.setValue(
              PaginationProps.withControls,
              event.currentTarget.checked
            )
          }
          checked={pagination.values[PaginationProps.withControls].value}
        />

        <Switch
          label="With edges"
          onChange={(event) => {
            pagination.setValue(
              PaginationProps.withEdges,
              event.currentTarget.checked
            );
          }}
          checked={pagination.values[PaginationProps.withEdges].value}
        />
      </SwitchStack>
    </>
  );
};

export const MyPagination = () => {
  return (
    <ComponentsWrapper
      label="Pagination"
      isDirty={pagination.isDirty}
      onReset={pagination.reset}
      component={<Component />}
      settings={<Settigns />}
    />
  );
};
