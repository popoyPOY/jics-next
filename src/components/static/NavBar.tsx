"use client"

import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard, LogIn, UserPen} from "lucide-react";

export default function NavBar() {
    const isLogin = true;

    return (
        <>
        <div className="flex top-0 py-3 flex-wrap justify-around bg-silver align-center">
            
            <Link href={"/"} className="flex text-center items-center">
                <Image className="mx-2" src={"/js1.png"} width={60} height={60} alt="logo"/>
                <p className="text-lg font-semibold">JS1/JICS Internet</p>
            </Link>
            <ul className="flex gap-[40px] text-m align-middle text-center justify-center items-center">
                {
                    !isLogin ?
                    <>

                        <Link className="flex hover:text-amber-400" href={"/dashboard"}>
                        <LayoutDashboard className="mx-1"/>
                        Dashboard
                        </Link>
                    </>
                    :
                    <>
                        <Link className="flex hover:text-amber-400" href={"/login"}>
                        <LogIn className="mx-1"/>
                        Sign In
                        </Link>

                        <Link className="flex hover:text-amber-400" href={"/signup"}>
                        <UserPen className="mx-1"/>
                        Sign Up
                        </Link>
                    </>
                }

            </ul>
          </div>
        </>
    );
}