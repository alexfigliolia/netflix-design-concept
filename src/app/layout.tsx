import { Red_Hat_Display } from "next/font/google";
import { classnames } from "@figliolia/classnames";
import { Header } from "Components/Header";
import { OptionalChildren } from "Types/React";
import "Styles/Reset.scss";

const redHat = Red_Hat_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"],
});

export default function RootLayout({ children }: OptionalChildren) {
  return (
    <html lang="en">
      <body className={classnames(redHat.variable)}>
        <Header />
        {children}
      </body>
    </html>
  );
}
