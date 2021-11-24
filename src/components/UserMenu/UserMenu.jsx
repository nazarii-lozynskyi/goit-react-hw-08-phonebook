import { Button } from '@mui/material';

import { Logout } from '@mui/icons-material';

export default function UserMenu() {
  return (
    <Button color="inherit" sx={{ p: '8px', marginTop: '8px' }}>
      Logout{' '}
      <Logout sx={{ marginLeft: '5px', width: '32px', height: '32px' }} />
    </Button>
  );
}
