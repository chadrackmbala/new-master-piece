import * as React from 'react';
import Button from '@mui/material/Button';
import useUserStore from '../context/user-context';

export default function BasicButton() {

  const {upDateIsLogged} = useUserStore()

  return (
      <Button onClick={upDateIsLogged} type='submit' className='w-80 h-14' variant="contained">Connexion</Button>
  );
}