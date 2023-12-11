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
    <div className="flex justify-center gap-6 outline m-4 rounded-xl p-2">
      <div className="flex items-start justify-between text-4xl px-3 text-amber-500 hover:text-amber-700 ">
        <NavLink to="/">React concepts</NavLink>
      </div>
      <div className="flex justify-end items-center">
        <NavLinkComponent path="/suspense" text="Suspense component" />
        <NavLinkComponent path="/lazyloading" text="Lazy loading" />
        <NavLinkComponent path="/nestedrouting" text="Nested routing" />
        <NavLinkComponent path="/others" text="OthersConcept" />
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
    <div className="w-fit h-fit  hover:shadow-md outline hover:cursor-pointer hover:bg-blue-500 text-lg rounded-md m-3 bg-amber-400 ">
      <NavLink className={({ isActive }) => "p-4 text-center "} to={props.path}>
        {props.text}
      </NavLink>
    </div>
  );
}
