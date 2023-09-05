import Providers from "@/app/Providers";
import Header from "@/components/Header";
import "./globals.css";
export const metadata = {
  title: "AMDB Database",
  description: "Ahmed movie database",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />

          <main> {children}</main>
        </Providers>
      </body>
    </html>
  );
}
