
import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard, LogIn, UserPen, Settings, LogOut} from "lucide-react";
import { destroySession, isAuth } from "@/auth/stateless";
import { Button } from "../ui/button";
import Logout from "./log-out";

export default async function NavBar() {
    
    const isLogin: any = await isAuth();

    return (
        <>
        <div className="flex top-0 py-3 flex-wrap justify-between bg-silver align-center">
            
            <Link href={"/"} className="flex text-center items-center">
                <Image className="mx-2" src={"/js1.png"} width={60} height={60} alt="logo"/>
                <p className="text-lg font-semibold">JS1/JICS Internet</p>
            </Link>
            <ul className="flex gap-[40px] text-m align-middle text-center justify-center items-center">
                {
                    isLogin ?
                    <div className="mx-5 flex items-center">
                        <Link className="flex hover:text-amber-400" href={"/dashboard"}>
                            <LayoutDashboard className="mx-1 hover:animate-pulse"/>
                            Dashboard
                        </Link>
                        <div className="mx-5 flex items-center">
                            <Link className="flex hover:text-amber-400" href={"/dashboard/settings"}>
                                <Settings className="mx-1 hover:animate-spin"/>
                                Settings
                            </Link>

                            <Logout/>
                        </div>
                    </div>
                    :
                    <div className="flex mx-10">
                        <Link className="flex hover:text-amber-400 mx-5" href={"/login"}>
                        <LogIn className="mx-1"/>
                        Sign In
                        </Link>

                        <Link className="flex hover:text-amber-400" href={"/signup"}>
                        <UserPen className="mx-1"/>
                        Sign Up
                        </Link>
                    </div>
                }

            </ul>
          </div>
        </>
    );
}