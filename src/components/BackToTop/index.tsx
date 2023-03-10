import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getStaticCDN } from '../../utils/utils';

interface IBackToTop {
  offsetBottom?: string;
  offsetRight?: string;
}

const StyledWrapper = styled.div<{
  visible?: boolean;
  offsetBottom?: string;
  offsetRight?: string;
}>`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  bottom: ${(props) => props.offsetBottom};
  right: ${(props) => props.offsetRight};
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  animation: fadeIn 0.3s;
  transition: opacity 0.4s;
  margin-bottom: 15px;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 991px) {
    img {
      width: 40px !important;
    }
  }
`;

const backToTopIcon = getStaticCDN('/assets/images/backToTop.svg');

const BackToTop: React.FC<IBackToTop> = ({ offsetBottom, offsetRight }) => {
  const [visible, setVisible] = useState<boolean>(false);
  let prevScrollPos = 0;

  const toggleVisible = () => {
    const currentScrollPos: number = window.pageYOffset > -1 ? window.pageYOffset : 0;
    const element: HTMLElement | null = document.getElementById('back-top');
    if (element) {
      if (prevScrollPos >= currentScrollPos) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
    prevScrollPos = currentScrollPos;
    if (prevScrollPos <= 0) {
      setVisible(false);
    }
  };

  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    <StyledWrapper
      id="back-top"
      offsetBottom={offsetBottom}
      offsetRight={offsetRight}
      visible={visible}
      onClick={scrollToTop}
    >
      <img src={backToTopIcon} alt="back-to-top" width="50" height="50" />
    </StyledWrapper>
  );
};

BackToTop.defaultProps = {
  offsetBottom: '90px',
  offsetRight: '30px',
};

export default BackToTop;
