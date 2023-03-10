import React from 'react'
import styled from 'styled-components/macro';
import Logger from '../../../../services/Logger';
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
    url: '/assets/hexZone/morning.svg',
    href:''
},
{
    item:'lunch',
    url: '/assets/hexZone/lunch.svg',
    href:''
},
{
    item:'dinner',
    url: '/assets/hexZone/dinner.svg',
    href:''
},
{
    item:'snack',
    url: '/assets/hexZone/snack.svg',
    href:''
},
]

const HexZone = () => {
    const handleClick = ()=>{
        Logger.log('Navigate action')
    }

    const renderHex = ()=>{
        return HexList?.map((hex)=> <StyledHexItem key={hex.item} onClick={handleClick}>
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