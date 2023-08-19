import { Suspense, lazy, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from "axios";

import { updateUser } from "./redux/auth/authslice";
import Loader from './pages/Loader';

const SignIn = lazy(() => import('./pages/Login'));
const Layout = lazy(() => import('./components/Layout/Layout'));
const NotFound = lazy(() => import('./pages/ErrorPages/NotFound'));

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const dispatch = useDispatch();

  const checkLoginStatus = () => {
    axios
      .get("http://64.226.92.178:8000/api/validate", {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      } )
      .then((response) => {
        dispatch(updateUser(response.data));
        if (response.data) {
          setLoggedIn(true)
          setIsLoaded(true)
        }
      })
      .catch((error) => {
        console.error(error)
        setIsLoaded(true)
      });
  }

  window.addEventListener('locationchange', checkLoginStatus)
  window.addEventListener('hashchange', checkLoginStatus)

  useEffect(() => {
    checkLoginStatus()
  }, [])

  return (
    <>
      <Suspense>
      <Routes>
        {isLoaded ? 
          <>
            {loggedIn ?
              <>
                <Route path="/admin" element={<Layout />} />
                <Route path="*" element={<NotFound />} />
              </>
              :
              <>
                  <Route path="*" element={<SignIn setLoggedIn={setLoggedIn}/>} />
              </>
            }
          </>
        :
          <Route path="*" element={<Loader />} />
        }
      </Routes>
      </Suspense>
    </>
  );
}

export default App;
