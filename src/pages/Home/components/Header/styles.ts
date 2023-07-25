import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  max-width: 1216px;
  margin: 0 auto;

  // Animation
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * 7));
    }
  }

  // Styling
  .slider {
    background: white;
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
    height: 100px;
    margin: auto;
    overflow: hidden;
    position: relative;
    width: 960px;

    &::before,
    &::after {
      @include white-gradient;
      content: "";
      height: 100px;
      position: absolute;
      width: 200px;
      z-index: 2;
    }

    &::after {
      right: 0;
      top: 0;
      transform: rotateZ(180deg);
    }

    &::before {
      left: 0;
      top: 0;
    }

    .slide-track {
      animation: scroll 40s linear infinite;
      display: flex;
      width: calc(250px * 14);
    }

    .slide {
      height: 100px;
      width: 250px;
    }
  }
`;

export const FirstContent = styled.div`
  display: flex;
  gap: 1.5rem;
  img {
    width: 124px;
  }

  label {
    margin-left: 2.5rem;
  }
`;

export const SecondContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5rem;

  div {
    display: flex;
    flex-direction: row;
  }
`;

export const Carrousel = styled.div`
  display: flex;
  flex-direction: row;

  overflow: hidden;
  position: relative;
  max-width: 360px;

  div {
    animation: scroll 60s linear infinite;
    flex-shrink: 0;
    gap: 2rem;

    p {
      align-items: center;
    }
  }
`;
