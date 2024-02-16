import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import {Suspense} from "react";
import Loading from "@/app/[lang]/loading";
import ThemeProvider from "@/context/theme";

const jetbrains = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Romanov.me',
  description: `My name is Yaroslav Romanov. I am a 
  Frontend Developer with 2 years of hands-on experience 
  crafting immersive digital experiences. Proficient in 
  transforming ideas into pixel-perfect, user-friendly 
  interfaces, I thrive on the dynamic interplay of design 
  and code. A relentless learner in the ever-evolving tech 
  landscape, I bring creativity and precision to every 
  project, ensuring seamless user interactions and 
  visually stunning web solutions. Let's code the future 
  together!`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={jetbrains.className}>
        <Suspense fallback={<Loading/>}>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
