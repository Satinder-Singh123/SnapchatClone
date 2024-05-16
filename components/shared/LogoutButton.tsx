import { signOut } from "@/auth";
import { Button } from "../ui/button";
import { IoMdLogOut } from "react-icons/io";
import { redirect } from "next/navigation";

const LogoutButton = () => {


    //inline server action
    const logouthandler = async () => {
        'use server'
        try {
            await signOut();

        } catch (error) {
            console.log(error)
            throw error;
        }
        redirect("/login")

    }

    return (
        <form action={logouthandler}>

            <Button size={'icon'}
                className='rounded-full'
            ><IoMdLogOut size={'18px'} />
            </Button>
        </form>
    )
}

export default LogoutButton;