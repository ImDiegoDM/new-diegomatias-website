import styled from "styled-components";
import { FlexBox } from "./FlexBox";
import { tablet } from "../utils";

export const SectionDivider = styled(FlexBox)`
  flex-direction: column;
  ${tablet`
    flex-direction: row;
  `}
`