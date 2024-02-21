import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserManagement from './pages/UserManagement';
import Navbar from './components/Navbar';


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Navbar/>
      <UserManagement/>
    </Provider>
  );
};

export default App;
