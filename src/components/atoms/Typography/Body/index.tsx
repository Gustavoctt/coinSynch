import styled from "styled-components";

type PProps = {
  color: string;
  bold?: boolean;
};

const Body = styled.p<PProps>`
  font-size: 1rem;
  line-height: 24;
  letter-spacing: 0;
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  color: ${({ color }) => color};
`;

export default Body;
