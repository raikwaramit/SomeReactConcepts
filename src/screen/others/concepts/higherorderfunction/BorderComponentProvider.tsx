import * as React from "react";

export interface IBorderComponentProviderProps {
  childComponent: any;
}

export default function BorderComponentProvider(
  props: IBorderComponentProviderProps
) {
  return <div className="p-4 outline rounded-lg">{props.childComponent}</div>;
}
