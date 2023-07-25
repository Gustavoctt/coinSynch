import styled from "styled-components";

type H4Props = {
  color: string;
  bold?: boolean;
};

const H4 = styled.h4<H4Props>`
  font-size: 1.5rem;
  line-height: 32;
  letter-spacing: 0;
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  color: ${({ color }) => color};
`;

export default H4;
