import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "./lib/registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PloyFolio",
  description: "Pitchapa Pawong - Front-end Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
