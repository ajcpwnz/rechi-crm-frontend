import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const SignIn = lazy(() => import('./pages/Login'));
const Layout = lazy(() => import('./components/Layout/Layout'));
const NotFound = lazy(() => import('./pages/ErrorPages/NotFound'));

function App() {
  return (
    <>
      <Suspense>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/admin" element={<Layout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
    </>
  );
}

export default App;
