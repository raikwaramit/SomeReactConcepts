import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

/**
 * Props type definition for the main screen.
 */
export interface HeaderComponentProps {}

/**
 * Functional component for the main screen component.
 *
 * @param props properties for the main screen component.
 * @returns Returns a ui component for the main screen.
 */
export default function HeaderComponent(props: HeaderComponentProps) {
  return (
    <div className="grid grid-cols-2 grid-flow-row justify-center gap-6 outline m-4 rounded-md p-2">
      <div className="w-fit h-fit text-4xl justify-center text-amber-500 hover:text-amber-700 ">
        <NavLink to="/">React concepts</NavLink>
      </div>
      <div className="flex ">
        <NavLinkComponent path="/suspense" text="Suspense component" />
        <NavLinkComponent path="/lazyloading" text="Lazy loading" />
      </div>
    </div>
  );
}

interface NavLinkProps {
  text: string;
  path: string;
}

function NavLinkComponent(props: NavLinkProps) {
  return (
    <div className="w-fit h-fit hover:shadow-md outline hover:cursor-pointer hover:bg-blue-500 text-lg rounded-md m-3 bg-amber-400 ">
      <NavLink className="p-4" to={props.path}>
        {props.text}
      </NavLink>
    </div>
  );
}
