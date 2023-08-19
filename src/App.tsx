import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import SignIn from './pages/Login';
// import Layout from './components/Layout/Layout';

const SignIn = lazy(() => import('./pages/Login'));
const Layout = lazy(() => import('./components/Layout/Layout'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/admin" element={<Layout />} />z
      </Routes>
    </>
  );
}

export default App;
