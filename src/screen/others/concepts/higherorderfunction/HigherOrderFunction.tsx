import BorderComponentProvider from "./BorderComponentProvider";

export interface IHigherOrderFunctionProps {}

export default function HigherOrderFunction(props: IHigherOrderFunctionProps) {
  return (
    <BorderComponentProvider
      childComponent={
        <>
          <BorderComponentProvider childComponent={<>AMIT</>} />
          <BorderComponentProvider
            childComponent={
              <BorderComponentProvider childComponent={<>Raikwar</>} />
            }
          />
        </>
      }
    />
  );
}
