import * as React from 'react';
import { FlexBox } from './FlexBox';
import { FlexBasis, BrandGrid, Section, SectionType } from '.';
import { Knowledge } from '../../interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker, faGitAlt, faReact } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import { tablet } from '../utils';

interface KnowledgeSectionProps{
  knowledge:Knowledge;
}

const KnowledgeFlex = styled(FlexBox)<{mobileMarginTop?:string}>`
  flex-direction: column;
  ${({mobileMarginTop})=>mobileMarginTop ? `margin-top:${mobileMarginTop}`:''}
  ${tablet`
    flex-direction: row;
    margin-top: 0;
  `}
`;

export function KnowledgeSection({knowledge}:KnowledgeSectionProps){
  return <Section type={SectionType.gradient} width="45rem" gradientOptions={{
    color2:'#b761ad',
    color3:'#8b75b6'
  }}>
    <KnowledgeFlex>
      <FlexBasis basis="45%">
        <h2>{knowledge.title}</h2>
        <p>{knowledge.description}</p>
      </FlexBasis>
      <KnowledgeFlex basis="55%" mobileMarginTop="50px" alignItems="center" justifyContent="center">
        <BrandGrid>
          <FontAwesomeIcon icon={faDocker} size="3x" />
          <FontAwesomeIcon icon={faGitAlt} size="3x" />
          <FontAwesomeIcon icon={faReact} size="3x" />
          <FontAwesomeIcon icon={faDocker} size="3x" />
          <FontAwesomeIcon icon={faGitAlt} size="3x" />
          <FontAwesomeIcon icon={faReact} size="3x" />
        </BrandGrid>
      </KnowledgeFlex>
    </KnowledgeFlex>
  </Section>
}