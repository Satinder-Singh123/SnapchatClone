import React from 'react';
import logo from '@/public/images.png'
import Image from 'next/image';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { TbGridDots } from "react-icons/tb";
import { IoMdLogOut } from "react-icons/io";
import { auth } from '@/auth';
import LogoutButton from './shared/LogoutButton';
import Link from 'next/link';

const NavBar = async() => {
  const authUser = await auth();

    return (
        <div className='flex items-center justify-between w-screen px-10 py-4'>
            <div className='flex intem-center gap-2 '>
                <Image
                    src={logo}
                    alt='logo'
                    width={50}
                    height={50}
                />
                <Input type='text' placeholder='Search...'
                className='rounded-full'/>
            </div>
            <div>
              <Button variant={'ghost'}>Stories</Button>
              <Button variant={'ghost'}>Spotlight</Button>
              <Button variant={'ghost'}>Chat</Button>
              <Button variant={'ghost'}>Lenses</Button>
            </div>
            <div className='flex items-center gap-5'>
            <Button size={'icon'}variant={'secondary'}
            className='rounded-full bg-white text-black'
            ><TbGridDots size={'18px'}/></Button>
            <Button className='rounded-full'>Snapchat Ads</Button>
            <Button className='rounded-full'> Download</Button>

            {
                authUser ? (<LogoutButton/>) : (<Link href={'/login'}><Button className='rounded-full'>Login</Button></Link>)
            }
            
            </div>
        </div>
    );
}

export default NavBar;
