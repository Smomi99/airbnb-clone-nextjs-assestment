import Image from "next/image";
import Link from "next/link";
import mainlogo from '../../../public/assets/Vector.svg'
import Searchbar from "./Searchbar";
import { Navbar } from "./Navbar";
const Header = () => {
  return (
    <header className="sticky top-0 z-50  bg-white shadow-md p-5 mx-auto">
            <div className="container mx-auto grid grid-cols-3">
            <Link href='/' className="relative flex item-center h-10 cursor-pointer my-auto">
                <Image
                src={mainlogo}
                alt="logo-img"
                layout="fill"
                objectFit="contain"
                objectPosition="left"

                />
            </Link>
            <Searchbar/>
            <Navbar/>
            </div>
    </header>
  )
}

export default Header