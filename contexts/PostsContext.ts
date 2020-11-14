import * as React from 'react'

export interface Post {
  categories: string[],
  'content:encoded': string,
  'content:encodedSnippet': string,
  creator: string,
  'dc:creator':string,
  guid: string,
  isoDate: string,
  link: string,
  pubDate: string,
  title: string
}

interface PostsContextProps{
  posts: Post[]
}

export const PostsContext = React.createContext<PostsContextProps>({
  posts:[]
})