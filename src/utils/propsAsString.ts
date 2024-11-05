export const propsAsString = (props: { [key: string]: any }) => {
  return JSON.stringify(props, null, 8)
    .replace(/"([^"]+)":/g, "$1:")
    .replace(/[}]/g, "      }");
};

export const defaultProps = (props: { [key: string]: any }) => {
  return `
      defaultProps: ${propsAsString(props)}`;
};
