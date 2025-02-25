import { HomeLayout } from "@/modules/home/ui/layouts/home-layout";
import { ReactNode } from "react";

interface layoutProps {
  children: ReactNode;
}
const Layout = ({ children }: layoutProps) => {
  return <HomeLayout>{children}</HomeLayout>;
};

export default Layout;
