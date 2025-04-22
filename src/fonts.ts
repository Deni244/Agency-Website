import { Roboto_Flex, Roboto_Mono, Inter } from 'next/font/google'

export const robotoFlex = Roboto_Flex({
  subsets: ['latin'],
  weight: ['400', '500', '600'], // тільки ці ваги підтримуються
  variable: '--font-roboto-flex',
  display: 'swap',
})

export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

export const inter = Inter({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-inter',
  display: 'swap',
})