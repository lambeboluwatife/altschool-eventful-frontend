import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eventful - Sign In",
  description: "Sign in to your Eventful account.",
};

interface LoginLayoutProps {
  children: ReactNode;
}

const LoginLayout: React.FC<LoginLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default LoginLayout;
