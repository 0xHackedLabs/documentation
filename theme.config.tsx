import React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>0xHacked</span>,
  project: {
    link: 'https://github.com/0xHackedLabs',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/0xHackedLabs',
  darkMode: true,
  footer: {
    text: '2023 © 0xHacked. Powered by Nextra.',
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – 0xHacked'
      }
    }
  }
}

export default config
