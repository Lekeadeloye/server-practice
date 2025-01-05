import { Outlet } from "react-router-dom";

import Header from "../../components/ui/Header";
// import style from "./style";

// Below is how to use slots with tailwind variant is classes become too long
// const { header, navbar, listItem, navLink } = style();

const Root = () => {
  return (
    <>
      <main>
        <Header />
        <div>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Root;
