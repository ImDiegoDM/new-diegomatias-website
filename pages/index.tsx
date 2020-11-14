import * as React from 'react'
import { MultiLangPage } from '@/components'
import { Home } from '@/views'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Html } from 'next/document'

export default function HomePage(props) {

  return <MultiLangPage lang={props.query.lang}>
    <Head>
      <title> Diego Matias de Oliveira </title>
    </Head>
    <Home />
  </MultiLangPage>
}

HomePage.getInitialProps = ({ query }) => {
  return { query };
};