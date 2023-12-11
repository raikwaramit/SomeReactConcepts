import { Button } from "@mui/material";

/**
 * Props type definition for the main screen.
 */
export interface IMainScreenProps {}

/**
 * Functional component for the main screen component.
 *
 * @param props properties for the main screen component.
 * @returns Returns a ui component for the main screen.
 */
export default function MainScreen(props: IMainScreenProps) {
  return (
    <div className=" flex-row justify-normal bg-cover h-screen m-5 outline-sky-600 p-5 outline rounded-md">
      <div className="w-fit h-fit text-4xl my-5 text-center text-amber-500 hover:text-amber-800 hover:cursor-pointer">
        React concepts
      </div>
      <div className="m-4 py-2 flex flex-wrap gap-4">
        <div className="w-fit hover:shadow-md ">
          <Button variant="outlined">Suspense component</Button>
        </div>
        <div className="w-fit hover:shadow-md ">
          <Button variant="outlined">Suspense</Button>
        </div>
        <div className="w-fit hover:shadow-md ">
          <Button variant="outlined">Suspense</Button>
        </div>
        <div className="w-fit hover:shadow-md ">
          <Button variant="outlined">Suspense</Button>
        </div>
        <div className="w-fit hover:shadow-md ">
          <Button variant="outlined">Suspense</Button>
        </div>
        <div className="w-fit hover:shadow-md ">
          <Button variant="outlined">Suspense</Button>
        </div>
        <div className="w-fit hover:shadow-md ">
          <Button variant="outlined">Suspense</Button>
        </div>
        <div className="w-fit hover:shadow-md ">
          <Button variant="outlined">Suspense</Button>
        </div>
        <div className="w-fit hover:shadow-md ">
          <Button variant="outlined">Suspense</Button>
        </div>
        <div className="w-fit hover:shadow-md ">
          <Button variant="outlined">Suspense</Button>
        </div>
      </div>
    </div>
  );
}
