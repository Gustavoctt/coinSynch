import styled from "styled-components";

type LabelProps = {
  color: string;
  bold?: boolean;
};

const Label = styled.label<LabelProps>`
  font-size: 0.875rem;
  line-height: 16;
  letter-spacing: 0;
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  color: ${({ color }) => color};
`;

export default Label;
