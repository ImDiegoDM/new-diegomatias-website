import * as React from 'react'
import { configTFunc, configTObject } from '../utils/translate';
import { MultiLang } from '../../interfaces';

interface IMultiLangContext{
  t:(key:string,defaultValue:string)=>string
  translateObject:(object:MultiLang)=>string
}

export const MultilangContext = React.createContext<IMultiLangContext>({
  t:configTFunc('pt-br'),
  translateObject:configTObject('pt-br')
});

interface MultiLangPageProps{
  children:React.ReactNode;
  lang?:string;
}

export function MultiLangPage(props:MultiLangPageProps){
  return <MultilangContext.Provider value={{
    t:configTFunc(props.lang || 'pt-br'),
    translateObject:configTObject(props.lang || 'pt-br')
  }}>
    {props.children}
  </MultilangContext.Provider>
}

