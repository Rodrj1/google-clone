import { Footer } from '@/components/Footer';
import './globals.css';

export const metadata = {
  title: 'Google Clone',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-auto w-screen">
      <body className="min-h-screen flex flex-col justify-between relative  w-screen">
        {children}
        <Footer />
      </body>
    </html>
  );
}
