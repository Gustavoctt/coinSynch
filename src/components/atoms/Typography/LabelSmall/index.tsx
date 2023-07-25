import styled from "styled-components";

type LabelSmallProps = {
  color: string;
  bold?: boolean;
};

const LabelSmall = styled.small<LabelSmallProps>`
  font-size: 0.75rem;
  line-height: 14;
  letter-spacing: 0;
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  color: ${({ color }) => color};
`;

export default LabelSmall;
