import { Suspense, lazy, useEffect, useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { http } from './utils/http'

import { updateUser } from "./redux/auth/authslice";
import Loader from './pages/Loader';

const SignIn = lazy(() => import('./pages/Login'));
const Layout = lazy(() => import('./components/Layout/Layout'));
const NotFound = lazy(() => import('./pages/ErrorPages/NotFound'));

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const dispatch = useDispatch();

  const checkLoginStatus =  useCallback(() => {
    http.get('/validate')
      .then((response) => {
        dispatch(updateUser(response.data));
        if (response.data) {
          setLoggedIn(true)
          setIsLoaded(true)
        }
      })
      .catch(() => {
        setIsLoaded(true)
      });
  }, [dispatch])

  window.addEventListener('locationchange', checkLoginStatus)
  window.addEventListener('hashchange', checkLoginStatus)

  useEffect(() => {
    checkLoginStatus()
  }, [checkLoginStatus])

  const defaultTheme = createTheme();

  return (
    <>
 
 <ThemeProvider theme={defaultTheme}>
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
      </ThemeProvider>
    </>
  );
}

export default App;
