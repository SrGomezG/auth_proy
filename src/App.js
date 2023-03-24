import React from "react";
import { Home } from "./pages/General/Home";
import { Contact } from "./pages/General/Contact";
import { AdminHome } from "./pages/Admin/AdminHome";
import { SignIn } from "./pages/Admin/SignIn";
import { NotFound } from "./pages/General/NotFound/NotFound";

const App = () => {
  return (
    <React.Fragment>
      <Home />
      <Contact />
      <AdminHome />
      <SignIn />
      <NotFound />
    </React.Fragment>
  );
};

export default App;
