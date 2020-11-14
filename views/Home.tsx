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
  ContactForm,
  Socials,
  SectionDivider
} from '../components';
import { introduction, about, knowledge, contact, projects } from '@/db'
import { ProjectsDescriptions } from '../components/Projects/ProjectDescription';
import { LoadingForm } from '../components/LoadingForm';
import { ErrorMessage } from '../components/ErrorMessage';
import { SuccessMessage } from '../components/SuccessMessage';
import { SelectLang } from '../components/SelectLang';
import { MultilangContext } from '@/contexts';
import { Bezier, Vector2 } from '@/utils'

const WHEEL_AMOUNT = 100

const bezier = new Bezier(
  new Vector2(0,1),
  new Vector2(1/2,1),
  new Vector2(1/2,0),
  new Vector2(1, 0)
)

function createBezier(power:number) {
  return new Bezier(
    new Vector2(0,power),
    new Vector2(power/2,power),
    new Vector2(power/2,0),
    new Vector2(power, 0)
  )
}

export function Home(){
  const { lang, translateObject } = React.useContext(MultilangContext)
  let html = null
  let isMouseDown = false
  let mouseX = 0
  let startPosition = 0
  let startTime:Date = null
  let endTime:Date = null
  let stopDrag = false

  React.useEffect(()=>{
    html = document.querySelector('html')
    html.addEventListener('mousewheel',onScroll)
    html.addEventListener('mousemove',mouseMove)
    html.addEventListener('mousedown',mouseDown)
    html.addEventListener('mouseup',mouseUp)
    html.addEventListener('mouseleave',mouseLeave)

    return () => {
      html.removeEventListener('mousewheel',onScroll)
      html.removeEventListener('mousemove',mouseMove)
      html.removeEventListener('mousedown',mouseDown)
      html.removeEventListener('mouseup',mouseUp)
      html.removeEventListener('mouseleave',mouseLeave)
    }
  })

  function onScroll(e){
    console.log(e)
    const wheelDelta = e.wheelDelta
    const direction = (wheelDelta / Math.abs(wheelDelta)) * -1;
    const amount = direction*WHEEL_AMOUNT
    moveScreen(amount)
  }

  function moveScreen(amount){
    if(html){
      html.scrollLeft += amount
    }
  }

  function mouseDown(event) {
    stopDrag = true
    isMouseDown = true
    startPosition = mouseX = event.clientX
    startTime = new Date()
  }

  function mouseUp(event) {
    endTime = new Date()
    isMouseDown = false
    stopDrag = false
    const energiStored = startPosition - event.clientX
    let timeSince = (endTime.getTime() - startTime.getTime()) / 40
    timeSince = Math.pow(timeSince, 2)
    const fEnergy = energiStored/(timeSince)
    console.log(fEnergy)
    if(Math.abs(fEnergy) > 4){
      drag(fEnergy, 0.2)
    }
  }

  function drag (energy:number, resistence) {
    const eAbs = Math.abs(energy)
    const dir = energy/eAbs

    moveScreen(energy)
    if(eAbs - resistence < 0.1 || stopDrag){
      stopDrag = false
      return
    }
    requestAnimationFrame(()=>drag((eAbs - resistence) * dir, resistence))
  }

  function mouseLeave() {
    isMouseDown = false
    mouseX = 0
  }

  function mouseMove(event) {
    if(isMouseDown) {
      const deltaMove = event.clientX - mouseX;
      mouseX = event.clientX;
      moveScreen(deltaMove * -1)
    }
  }
  return <>
    <GlobalStyle/>
    <SelectLang/>
    <Container >
      <Wrapper>
        <BannerSection imageUrl={translateObject(introduction).imageUrl} type={SectionType.gradient}>
          <h1>{translateObject(introduction).title}</h1>
          <p>{translateObject(introduction).description}</p>
        </BannerSection>
        <Section type={SectionType.image} width="30rem" imageOptions={{
          imageUrl:translateObject(about).imageUrl,
          overlay:true,
          imageWidth:'55rem',
          flexEnd:true,
          color1:'rgba(86, 73, 111, 0.57)',
          color2:'rgba(124, 60, 60, 0.56)',
          color3:'rgba(177, 142, 82, 0.36)'
        }}>
          <h2>{translateObject(about).title}</h2>
          <p>{translateObject(about).description}</p>
        </Section>
        <KnowledgeSection knowledge={translateObject(knowledge)}/>
        <ProjectsSection projectsText={translateObject(projects.texts)} />
        <Projects projects={projects.projects}/>
        <Section type={SectionType.gradient} width="18rem" gradientOptions={{
          color1:'#55496b',
          color2:'#6f6789',
          color3:'#9974b1'
        }}>
          <h2>{translateObject(contact).title}</h2>
          <p>{translateObject(contact).description}</p>
        </Section>
        <Section type={SectionType.gradient} width="60rem" gradientOptions={{
          color1:'#463a5d',
          color2:'#60567f',
          color3:'#955db9'
        }}>
          <SectionDivider>
            <ContactForm/>
            <LoadingForm/>
            <SuccessMessage/>
            <ErrorMessage/>
            <Socials/>
          </SectionDivider>
        </Section>
      </Wrapper>
    </Container>
  </>
}