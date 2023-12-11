import { Button, CircularProgress, TextField } from "@mui/material";
import { Suspense, useState } from "react";

export interface ISuspenseComponentProps {}

export default function SuspenseComponent(props: ISuspenseComponentProps) {
  const [list, setList] = useState<string[]>([]);
  const [value, setValue] = useState("");

  const clickHandler = () => {
    addDelay(setList([...list, value]));
  };

  return (
    <div className="flex-col justify-center m-5 rounded-lg outline">
      <div className="text-3xl text-center my-5"> Suspense loading</div>
      <div className="w-auto rounded-md outline-dashed p-5 m-5 flex">
        <div className=" flex justify-center items-center gap-3">
          <TextField
            variant="outlined"
            label="Enter value of component"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          ></TextField>
          <Button onClick={clickHandler} variant="contained">
            Click to add
          </Button>
        </div>
        {
          <Suspense fallback={<CircularProgress variant="indeterminate" />}>
            {list.map((value, index) => {
              return (
                <div
                  className=" text-center text-lg p-3 m-2 bg-slate-500 rounded-md outline"
                  key={index}
                >
                  {value}
                </div>
              );
            })}
          </Suspense>
        }
      </div>
    </div>
  );
}

function addDelay(promise: any) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
