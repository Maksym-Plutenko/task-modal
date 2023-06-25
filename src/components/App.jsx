import { lazy,  Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';

// import Month from 'components/calendar/Month';
// import Day from 'components/calendar/Day';



// const Start = lazy(() => import('../pages/Start'));
// const Register = lazy(() => import('../pages/Register'));
// const Login = lazy(() => import('../pages/Login'));
// const User = lazy(() => import('../pages/User'));
// const Statistics = lazy(() => import('../pages/Statistics'));
// const Calendar = lazy(() => import('../pages/Calendar'));
// const NotFound = lazy(() => import('../pages/NotFound'));

const TaskModal = lazy(() => import('../components/TaskModal/TaskModal'));

const App = () => {

  const close = () => {
    console.log ("window closed (almost)")
  }

  const task = {
    // start: "12:00", 
    date: "2023-06-23"
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<TaskModal close={close} create={true} task={task}/>} />
      {/* <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
        <Route
            path="/account"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <User />
              </Suspense>
            }
          />
        <Route path="statistics" element={<Statistics />} />
        <Route path="calendar" element={<Calendar />}>
        <Route path="calendar/month/:currentDate" element={<Month />} />
        <Route path="calendar/day/:currentDay" element={<Day />} />
      </Route>

      <Route path="*" element={<NotFound />} /> */}
    </Routes>

    </Suspense>
  );
};

export { App };
