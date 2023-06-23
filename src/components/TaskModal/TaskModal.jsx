import { createPortal } from 'react-dom';

import {Modal} from './Modal';
import {TaskForm} from './TaskForm';

const TaskModal = ({data, close}) => {
    return createPortal(
     <Modal>
        <TaskForm/>
     </Modal>,
      document.body
    );
  };
  
  export default TaskModal;