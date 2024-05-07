import "./globals.css";

export const metadata = {
  title: "Space Between People",
  description: "Space Between People is ...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
