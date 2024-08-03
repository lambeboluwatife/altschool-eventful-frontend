import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eventful - Dashboard",
  description: "User Dashboard.",
};

interface DashboardLayoutProp {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProp> = ({ children }) => {
  return <div>{children}</div>;
};

export default DashboardLayout;
