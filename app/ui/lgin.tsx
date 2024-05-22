import { link } from "fs";
import Link from "next/link";
import { Button } from "./button";

export default function Lgin(){
    return(
        <Button className="mt-4 w-full">
        <Link href={"/dashboard"}>login</Link>
        </Button>
    )
}