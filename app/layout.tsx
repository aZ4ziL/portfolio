import "@/styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Poppins } from "next/font/google";
config.autoAddCss = false;

const poppins = Poppins({
  weight: ["300", "400", "600", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Fajri Fath - Portfolio",
  description: "Portfolio website create by Fajri Fath",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-gray-300 dark:bg-gray-900" style={poppins.style}>
        {children}
      </body>
    </html>
  );
}
