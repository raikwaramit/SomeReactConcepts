import { NavLink, Outlet } from "react-router-dom";

export interface IOthersConceptProps {}

export default function OthersConcept(props: IOthersConceptProps) {
  return (
    <>
      <div className="flex-col-auto justify-center m-5 rounded-lg outline">
        <div className="text-3xl text-center my-5">Others React concepts </div>
        <div className="flex gap-4 p-10">
          <div className=" rounded-lg bg-violet-400 hover:bg-violet-600 outline hover:shadow-md">
            <NavLink className="p-6" to="">
              MainPage
            </NavLink>
          </div>
          <div className=" rounded-lg bg-violet-400 hover:bg-violet-600 outline hover:shadow-md">
            <NavLink className="p-6" to="virtualdom">
              Virtual Dom concept
            </NavLink>
          </div>
          <div className="rounded-lg bg-violet-400 hover:bg-violet-600 outline hover:shadow-md">
            <NavLink className="p-6" to="hoc">
              Higher order function
            </NavLink>
          </div>
          <div className="rounded-lg bg-violet-400 hover:bg-violet-600 outline hover:shadow-md">
            <NavLink className="p-6 text-lg" to="page3">
              Page 3
            </NavLink>
          </div>
          <div className="rounded-lg bg-violet-400 hover:bg-violet-600 outline hover:shadow-md">
            <NavLink className="p-6 text-lg" to="page4">
              Page 4
            </NavLink>
          </div>
        </div>
        <div className="rounded-lg outline-lime-400 outline m-5 p-5">
          <Outlet />
        </div>
      </div>
    </>
  );
}
