import styled from "styled-components";

type H1Props = {
  color: string;
  bold?: boolean;
};

const H1 = styled.h1<H1Props>`
  font-size: 3rem;
  line-height: 56;
  letter-spacing: -1;
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  color: ${({ color }) => color};
`;

export default H1;
