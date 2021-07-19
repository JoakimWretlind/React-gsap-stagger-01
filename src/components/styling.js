import styled from 'styled-components';

// This will show after the stagger-effect
export const Container = styled.div`
overflow: hidden;
background: linear-gradient(-25deg, #B8D6DB, #8AABC3);
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const BgIntro = styled.div`
   position: absolute;
  width: 33.333333334%;
  height: 100%;
  top: 0%;
  z-index: 10;
  &.first{
    background: #333;
  }
  &.second{
  background: #333;
   left: 33.3%;
  }
  &.third{
    background: #333;
     left: 66.6%;
  }
`;

export const IntroContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  z-index: 15;
`;

export const HomeH2 = styled.h2`
  mix-blend-mode: difference;
  font-size: 7vw;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  color: #ffffff;
  mix-blend-mode: difference;
`;

export const HomeH3 = styled.h3`
  text-transform: uppercase;
  color: #f1f1f1;
  font-size: 3vw;
  letter-spacing: 0.1rem;
`;