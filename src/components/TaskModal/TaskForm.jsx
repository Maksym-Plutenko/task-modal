// import styled from 'styled-components';
// import axios from 'axios';
// axios.defaults.baseURL = 'https://goosetrack-backend-2lsp.onrender.com/api/';

import { useFormik } from 'formik';
import { styled } from 'styled-components';

// import { validate } from './utility/validateTaskForm';

import {taskColors} from '../../styles/variables';


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
  padding-left: 3px;

  margin-bottom: 32px;

  // & > label[]
`;

const RadioButton = styled.input`
  visibility: hidden;
  opacity: 0;
  position: absolute;

  &:checked + label::before {
    outline: 3px solid ${taskColors.priorityLow + '80'};
  }

  &:checked + label[for="medium"]::before {
    outline-color: ${taskColors.priorityMedium + '80'};
  }

  &:checked + label[for="high"]::before {
    outline-color: ${taskColors.priorityHigh + '80'};
  }
`;

const RadioLabel = styled.label`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  color: #343434;

  &::before {
    content: '';
    display: inline-block;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: ${taskColors.priorityLow};
    border: 1px solid white;
    margin-right: 5px;
  }

  &[for="medium"]::before {
    background-color: ${taskColors.priorityMedium};
  }

  &[for="high"]::before {
    background-color: ${taskColors.priorityHigh};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 14px;
  width: 340px;
`;

const Button = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #3e85f3;
  border-radius: 8px;
  border: none;
  outline: none;

  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
  color: white;
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
          <RadioButton
            id="low"
            name="priority"
            type="radio"
            onChange={formik.handleChange}
            value="low"
            checked={formik.values.priority === 'low'}
          />
          <RadioLabel for="low">Low</RadioLabel>
          <RadioButton
            id="medium"
            name="priority"
            type="radio"
            onChange={formik.handleChange}
            value="medium"
            checked={formik.values.priority === 'medium'}
          />
          <RadioLabel for="medium">Medium</RadioLabel>
          <RadioButton
            id="high"
            name="priority"
            type="radio"
            onChange={formik.handleChange}
            value="high"
            checked={formik.values.priority === 'high'}
          />
          <RadioLabel for="high">High</RadioLabel>
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
