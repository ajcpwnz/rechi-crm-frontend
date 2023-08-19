import { Suspense, lazy, useEffect, useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getSubmissions } from './services/requests.ts'
import { http } from './utils/http'


import { updateUser } from './redux/auth/authslice';
import Loader from './pages/Loader';
import { DonationRequestsPage } from './pages/DonationRequestsPage/DonationRequestsPage';
import { RequestPage } from './pages/RequestPage/RequestPage';
import { PetDonationRequests } from './pages/PetDonationRequests/PetDonationRequests';

const SignIn = lazy(() => import('./pages/Login'));
const Layout = lazy(() => import('./components/Layout/Layout'));
const NotFound = lazy(() => import('./pages/ErrorPages/NotFound'));

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();

  const checkLoginStatus =  useCallback(() => {
    http.get('/validate')
      .then((response) => {
        dispatch(updateUser(response.data));
        if (response.data) {
          setLoggedIn(true);
          setIsLoaded(true);
        }
      })
      .catch(() => {
        setIsLoaded(true)
      });
  }, [dispatch])

  useEffect(() => {
    getSubmissions('donation')(dispatch)
    getSubmissions('request')(dispatch)
    getSubmissions('pet-donation')(dispatch)
  }, [dispatch]);

  window.addEventListener('locationchange', checkLoginStatus);
  window.addEventListener('hashchange', checkLoginStatus);

  useEffect(() => {

    checkLoginStatus()
  }, [checkLoginStatus]);

  const defaultTheme = createTheme();

  return (
    <>

 <ThemeProvider theme={defaultTheme}>
      <Suspense>
        <Routes>
          {isLoaded ? (
            <>
              {loggedIn ? (
                <>
                  <Route path="/admin" element={<Layout />}>
                    <Route index element={<RequestPage />} />
                    <Route path="requests" element={<RequestPage />} />
                    <Route
                      path="donation-requests"
                      element={<DonationRequestsPage />}
                    />
                    <Route
                      path="pet-donation-requests"
                      element={<PetDonationRequests />}
                    />
                  </Route>
                  <Route path="*" element={<NotFound />} />
                </>
              ) : (
                <>
                  <Route
                    path="*"
                    element={<SignIn setLoggedIn={setLoggedIn}/>}
                  />
                </>
              )}
            </>
          ) : (
            <Route path="*" element={<Loader />} />
          )}
        </Routes>
      </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
