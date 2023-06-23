// import {PopupWindow} from './PopupWindow';

// const Start = () => {
//   return (
//     <>
//       //   <div className="container">
//     //     <p>Hello 1</p>
//     //     <PopupWindow/>
//     //   </div>
//     //   <button>Click me</button>
//     //   <div>
//     //     <p>Hello 2</p>
//     //   </div>

//     </>
//   );
// };

import { createPortal } from 'react-dom';

// const Start = () => {
//   return (
//     <div className='start-div'>
//       <p>This child is placed in the parent div.</p>
//       {createPortal(
//         <p>This child is placed in the document body.</p>,
//         document.body
//       )}
//     </div>
//   );
// };

const Start = ({children}) => {
  return createPortal(
    <div>
      <button></button>
      {children}
    </div>,
    document.body
  );
};

export default Start;
