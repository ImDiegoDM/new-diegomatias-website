import * as React from 'react'
import { configTFunc, configTObject } from '../utils/translate';
import { MultilangContext } from '@/contexts'

interface MultiLangPageProps{
  children:React.ReactNode;
  lang?:string;
}

export function MultiLangPage(props:MultiLangPageProps){
  return <MultilangContext.Provider value={{
    t:configTFunc(props.lang || 'pt-br'),
    translateObject:configTObject(props.lang || 'pt-br'),
    lang: props.lang || 'pt-br'
  }}>
    {props.children}
  </MultilangContext.Provider>
}

