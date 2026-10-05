import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'System One — Think in systems',description:'An interactive workspace for learning system design, from first principles to interview practice.'};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}
