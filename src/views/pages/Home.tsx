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
  KnowledgeSection,
  ProjectsSection,
  Projects,
  ContactForm
} from '../components';
import { Introduction,About,Knowledge, ProjectsText,Project, Contact } from '../../interfaces'

interface HomeProps{
  introduction:Introduction;
  about:About;
  knowledge:Knowledge;
  projectsText:ProjectsText;
  projects:Project[];
  contact: Contact;
}

export function Home(props:HomeProps){
  const { introduction,about,knowledge,projectsText,projects,contact } = props;
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
        <ProjectsSection projectsText={projectsText} />
        <Projects projects={projects}/>
        <Section type={SectionType.gradient} width="18rem" gradientOptions={{
          color1:'#55496b',
          color2:'#6f6789',
          color3:'#9974b1'
        }}>
          <h2>{contact.title}</h2>
          <p>{contact.description}</p>
        </Section>
        <Section type={SectionType.gradient} width="50rem" gradientOptions={{
          color1:'#463a5d',
          color2:'#60567f',
          color3:'#955db9'
        }}>
          <ContactForm/>
        </Section>
      </Wrapper>
    </Container>
  </>
}