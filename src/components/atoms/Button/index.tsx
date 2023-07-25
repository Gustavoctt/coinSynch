import styled, { css } from "styled-components";

type ButtonProps = {
  variant?: "default" | "solid";
};

const buttonModifier = {
  default: () => css`
    align-items: center;
    padding: 0.5rem 1.6rem;
    color: #5d6670;
    background: transparent;
    border: 0;
  `,
  solid: () => css`
    align-items: center;
    padding: 0.5rem 1.6rem;
    background: #fbab34;
    color: #fff;
    border-radius: 32px;
    border: 0;
  `,
};

const Button = styled.button<ButtonProps>`
  ${({ variant = "solid" }) => {
    return css`
      ${variant === "solid" && buttonModifier[variant]}
      ${variant === "default" && buttonModifier[variant]}
    `;
  }}
`;

export default Button;
