import './App.css';
import Breadcrum from './components/Breadcrum';
import { BrowserRouter, Routes, Route ,Navigate }  from "react-router-dom";
import SignIn from './Route/Account pages/SignIn'
import SignUp  from './Route/Account pages/Signup'
import Billing from './Route/Billing';
import SideBar from './components/SideBar';
import { AuthProvider } from './Context/AuthContext';
import { AuthContextProvider } from './Context/GoolgeContext';
// import { FacebookAuthProvider } from 'firebase/auth';

function App() {

  return (
    <div>
      
<AuthProvider>
<AuthContextProvider>
   <BrowserRouter>
    <Routes>
      <Route exact path="/" element={< SignIn/>}>
      </Route>
      <Route path="/signup" element={< SignUp/>}>
      <Route path="*" element={<Navigate to="/" />} />

      </Route>
      
      <Route path="/dashboard" element={<Breadcrum/>}>
      </Route>
      <Route path="/billing" element={<div className='flex'><SideBar/>
      <Billing/>
      </div>}>
      </Route>
    </Routes>

  </BrowserRouter>
  </AuthContextProvider>

  </AuthProvider>


  </div>
  );
}

export default App;
