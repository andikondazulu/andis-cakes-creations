

// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import styles from "./layout.module.css";
// import Link from 'next/link';
// import logoImg from '../public/logo.png';
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Andi's Cakes & Creations ",
//   description: "Cakes,Pastries,Events catering,planning and decor",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
//       <body>
//         <div className={styles.container}>
          

//           <nav className={styles.nav}>
             
   
//             <div className={styles.logo}>
//              <Image 
//       src={logo.png} 
//       alt="Andi's Cakes & Creations Logo" 
//       priority 
//     />
//             </div>
//             <ul className={styles.ul}>
//               <li><Link href="/#home">Home</Link></li>
//               <li><Link href="/#cakes">Cakes</Link></li>
//               <li><Link href="/#pastries">Pastries</Link></li>
//               <li><Link href="/#creation">Creations</Link></li>
//               <li><Link href="/about-us">About Us</Link></li>
          
//               <li><Link href="/contact-us">Contact Us</Link></li>
//             </ul>
//           </nav>

         
//           <main className={styles.mainContent}>
//             {children}
//           </main>

          
//           <footer className={styles.footer}>
//             <p>&copy; {new Date().getFullYear()} Andi's Cakes & Creations. All rights reserved.</p>
//           </footer>

//         </div>
//       </body>
//     </html>
//   );
// }



import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import Link from 'next/link';
import Image from 'next/image'; 
import logoImg from '../public/logo8.png';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Andi's Cakes & Creations ",
  description: "Cakes, Pastries, Events catering, planning and decor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <div className={styles.container}>
          
          <nav className={styles.nav}>
            <div className={styles.logo}>
             
              <Image 
              src="/logo9.png" 
              alt="Andi's Cakes & Creations Logo" 
              width={300}  
              height={300}
              priority 
              />

            </div>
            <ul className={styles.ul}>
              <li><Link href="/#home">Home</Link></li>
              <li><Link href="/#cakes">Cakes</Link></li>
              <li><Link href="/#pastries">Pastries</Link></li>
              <li><Link href="/#events">Events</Link></li>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>

          <main className={styles.mainContent}>
            {children}
          </main>

          <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Andi's Cakes & Creations. All rights reserved.</p>
          </footer>

        </div>
      </body>
    </html>
  );
}

