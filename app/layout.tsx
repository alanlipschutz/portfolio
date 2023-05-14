import './globals.css';

export const metadata = {
  title: 'Alan Lipschutz',
  description: "Alan Lipschutz's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
