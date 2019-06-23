import * as React from 'react'
import { configTFunc } from '../utils/translate';

interface IMultiLangContext{
  t:(key:string,defaultValue:string)=>string
}

export const MultilangContext = React.createContext<IMultiLangContext>({
  t:configTFunc('pt-br')
});

interface MultiLangPageProps{
  children:React.ReactNode;
  lang?:string;
}

export function MultiLangPage(props:MultiLangPageProps){
  return <MultilangContext.Provider value={{
    t:configTFunc(props.lang || 'pt-br')
  }}>
    {props.children}
  </MultilangContext.Provider>
}

