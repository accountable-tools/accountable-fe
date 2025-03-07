import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  return <main className="flex-1 p-6 transition-all duration-300">{children}</main>;
};

export default Main;
