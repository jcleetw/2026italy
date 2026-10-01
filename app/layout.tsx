import type {Metadata,Viewport} from "next"; import "./globals.css"; import Nav from "@/components/Nav";
export const metadata:Metadata={title:"2026 北義 × 聖托里尼",description:"18 天，9 個人，一段值得被留下來的旅程。",manifest:"/manifest.webmanifest"};
export const viewport:Viewport={themeColor:"#f3f0e8",width:"device-width",initialScale:1};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-Hant"><body><Nav/>{children}</body></html>}
