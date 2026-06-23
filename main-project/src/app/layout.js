import './globals.css';

export const metadata = {
  title: 'Next.js 30 Days Challenge',
  description: 'Daily Next.js practice',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="min-h-screen bg-white text-gray-900 antialiased"
        suppressHydrationWarning  // ✅ Yeh line daalo
      >
        {children}
      </body>
    </html>
  );
}