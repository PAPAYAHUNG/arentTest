import React from 'react'
import styled from 'styled-components';
import iconMenu from '../../assets/TopNavigation/icon_menu.svg';

const StyledContainer = styled.div`
  display: flex;


`;



const ImageBanner = ({data}:any) => {
  const {url, percentage} = data || {}
  console.log({url});
  
  return (
    <StyledContainer>
      {/* <img src={url} alt="" /> */}
      <img src="assets/images/d01.jpg" alt="" />
    </StyledContainer>
  )
}

export default ImageBanner