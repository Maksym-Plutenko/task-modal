// import styled from 'styled-components';
// import axios from 'axios';
// axios.defaults.baseURL = 'https://goosetrack-backend-2lsp.onrender.com/api/';

import { useFormik } from 'formik';
import { styled } from 'styled-components';

// import { validate } from './utility/validateTaskForm';

// import { Button } from '../../styles/components';

const Label = styled.label`
  display: block;
  width: 100%;

  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0em;
  color: #343434cc;
`;

const Input = styled.input`
  display: block;
  min-width: 10px;
  width: 100%;
  height: 46px;

  padding-left: 18px;
  padding-right: 18px;
  background-color: #f6f6f6;
  border-radius: 8px;

  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  color: #343434;

  border: none;
  outline: none;

  margin-top: 8px;
`;

const TimeContainer = styled.div`
  display: flex;
  gap: 14px;
  width: 340px;

  margin-top: 18px;
  margin-bottom: 28px;
`;

const RadioContainer = styled.div`
  display: flex;
  gap: 16px;
  width: 340px;

  margin-bottom: 32px;
`;

const RadioLabel = styled.label`
font-family: Inter;
font-size: 14px;
font-weight: 600;
line-height: 18px;
letter-spacing: 0em;
color: #343434;

`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 14px;
  width: 340px;
`;

const Button = styled.button`
  width: 100%;
  padding: 14px;
  color: white;
  background-color: #3e85f3;
  border-radius: 8px;

  border: none;
  outline: none;
`;

const TaskForm = ({ close, create, task }) => {
  const formik = useFormik({
    initialValues: {
      title: task.title || '',
      start: task.start || '09:00',
      end: task.end || '09:30',
      priority: task.priority || 'low',
    },
    // validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));

      // if (create) {
      //   addHandler();
      // } else {
      //   editHandler();
      // }
    },
  });

  const closeHandler = evt => {
    close();
    console.log(formik.errors);
  };

  const addHandler = async evt => {
    // temporarily
    // const {start, date} = task;
    // const title = 'to do something';
    // const end = '12:30';
    // const priority = 'low';
    // const category = 'to-do';
    // console.log("request created");
    // const response = await axios.post('https://goosetrack-backend-2lsp.onrender.com/api/task', {title, start, end, priority, date, category});
    // console.log(response);
    // console.log("task created!");
    // console.log(response.data);
    // console.log("task created! 2");
    // console.log(response.message);
  };

  const editHandler = async evt => {
    // temporarily
    // const {title, start, end, priority, date, category} = task;
    // const response = await axios.patch(`/tasks/${task.id}`, {title, start, end, priority, date, category});
    // console.log(response);
    // console.log(response.data);
    // console.log("task changed!");
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div role="group">
        <Label>
          Title
          <Input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
            placeholder="Enter text"
          />
        </Label>
        <TimeContainer>
          <Label>
            Start
            <Input
              id="start"
              name="start"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.start}
            />
          </Label>
          <Label>
            End
            <Input
              id="end"
              name="end"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.end}
            />
          </Label>
        </TimeContainer>

        <RadioContainer>
          <RadioLabel>
            Low
            <input
              name="priority"
              type="radio"
              onChange={formik.handleChange}
              value="low"
              checked={formik.values.priority === 'low'}
            />
          </RadioLabel>
          <RadioLabel>
            Medium
            <input
              name="priority"
              type="radio"
              onChange={formik.handleChange}
              value="medium"
              checked={formik.values.priority === 'medium'}
            />
          </RadioLabel>
          <RadioLabel>
            High
            <input
              name="priority"
              type="radio"
              onChange={formik.handleChange}
              value="high"
              checked={formik.values.priority === 'high'}
            />
          </RadioLabel>
        </RadioContainer>
        {/* <p>{formik.values.priority}</p> */}
      </div>

      {create ? (
        <ButtonContainer>
          <Button type="submit" onClick={addHandler}>
            Add
          </Button>
          <Button type="button" onClick={closeHandler}>
            Cansel
          </Button>
        </ButtonContainer>
      ) : (
        <Button type="submit" onClick={editHandler}>
          Edit
        </Button>
      )}
    </form>
  );
};

export { TaskForm };
