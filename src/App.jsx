import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Route, Routes } from 'react-router-dom';
import { auth } from './firebase/firebase';
import PageLayout from './Layout/PageLayout/PageLayout';
import AuthPage from './Pages/AuthPage/AuthPage';
import HomePage from './Pages/HomePage/HomePage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';



function App() {
  const [authUser ] = useAuthState(auth);
  return(
  <PageLayout>
  <Routes>
    <Route path='/' element={authUser ? <HomePage/>  : <Navigate to="/auth" />} />
    <Route path='/auth' element={ !authUser  ? <AuthPage/> : <Navigate to='/' /> } />
    <Route path='/:username' element={<ProfilePage/>} />
  </Routes>

  </PageLayout>

  );
}

export default App ;