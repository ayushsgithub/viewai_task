"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/app/utils/cn";
import Link from "next/link";


const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-8 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        <Menu setActive={setActive}>
            <Link href="/"><MenuItem setActive={setActive} active={active} item="Home"></MenuItem></Link>
            <Link href="#TableSection"><MenuItem setActive={setActive} active={active} item="Table"></MenuItem></Link>
            <Link href="#footer"><MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem></Link>
        </Menu>
        
    </div>
  )
}

export default Navbar