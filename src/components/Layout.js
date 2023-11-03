
import Header from './/Header.js';
import { Inter } from 'next/font/google';
import '../app/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <body className={inter.className}>{children}</body>
    </div>
  );
}