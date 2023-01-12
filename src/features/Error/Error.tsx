import { useRouteError } from "react-router-dom";

function Error() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <>
      <h1>Oops!</h1>
      <p>{error.message || error.statusText}</p>
    </>
  );
}

export default Error;
