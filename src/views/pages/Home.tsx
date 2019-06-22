import * as React from 'react'
import { GlobalStyle,Container,Wrapper,Section,BannerSection,FlexBasis,SectionType } from '../components';
import { Introduction,About,Knowledge } from '../../interfaces'
import { FlexBox } from '../components/FlexBox';

interface HomeProps{
  introduction:Introduction;
  about:About;
  knowledge:Knowledge;
}

export function Home(props:HomeProps){
  const { introduction,about,knowledge } = props;
  return <>
    <GlobalStyle/>
    <Container>
      <Wrapper>
        <BannerSection imageUrl={introduction.imageUrl} type={SectionType.gradient}>
          <h1>{introduction.title}</h1>
          <p>{introduction.description}</p>
        </BannerSection>
        <Section type={SectionType.image} width="30rem" imageOptions={{
          imageUrl:about.imageUrl,
          overlay:true,
          imageWidth:'55rem',
          flexEnd:true,
          color1:'rgba(86, 73, 111, 0.57)',
          color2:'rgba(124, 60, 60, 0.56)',
          color3:'rgba(177, 142, 82, 0.36)'
        }}>
          <h2>{about.title}</h2>
          <p>{about.description}</p>
        </Section>
        <Section type={SectionType.gradient} width="45rem">
          <FlexBox>
            <FlexBasis basis="45%">
              <h2>{knowledge.title}</h2>
              <p>{knowledge.description}</p>
            </FlexBasis>
            <FlexBox basis="55%" alignItems="center" justifyContent="center">test</FlexBox>
          </FlexBox>
        </Section>
      </Wrapper>
    </Container>
  </>
}