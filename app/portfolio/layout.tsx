import Progress from "@/components/Progress";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Fajri Fath - Portfolio",
  description: "Website portfolio Fajri Fath",
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Progress />
      <Sidebar>{children}</Sidebar>
    </>
  );
}
