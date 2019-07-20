import * as React from 'react'
import styled from 'styled-components';
import { FlexBox } from './FlexBox';
import { MultilangContext } from './MultiLangPage';
import { tablet } from '../utils';

const BaseFormInput = styled.input.attrs({required:true})`
  border: solid 2px rgba(255, 255, 255, 0.25);
  border-radius: 0.25rem;
  background-color: transparent;
  padding: 0.5rem 0.75rem;
  color: inherit;
  &:focus{
    border-color: #ffe4b4;
    outline:none;
  }

  ${tablet`
    margin: 0 0.7rem;
  `}
`;

const BaseFormTextArea = styled.textarea.attrs({required:true})`
  border: solid 2px rgba(255, 255, 255, 0.25);
  border-radius: 0.25rem;
  background-color: transparent;
  padding: 0.5rem 0.75rem;
  color: inherit;
  resize: none;
  &:focus{
    border-color: #ffe4b4;
    outline:none;
  }

  ${tablet`
    margin: 0 0.7rem;
  `}
`;

const BaseSubmitButton =  styled.input.attrs({
  type:'submit'
})`
  border-radius: 0.25rem
  background-color: white;
  padding: .7rem 1.5rem;
  margin: 1.5rem 0 0;
  ${tablet`
    margin-left: 0.7rem;
    margin-right: 0.7rem;
  `}
`;

const LabelText = styled.span`
  ${tablet`
    margin: 0 0.7rem;
    margin-bottom: 0.5rem;
  `}
`;

interface FormInputProps{
  label:string;
  width?:string;
  margin?: string;
  type:string;
  id:string;
  name:string;
}

const FormInputContainer = styled(FlexBox)`
  width: 100%;
  margin: 1.5rem 0 0 0;
  &:first-child{
    margin: 0;
  }
  ${tablet`
    &:first-child{
      margin: 1.5rem 0 0 0;
    }
    width: ${(props) => props.width || 'auto'}
  `}
`;

function FormInput(props:FormInputProps){
  if(props.type === 'textarea'){
    return <FormInputContainer as="label" directiom="column" margin={props.margin} width={props.width || '50%'}>
      <LabelText>{props.label}</LabelText>
      <BaseFormTextArea rows={6} id={props.id} name={props.name}/>
    </FormInputContainer>
  }

  return <FormInputContainer as="label" directiom="column" width={props.width || '50%'}>
    <LabelText>{props.label}</LabelText>
    <BaseFormInput type={props.type} id={props.id} name={props.name}/>
  </FormInputContainer>
}

export function ContactForm(){
  const {t} = React.useContext(MultilangContext)

  return <FlexBox data-type="contact-form" as="form" wrap="wrap">
    <FormInput label={t('form.name','Nome')} type="text" id="form@name" name="name"/>
    <FormInput label={t('form.email','Email')} type="email" id="form@email" name="email"/>
    <FormInput label={t('form.message','Mensagem')} margin="2rem 0 0 0" width="100%" type="textarea" id="form@message" name="message"/>
    <FlexBox>
      <BaseSubmitButton value={t('form.send','Enviar mensagem')}/>
    </FlexBox>
  </FlexBox>
}