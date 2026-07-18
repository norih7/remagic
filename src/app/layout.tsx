import SiteLayout from "@/components/SiteLayout";
import { TitleProvider } from "@/context/TitleContext";
import "./globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    default: "RE:MAGIC ",
    template: "%s | RE:MAGIC テイルズオブエターニア攻略",
  },
  description:
    "テイルズオブエターニアのストーリー、データ、やり込み要素など攻略情報を公開。リマスター版にも対応予定のクリーンな攻略サイトです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={cn("font-sans", geist.variable)}>
      <body>
        <TitleProvider>
          <SiteLayout>{children}</SiteLayout>
        </TitleProvider>
      </body>
    </html>
  );
}
