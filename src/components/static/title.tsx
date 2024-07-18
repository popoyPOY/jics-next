"use client"
import { motion } from "framer-motion";
import { Circle } from "lucide-react";

export default function Title() {
    return (
        <>
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            className="flex"
        >
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" >
            JS1/JICS Wireless Internet Provider
            </h1>
            <Circle className="my-6 fill-amber-400 border-amber-400" size={19} color="amber"/>
        </motion.div>

        </>
    )
}