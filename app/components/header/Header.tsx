import Image from "next/image";
import Link from "next/link";
import mainlogo from '../../../public/assets/Vector.svg'
const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5
    md:px-10 ">
            <div className="container mx-auto">
            <Link href='/' className="relative flex item-center h-10 cursor-pointer my-auto">
                <Image
                src={mainlogo}
                alt="logo-img"
                layout="fill"
                objectFit="contain"
                objectPosition="left"

                />
            </Link>
            </div>
    </header>
  )
}

export default Header