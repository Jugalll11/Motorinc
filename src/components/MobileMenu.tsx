import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";

export default function MobileMenu() {
    return(
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div>Menu</div>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="bg-white align-end ">
                <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-3 leading-none">
                        <Link href={'/'}>Home</Link>
                        <DropdownMenuSeparator />
                        <Link href={'/'}>MeetUps</Link>
                        <DropdownMenuSeparator />
                        <Link href={'/'}>Forum</Link>
                        <DropdownMenuSeparator />
                        <Link href={'/'}>Articles</Link>
                        <DropdownMenuSeparator />
                    </div>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}