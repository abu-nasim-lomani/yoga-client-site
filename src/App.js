import { createContext, useState } from 'react';
import Home from './component/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './component/Login/Login/Login';
import UserDashBoard from './component/Dashboard/UserDashBoard/UserDashBoard';
import PrivateRoute from '../src/component/PrivateRoute/PrivateRoute'
import BookingList from './component/Dashboard/BookingList/BookingList';
import Review from './component/Dashboard/Review/Review';
import Courses from './component/Dashboard/Courses/Courses';
import AddCourse from './component/Dashboard/Courses/AddCourse/AddCourse';
import BookingOrders from './component/Dashboard/BookingOrders/BookingOrders';
import MakeAdmin from './component/Dashboard/MakeAdmin';
import AdminControl from './component/Dashboard/AdminControl/AdminControl';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [adminControl, setAdminControl]=useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser], [adminControl, setAdminControl]}>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/adminControl">
            <AdminControl></AdminControl>
          </Route>
          <PrivateRoute path="/dashboard/book-list/:courseId">
            <BookingList></BookingList>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/feedback">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/course">
            <Courses></Courses>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/addCourse">
            <AddCourse></AddCourse>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/books">
            <BookingOrders></BookingOrders>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/admin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          {/* <PrivateRoute path="/checkout/:productId">
          <Checkout></Checkout>
        </PrivateRoute> */}
          {/* <Route path="/orders">
            <Orders></Orders>
        </Route>
        */}
          <PrivateRoute path="/dashboard">
            <UserDashBoard></UserDashBoard>
          </PrivateRoute>
          {/* <Route path="*">
          <NotFound></NotFound>
        </Route> */}
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}


export default App;
