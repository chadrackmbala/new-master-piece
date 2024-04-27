import * as React from 'react';
import Button from '@mui/material/Button';
import useUserStore from '../context/user-context';

export default function BasicButton({ styleButton, textButton }) {

  return (
    <Button type='submit' className='text-[#319484] border-2 border-[#319484]' style={{ textTransform: 'capitalize' }}>{textButton}</Button>
  );
}