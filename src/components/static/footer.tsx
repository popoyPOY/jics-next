import { Facebook } from "lucide-react"
import Link from "next/link"

export default function Footer() {
    return (
        <>
        <div className="">
            <p>© {new Date().getUTCFullYear()} JS1 Technologies. All rights reserved.</p>
            <div>
                <div className="m-3">
                    <Link href={"https://web.facebook.com/profile.php?id=100075660739456"}>
                        <Facebook size={30}/>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}