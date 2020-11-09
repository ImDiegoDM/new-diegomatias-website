import * as React from 'react'
import styled from 'styled-components';
import { tablet } from '../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faMediumM, faBehance } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const SocialsContainer = styled.div`
  position:relative;
  margin-top: 3rem;
  &:after{
    content: '';
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 2px;
    margin-left: 0;
    margin-top: -1.5rem;
    background-color: rgba(255, 255, 255, 0.25);
  }
  ${tablet`
    margin-top:0
    margin-left: 7rem;
    &:after{content: none}
    &:before{
      content: '';
      position: absolute;
      left: 0;
      top: -2.5rem;
      width: 2px;
      height: calc( 100% + 5rem );
      margin-left: -3.5rem;
      background-color: rgba(255, 255, 255, 0.25);
    }
  `}
`;

const SocialsUL = styled.ul`
  list-style-type: none;
  padding: 0;
`

const SocialLi = styled.li`
  display:flex;
  align-items: center;
  margin-top: 1.25rem;
  &:first-child{
    margin-top: 0;
  }
`;

const SocialLink = styled.a.attrs({
  target:"_blank"
})`
  color: inherit;
  text-decoration: none;
  &:hover{
    color: #ffe4b4;
  }
`;

const SocialIcon = styled(FontAwesomeIcon)`
  color: #726193;
`;
  
const SocialIconContainer = styled.div`
  font-size: 1.4rem;
  display:flex;
  justify-content:center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: white;
  margin-right: 1rem; 
`;

export function Socials(){
  return <SocialsContainer>
    <SocialsUL>
      <SocialLi>
        <SocialIconContainer>
          <SocialIcon icon={faLinkedinIn} />
        </SocialIconContainer>
        <SocialLink href="https://www.linkedin.com/in/diego-matias-de-oliveira-39a66610b/">Diego Matias de Oliveira</SocialLink>
      </SocialLi>
      <SocialLi>
        <SocialIconContainer>
          <SocialIcon icon={faGithub} />
        </SocialIconContainer>
        <SocialLink href="https://github.com/ImDiegoDM">ImDiegoDM</SocialLink>
      </SocialLi>
      <SocialLi>
        <SocialIconContainer>
          <SocialIcon icon={faMediumM} />
        </SocialIconContainer>
        <SocialLink href="https://medium.com/@dm.diego.bh">@dm.diego.bh</SocialLink>
      </SocialLi>
      <SocialLi>
        <SocialIconContainer>
          <SocialIcon icon={faBehance} />
        </SocialIconContainer>
        <SocialLink href="https://www.behance.net/dmdiegobhe8d1">Diego Matias</SocialLink>
      </SocialLi>
      <SocialLi>
        <SocialIconContainer>
          <SocialIcon icon={faEnvelope} />
        </SocialIconContainer>
        <SocialLink as="p">contato@diegomatias.dev</SocialLink>
      </SocialLi>
    </SocialsUL>
  </SocialsContainer>
}