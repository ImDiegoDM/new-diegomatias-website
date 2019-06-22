import * as React from 'react'
import { 
  GlobalStyle,
  Container,
  Wrapper,
  Section,
  BannerSection,
  FlexBasis,
  SectionType, 
  BrandGrid,
  KnowledgeSection
} from '../components';
import { Introduction,About,Knowledge, ProjectsText } from '../../interfaces'

interface HomeProps{
  introduction:Introduction;
  about:About;
  knowledge:Knowledge;
  projectsText:ProjectsText;
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
        <KnowledgeSection knowledge={knowledge}/>
      </Wrapper>
    </Container>
  </>
}