import { styled } from 'styled-components';
import { taskColors } from '../../styles/variables';

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

  &:checked + label[for='medium']::before {
    outline-color: ${taskColors.priorityMedium + '80'};
  }

  &:checked + label[for='high']::before {
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

  &[for='medium']::before {
    background-color: ${taskColors.priorityMedium};
  }

  &[for='high']::before {
    background-color: ${taskColors.priorityHigh};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 14px;
  width: 340px;
`;

const buttonPlaceholder = `
width: 100%;
padding: 8px;
border-radius: 8px;

border: none;
outline: none;

font-family: Inter;
font-size: 14px;
font-weight: 600;
line-height: 18px;
letter-spacing: 0em;
text-align: center;

@media screen and (min-width: 768px) {
    padding: 10px;
}
`;

const Button = styled.button`
${buttonPlaceholder}
color: #ffffff;
background-color: #3e85f3;
`;

const LightButton = styled.button`
${buttonPlaceholder}
color: #111111;
background-color: #efefef;
`;

export {
  Label,
  Input,
  TimeContainer,
  RadioContainer,
  RadioButton,
  RadioLabel,
  ButtonContainer,
  Button,
  LightButton,
};
