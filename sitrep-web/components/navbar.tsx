import { UserButton } from "@clerk/nextjs"

const Navbar = async () => {

    return (
        <div className="flex items-center p-4">
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/"/>
            </div>
        </div>
    );
} 

export default Navbar;