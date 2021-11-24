import * as React from 'react';
import { styled } from '@mui/material/styles';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,

  padding: theme.spacing(1),
}));

export default function Header() {
  return <Div>{'Phone Book'}</Div>;
}
