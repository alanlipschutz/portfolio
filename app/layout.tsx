import Head from "next/head";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Alan Lipschutz",
  description: "Alan Lipschutz's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CBWLNVNK83"
        ></Script>
        <Script>
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-CBWLNVNK83');`}
        </Script>
      </Head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
