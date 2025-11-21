import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Easion",
  description: "AI News Assistant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
