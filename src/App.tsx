import {Component} from 'react';
import "./styles/App.scss";
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import Flights from './components/flights/Flights';
import Home from './components/home/Home';

class App extends Component {

  render() {
    return (
      <div>
        {
          <Router>
           <Switch>

              <Route exact={true} path="/home" component={Home} / >
              <Route exact={true} path="/"> <Redirect to="/home" /> </Route>
              <Route exact={true} path="/flights" component={Flights} />

              {/* <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route exact={true} path="/bookings" component={Bookings} />
              <Route path='bookings/add' component={BookingAdd} />
              <Route path='bookings/:id' component={BookingById} />
              <Route exact={true} path='users' component={users} />
              <Route path='users/add' component={UserCreation} />
              <Route path='users/:id' component={UserById} />  */}

            </Switch>
          </Router>
        }


        {/* <Link to="/" >Home</Link>
        <Link to='/Login'>Login</Link>
        <Link to='/Booking' >Booking</Link>
        <Link to='/Flights' >Flights</Link>
        <Link to='/' ></Link>
        <Link to='/' >Home</Link> */}

      </div>
    )
  }
}
export default App;
