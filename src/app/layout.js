import "./globals.css";

import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer";
import PageTransitionEffect from "./PageTransitionEffect";

export const metadata = {
  title: "Space Between People",
  description: "Space Between People is ...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <PageTransitionEffect>
          {children}
          <Footer />
        </PageTransitionEffect>
      </body>
    </html>
  );
}
