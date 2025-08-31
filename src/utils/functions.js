import { produce } from "immer";

export const updateData = (attr, value, ...props) => {
  if (props.length === 0) {
    return value;
  }
  const [currentProp, ...remainingProps] = props;
  if (remainingProps.length === 0) {
    return produce(attr, draft => {
      draft[currentProp] = value;
    });
  }
  return produce(attr, draft => {
    if (!Object.prototype.hasOwnProperty.call(draft, currentProp)) {
      draft[currentProp] = {};
    }
    draft[currentProp] = updateData(draft[currentProp], value, ...remainingProps);
  });
};


export const generateId = (itemArray) => {
  const ids = itemArray.map((item) => item?.order);
  const maxId = Math.max(...ids);
  return maxId + 1;
};


export const addSvgAttrs = (svgString, attrs = {}) => {
  let extra = Object.entries(attrs)
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ");
  return svgString.replace("<svg", `<svg ${extra}`);
};
