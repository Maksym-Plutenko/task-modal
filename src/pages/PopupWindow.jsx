import { ReactDOM } from 'react';

const PopupWindow = () => {
  return ReactDOM.createPortal(
    <div>PopupWindow with portal</div>,
    document.querySelector('.container')
  );
};

export { PopupWindow };
