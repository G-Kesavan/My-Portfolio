import "@/styles/globals.css";
import "@/styles/variables.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {children}
      </body>
    </html>
  );
}
