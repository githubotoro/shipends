import "./globals.css";
import { Roboto_Flex, Roboto_Mono } from "@next/font/google";
import { Navbar } from "@/app/components/ui";
import { cx } from "class-variance-authority";

const robotoSans = Roboto_Flex({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "block",
  variable: "--font-robotoSans",
});

const robotoMono = Roboto_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "block",
  variable: "--font-robotoMono",
});

export const metadata = {
  title: {
    default: "Shipends",
    template: "%s | Shipends",
  },
  description: "Build cool products, without reading docs.",
  openGraph: {
    title: "Shipends",
    description: "Build cool products, without reading docs.",
    url: "https://shipends.co",
    siteName: "Uday Khokhariya",
    images: [
      {
        url: "https://shipends.co/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Shipends",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  verification: {
    google: "to-be-added",
    yandex: "to-be-added",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="scroll-p-12">
      <body
        className={cx(
          robotoSans.variable,
          robotoMono.variable,
          "bg-isSystemDarkPrimary text-isLabelDarkSecondary flex flex-col items-center place-content-start font-sans"
        )}
      >
        <Navbar />
        <div className="flex flex-col items-center w-full place-content-start">
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
