import { Inter, Figtree } from "next/font/google";

import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
const figtree = Figtree({ subsets: ["latin"] });

export const metadata = {
   title: "Creative Quiz Round",
   description:
      "Are you a true connoisseur? Prove it with our quiz! From sports to science, our challenging quiz has something for everyone. Test yourself and compete with your friends to see who can get the highest score! Start now and show that you are the best in trivia!",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body className={`${figtree.className} bg-primary`}>{children}</body>
      </html>
   );
}
