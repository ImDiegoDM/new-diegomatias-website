import * as React from 'react'
import { FlexBox } from './FlexBox';
import { Loading } from './Loading';
import { MultilangContext } from '@/contexts';

export function LoadingForm(){
  const {t} = React.useContext(MultilangContext)
  return <FlexBox style={{display:'none'}} data-type="loading.message" width="100%" directiom="column" alignItems="center" justifyContent="center">
    <Loading/>
    {t('loading.message','Enviando mensagem...')}
  </FlexBox>
}