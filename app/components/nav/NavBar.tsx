import Link from "next/link";
import Container from "../Container";
import { BsFillVinylFill } from "react-icons/bs";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";

const NavBar = () => {
    return ( <div className="
        bg-white
        sticky
        top-0
        w-full
        z-30
        shadow-sm
        ">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="
                    flex
                    items-center
                    justify-between
                    gap-3
                    md:gap-0
                    ">
                        <div className="flex items-center gap-3">
                            <BsFillVinylFill size={30}/>
                            <Link href='/' className="font-bold text-2xl">
                                VinylVortex
                            </Link>
                        </div>
                        <div className="hidden md:block">Search</div>
                        <div className="flex items-center gap-8 md:gap-12">
                            <CartCount />
                            <UserMenu/>
                        </div>
                    </div>
                </Container>
            </div>
        </div> );
}

export default NavBar;