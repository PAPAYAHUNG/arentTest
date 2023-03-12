import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .link-home{
    ${props=>props.theme.typo.style.xlHeader}
    text-decoration: none;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: ${(props) => props.theme.color.light};
  background: ${(props) => props.theme.color.primary300to400};
  width: 296px;
  height: 56px;
  text-align: center;
  line-height: 56px;
  border-radius: 5px;
  }
`;

const ErrorPage = () => (
  <StyledContainer>
    <img
      src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
      alt="not-found"
    />
    <Link to="/" className="link-home">
      Go Home
    </Link>
  </StyledContainer>
);

export default ErrorPage;
