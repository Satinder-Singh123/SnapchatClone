import { signIn } from '@/auth';
import Login from '@/components/Login';
import React from 'react';

const LoginPage = () => {

  //inline function level
const loginhandler = async()=>{
'use server'
await signIn('github');
}
  return (
    <form action={loginhandler}>
     <Login/>
      </form>
  );
}

export default LoginPage;
