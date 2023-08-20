import { Suspense, lazy, useEffect, useState, useCallback } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { SingleRequestPage } from './pages/SingleRequestPage/SingleRequestPage'
import { http } from './utils/http'
import CssBaseline from '@mui/material/CssBaseline'
import { updateUser } from './redux/auth/authslice'
import Loader from './pages/Loader'
import { DonationRequestsPage } from './pages/DonationRequestsPage/DonationRequestsPage'
import { DonationRequestPage } from './pages/DonationRequestPage/DonationRequestPage'
import { RequestPage } from './pages/RequestPage/RequestPage'
import { PetDonationRequests } from './pages/PetDonationRequests/PetDonationRequests'

const SignIn = lazy(() => import('./pages/Login'))
const Layout = lazy(() => import('./components/Layout/Layout'))
const NotFound = lazy(() => import('./pages/ErrorPages/NotFound'))

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const dispatch = useDispatch()

  const checkLoginStatus = useCallback(() => {
    http.get('/validate')
      .then((response: any) => {
        dispatch(updateUser(response.data.user))
        if (response.data) {
          setLoggedIn(true)
          setTimeout(() => {
            setIsLoaded(true)
          }, 1000)
        }
      })
      .catch(() => {
        setTimeout(() => {
          setIsLoaded(true)
        }, 1000)
      })
  }, [dispatch])

  window.addEventListener('locationchange', checkLoginStatus)
  window.addEventListener('hashchange', checkLoginStatus)

  useEffect(() => {
    checkLoginStatus()
  }, [checkLoginStatus])

  const defaultTheme = createTheme()

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline/>
        <Suspense>
          <Routes>
              {loggedIn ? (
                <>
                  <Route path="/admin" element={<Layout/>}>
                    <Route index element={<RequestPage/>}/>
                    <Route path="request-submissions" element={<RequestPage/>}/>

                    <Route path="request/:id" element={<SingleRequestPage/>}/>
                    <Route
                      path="donation-request-submissions"
                      element={<DonationRequestsPage/>}
                    />
                    <Route
                      path="donation-request-submission/:id"
                      element={<DonationRequestPage/>}
                    />
                    <Route
                      path="pet-donation-request-submissions"
                      element={<PetDonationRequests/>}
                    />
                  </Route>
                  <Route path="*" element={<NotFound/>}/>
                </>
              ) : (
                <>
                  <Route
                    path="*"
                    element={<SignIn setLoggedIn={setLoggedIn}/>}
                  />
                </>
              )}
          </Routes>
        </Suspense>
        <Loader show={!isLoaded} />
      </ThemeProvider>
    </>
  )
}

export default App
