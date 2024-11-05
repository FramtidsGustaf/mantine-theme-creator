import { DeepSignal, deepSignal } from "deepsignal";
import { defaultProps } from "../utils/propsAsString";

interface ComponentSignal {
  values: { name: string; value: any }[];
  setValue(index: number, value: any): void;
  reset(): void;
  isDirty: boolean;
  getDefaultProps: {
    value?: any;
  };
  defaultPropsAsStr: string;
}

export const componentSignal = (
  initialValues: { name: string; value: any }[]
) => {
  const signal: DeepSignal<ComponentSignal> = deepSignal({
    values: [...initialValues],

    setValue(index, value) {
      const name = initialValues[index].name;
      signal.values[index] = { name, value };
    },

    reset() {
      signal.values = initialValues;
    },

    get isDirty() {
      return signal.values.some(
        (value, index) => value.value !== initialValues[index].value
      );
    },

    get getDefaultProps() {
      const o: { [key: string]: any } = {};

      for (let i = 0; i < initialValues.length; i++) {
        if (signal.values[i].value !== initialValues[i].value) {
          o[initialValues[i].name] = signal.values[i].value;
        }
      }

      return o;
    },

    get defaultPropsAsStr() {
      return defaultProps(signal.getDefaultProps);
    },
  });

  return signal;
};
