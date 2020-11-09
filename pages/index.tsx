import * as React from 'react'
import { MultiLangPage } from '@/components'
import { Home } from '@/views'
import { useRouter } from 'next/router'

export default function HomePage() {
  const router = useRouter()
  let lang = router.query.lang ? router.query.lang : "pt"

  if (Array.isArray(lang)){
    lang = lang[0]
  }

  return <MultiLangPage lang={lang}>
    <Home />
  </MultiLangPage>
}