import * as React from 'react';
import Button from '@mui/material/Button';
import useUserStore from '../context/user-context';
import GoogleIcon from '@mui/icons-material/Google';

export default function GoogleButton() {

  return (
    <Button
    type='submit'
    className='w-60 h-14 text-[#319484]'
    style={{ textTransform: 'capitalize' }}
    startIcon={<GoogleIcon />}
  >
    Connexion avec Google
  </Button>
  );
}