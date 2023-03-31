import { FC, Fragment } from "react";
import Header from "./Header";
const Layout: FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="pt-24">{children}</div>
    </div>
  );
};

export default Layout;
