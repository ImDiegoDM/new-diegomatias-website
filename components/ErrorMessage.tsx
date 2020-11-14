import * as React from 'react'
import { FlexBox } from './FlexBox';
import { MultilangContext } from '@/contexts';

export function ErrorMessage(){
  const {t} = React.useContext(MultilangContext)
  return <FlexBox style={{display:'none'}} data-type="error.message" width="100%" directiom="column" alignItems="center" justifyContent="center">
    {t('error.message','Opps.. um erro ocorreu, por favor atualize a pagina e tente novamente. Se o error persistir entre em contato via email pelo contato@diegomatias.dev')}
  </FlexBox>
}