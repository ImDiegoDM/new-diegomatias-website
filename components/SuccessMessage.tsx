import * as React from 'react'
import { FlexBox } from './FlexBox';
import { MultilangContext } from '@/contexts';

export function SuccessMessage(){
  const {t} = React.useContext(MultilangContext)
  return <FlexBox style={{display:'none'}} data-type="success.message" width="100%" directiom="column" alignItems="center" justifyContent="center">
    {t('success.message','Mensagem enviada com sucesso!')}
  </FlexBox>
}