import { Outlet } from "react-router-dom";

const ProtectedLayout = () => {
    // the Protected Layout handle the user Data and checks for if the user is logged in or not
    // the Protected Layout is the second Main Layout of the app that uses in many cases of auth checking 
    // like sso , basic auth and any other auth handling method and strategy
  return <Outlet />;
};

export default ProtectedLayout;
