import styled from "styled-components";

type H3Props = {
  color: string;
  bold?: boolean;
};

const H3 = styled.h3<H3Props>`
  font-size: 2rem;
  line-height: 40;
  letter-spacing: 0;
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  color: ${({ color }) => color};
`;

export default H3;
