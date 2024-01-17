import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Music Prefer' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      Music Prefer
    </header>
    {children}
    <footer>
        <Link href="/">홈</Link>
        <Link href="/">검색</Link>
        <Link href="/">평가</Link>
        <Link href="/">마이</Link>
    </footer>
  </div>
)

export default Layout
