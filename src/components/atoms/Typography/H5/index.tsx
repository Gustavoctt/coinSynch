import styled from "styled-components";

type H5Props = {
  color: string;
  bold?: boolean;
};

const H5 = styled.h5<H5Props>`
  font-size: 1.25rem;
  line-height: 24;
  letter-spacing: 0;
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  color: ${({ color }) => color};
`;

export default H5;
