import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/UI/Layout/Layout';
import SignIn from './pages/Login';

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
