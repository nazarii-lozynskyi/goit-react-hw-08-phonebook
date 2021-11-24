import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';

import { Box, Toolbar, AppBar } from '@mui/material';

export default function MyAppBar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Box>
            <Navigation />
          </Box>

          <Box>
            <AuthNav />
          </Box>

          <Box>
            <UserMenu />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
