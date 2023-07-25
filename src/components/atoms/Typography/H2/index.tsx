import styled from "styled-components";

type H2Props = {
  color: string;
  bold?: boolean;
};

const H2 = styled.h2<H2Props>`
  font-size: 2.5rem;
  line-height: 48;
  letter-spacing: -1;
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  color: ${({ color }) => color};
`;

export default H2;
