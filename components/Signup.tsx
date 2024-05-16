import Link from "next/link";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa6";

const Signup = () => {
    return (
        <div>
            <h1 className="text-center text-2xl font-mediun my-2">Sign up to Snapchat</h1>
            <Button className="w-full my-4 gap-2"><FaGithub size={'24px'}/>Sign up with Github</Button>
            <p>Allready have an account <Link href={'/login'} className="underline">Login</Link></p>
        </div>
    )

}

export default Signup;