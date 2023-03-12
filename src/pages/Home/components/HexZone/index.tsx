import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';
import { getStaticCDN } from '../../../../utils/utils';


const StyledContainer = styled.div`
  display: flex;
  height: 184px;
  align-items: center;
  justify-content: center;
  gap: 84px;

 
`;

const StyledHexItem = styled.div`
    width: 136px;
    height: 136px;

    img{
        width: 100%;
        height: 100%;
    }
`
const HexList=[
{
    item:'morning',
    url: '/Imagine/hexZone/morning.svg',
    href:''
},
{
    item:'lunch',
    url: '/Imagine/hexZone/lunch.svg',
    href:''
},
{
    item:'dinner',
    url: '/Imagine/hexZone/dinner.svg',
    href:''
},
{
    item:'snack',
    url: '/Imagine/hexZone/snack.svg',
    href:''
},
]

const HexZone = () => {
    const navigate = useNavigate()
    const handleClick = (href:string)=>{
        navigate(href)
    }

    const renderHex = ()=>{
        return HexList?.map((hex)=> <StyledHexItem key={hex.item} onClick={()=>{handleClick(hex.href)}}>
                    <img src={getStaticCDN(hex.url)} alt={`hex-${hex.item}`}/>
            </StyledHexItem>)
       
    }
  return (
    <StyledContainer>
        {renderHex()}
    </StyledContainer>
  )
}

export default HexZone