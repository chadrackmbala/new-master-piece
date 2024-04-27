import * as React from 'react';
import Button from '@mui/material/Button';
import useUserStore from '../context/user-context';

export default function BasicButton() {

  return (
      <Button type='submit' className='w-60 h-14 text-[#319484]' style={{ textTransform: 'capitalize' }}>Connexion</Button>
  );
}