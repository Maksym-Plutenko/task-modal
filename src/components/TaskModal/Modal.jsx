import styled from 'styled-components';

const Container = styled.div`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%) scale(1);
background color: #ffffff;
padding-left: 28px;
padding-right: 28px;
padding-top: 40px;
padding-bottom: 40px;
border: 1px solid #DCE3E5CC;
border-radius: 8px;
box-shadow: 0px 4px 16px 0px #1111111A;
`;

const CloseBtn = styled.button`
  position: absolute;
  right: 14px;
  top: 14px;
`;

// const Svg = styled.svg`
//   fill: red;
// `;

const Modal = ({ close, children }) => {
  const closeHandler = evt => {
    close();
  };

  return (
    <Container>
      <CloseBtn onClick={closeHandler}>
        <svg width="24px" height="24px">
          <use href="../../images/svg/sprite.svg#x-close"></use>
        </svg>
      </CloseBtn>
      {children}
    </Container>
  );
};

export { Modal };
