import { Pagination, Stack, Switch } from "@mantine/core";
import { SizeAndRadiusSlider } from "../../SizeAndRadiusSlider/SizeAndRadiusSlider";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { ColorSelect } from "../../ColorSelect/ColorSelect";
import { pagination, PaginationProps } from "../../../store/PaginationStore";

export const MyPagination = () => {
  return (
    <ComponentsWrapper
      isDirty={pagination.isDirty}
      label="Pagination"
      component={<Pagination total={10} />}
      settings={
        <>
          <ColorSelect
            label="Color"
            value={pagination.values[PaginationProps.color].value}
            onChange={(value) => {
              pagination.setValue(PaginationProps.color, value);
            }}
          />
          <Stack gap={0}>
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
          </Stack>
          <Stack>
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
          </Stack>
        </>
      }
    />
  );
};
