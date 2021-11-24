import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';

import MyAppBar from './components/MyAppBar';

function App() {
  return (
    <>
      <MyAppBar />

      <Container style={{ maxWidth: '1650px', paddingBottom: '40px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
