import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eventful - Sign Up",
  description: "Create an Eventful account and create astonishing events.",
};

interface SignUpLayoutProps {
  children: ReactNode;
}

const SignUpLayout: React.FC<SignUpLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default SignUpLayout;
