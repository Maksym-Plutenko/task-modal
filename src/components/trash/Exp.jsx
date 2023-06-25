import { useFormik } from 'formik';

import {validate} from './ExpValidate'

const Exp = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>

      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      <button type="submit">Submit</button>
      {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
    </form>
    
  );
};

export { Exp };
