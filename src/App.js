import { AppBar, Container, Switch } from '@mui/material';
import { Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/contacts" components={ContactsPage} />
      </Switch>
    </Container>
  );
}

export default App;
