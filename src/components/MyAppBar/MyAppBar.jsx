import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';

import { ContactPhone } from '@mui/icons-material';
import { Box, Toolbar, AppBar, Container, Icon } from '@mui/material';

export default function MyAppBar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Container style={{ maxWidth: '1650px' }}>
            <Icon color="inherit" sx={{ width: '60px', height: '60px' }}>
              <ContactPhone sx={{ width: '100%', height: '100%' }} />
            </Icon>

            <Box>
              <Navigation />
            </Box>

            <Box>
              <AuthNav />
            </Box>

            <Box>
              <UserMenu />
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
