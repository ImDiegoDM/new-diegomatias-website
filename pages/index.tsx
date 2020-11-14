import * as React from 'react'
import { MultiLangPage } from '@/components'
import { Home } from '@/views'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Html } from 'next/document'
import Parser from 'rss-parser'
import { PostsContext } from '@/contexts/PostsContext'

const parser = new Parser()

export default function HomePage(props) {
  console.log(props.posts)
  return <MultiLangPage lang={props.query.lang}>
    <PostsContext.Provider value={{posts:props.posts}}>
      <Head>
        <title> Diego Matias de Oliveira </title>
      </Head>
      <Home />
    </PostsContext.Provider>
  </MultiLangPage>
}

HomePage.getInitialProps = async ({ query }) => {
  const res = await parser.parseURL('https://medium.com/feed/@diegomatiasoliveira')
  console.log(res)
  return { query, posts: res.items }
};