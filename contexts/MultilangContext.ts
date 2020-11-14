import * as React from 'react'
import { configTFunc, configTObject } from '../utils/translate';
import { MultiLang } from '../interfaces';

interface IMultiLangContext{
  t:(key:string,defaultValue:string)=>string
  translateObject:<T = any>(object:MultiLang)=>T
  lang: string
}

export const MultilangContext = React.createContext<IMultiLangContext>({
  t:configTFunc('pt-br'),
  translateObject:configTObject('pt-br'),
  lang: 'pt-br'
});