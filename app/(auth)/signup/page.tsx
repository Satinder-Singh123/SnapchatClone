import { signIn } from '@/auth';
import Signup from '@/components/Signup';
import React from 'react';

function SignupPage() {

//     //inline function level
const signuphandler = async()=>{
  'use server'
  await signIn('github');
  }

  return (
     <form action={signuphandler}>
        <Signup />
    </form>
    
    
  );
}

export default SignupPage;
