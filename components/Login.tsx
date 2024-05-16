import Link from "next/link";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa6";


const Login =()=>{
    return (
        <div>
            <h1 className="text-center text-2xl font-mediun my-2 ">Login to Snapchat</h1>
            <Button className="w-full my-4 gap-2"><FaGithub size={'24px'}/>Login with Github</Button>
            <p>New To Snapchat? <Link href={'/signup'} className="underline">Login</Link></p>
        </div>
    )
}

export default Login;