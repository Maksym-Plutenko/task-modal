// import styled from 'styled-components';

// temporarily
import axios from 'axios';
// axios.defaults.baseURL = 'https://goosetrack-backend-2lsp.onrender.com/api/';

const TaskForm = ({ close, create, task }) => {
  const closeHandler = evt => {
    close();
  };

  const addHandler = async evt => {
    // temporarily
    const {start, date} = task;
    const title = 'to do something';
    const end = '12:30';
    const priority = 'low';
    const category = 'to-do';
    console.log("request created");

    const response = await axios.post('https://goosetrack-backend-2lsp.onrender.com/api/task', {title, start, end, priority, date, category});
    console.log(response);
    console.log("task created!");
    console.log(response.data);
    // console.log("task created! 2");
    // console.log(response.message);
  };

  const editHandler = async evt => {
    // temporarily
    const {title, start, end, priority, date, category} = task;
    const response = await axios.patch(`/tasks/${task.id}`, {title, start, end, priority, date, category});
    console.log(response);
    console.log(response.data);
    console.log("task changed!");
  };

  return (
    <form>
      <div role="group">
        <label>
          Title
          <input type="text" />
        </label>
        <div>
          <label>
            Start
            <input type="text" />
          </label>
          <label>
            End
            <input type="text" />
          </label>
        </div>
        <label>
          Low
          <input type="radio" name="priority" />
        </label>
        <label>
          Medium
          <input type="radio" name="priority" />
        </label>
        <label>
          High
          <input type="radio" name="priority" />
        </label>
      </div>

      {create ? (
        <>
          <button type="button" onClick={addHandler}>
            Add
          </button>
          <button type="button" onClick={closeHandler}>
            Cansel
          </button>
        </>
      ) : (
        <button type="button" onClick={editHandler}>
          Edit
        </button>
      )}
    </form>
  );
};

export { TaskForm };
