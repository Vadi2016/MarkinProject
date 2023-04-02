import {MyProvider} from "@/app/context/state";
import '@/app/globals.css';


export default function RootLayout({ children }) {
 return (
    <html lang="en" >
    <MyProvider>
      <body style={{margin: 0}}>{children}</body>
    </MyProvider>
    </html>
  )
}
