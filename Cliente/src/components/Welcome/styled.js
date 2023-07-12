import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Russo+One&display=swap");
  margin-top: 30px;

  svg {
    font-family: "Russo One", sans-serif;
    width: 100%;
    height: 100%;
  }
  svg text {
    animation: stroke 5s infinite alternate;
    stroke-width: 2;
    stroke: #2ecc71;
    font-size: 100px;
    @media (max-width: 1000px) {
      font-size: 60px;
    }
    @media (max-width: 1220px) {
      font-size: 80px;
    }
  }
  @keyframes stroke {
    0% {
      fill: rgba(46, 204, 113, 0);
      stroke: rgba(46, 204, 113, 1);
      stroke-dashoffset: 25%;
      stroke-dasharray: 0 50%;
      stroke-width: 2;
    }
    70% {
      fill: rgba(46, 204, 113, 0);
      stroke: rgba(46, 204, 113, 1);
    }
    80% {
      fill: rgba(46, 204, 113, 0);
      stroke: rgba(46, 204, 113, 1);
      stroke-width: 3;
    }
    100% {
      fill: rgba(46, 204, 113, 1);
      stroke: rgba(46, 204, 113, 0);
      stroke-dashoffset: -25%;
      stroke-dasharray: 50% 0;
      stroke-width: 0;
    }
  }

  .wrapper {
    background-color: #13131f;
  }
`;
