import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "@/styles/globals.scss";
import Header from '@components/Header/Header'
import Footer from "@components/Footer/Footer";
import { getLandingPageData } from "@/utils/gets";
import { notFound } from "next/navigation";

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: "Fintech",
  description: "Development test for Assemble",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getLandingPageData()

  if (!data) {
    notFound()
  }

  const { footer, header } = data || {}

  return (
    <html lang="en">
      <body className={`${manrope.variable}`}>
        <Header companyName={header.company_name} menuItems={header.menu_items} />
        <div className="xl:max-w-7xl xl:mx-auto">
          {children}
        </div>
        <Footer footerTitle={footer.footer_title} contactLinks={footer.contact_links} />
      </body>
    </html>
  );
}
