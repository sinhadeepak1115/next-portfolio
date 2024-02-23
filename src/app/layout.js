import { Inter } from "next/font/google";
import "./globals.css";
import TransitioinProvider from "@/components/transitioinProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Deepak Sinha Portfolio App",
  description: "Makeing an Animated Portfolio Page.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitioinProvider>{children}</TransitioinProvider>
      </body>
    </html>
  );
}
