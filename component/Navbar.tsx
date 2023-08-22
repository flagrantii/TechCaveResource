import Image from 'next/image'
import Link from 'next/link'
interface NavbarProps {
    // Add any props you need for the Navbar
  }

const Navbar: React.FC<NavbarProps> = ({ /* Props for Navbar */ }) => {
    const handleSearch = (searchTerm: string) => {
      console.log('Search term:', searchTerm);
      // Perform your search logic here
    };
  return (
    <header className='w-full'>
        <nav className='navbar max-w-[1440px]  mx-auto sm:px-16 px-6 py-4'>
            <Link href='/' className='flex justify-center items-center'>
            <Image
                src='/newlogo.png'
                alt='logo'
                width={240}
                height={60}
                className='object-contain'
            />
            </Link>
            <div className='navbar_list_menu'>
                <Link href='/'>
                    <p className='navbar_menu'>HOME</p>
                </Link>
                <Link href='/'>
                    <p className='navbar_menu'>CAMP</p>
                </Link>
                <Link href='/'>
                    <p className='navbar_menu'>ROADMAP</p>
                </Link>
                <Link href='/'>
                    <p className='navbar_menu'>COMPETITIVE</p>
                </Link>
                <Link href='/'>
                    <p className='navbar_menu'>ABOUT</p>
                </Link>
            </div>
            <div>

            </div>
            <form className=''>
                <input 
                type="text"
                placeholder="Search..."
                className='search_bar'
                />
            </form>
            <div className='navbar_list_contact'>
                <Link href='/'>
                <Image
                    src='/twitter.png'
                    alt='twitter'
                    width={25}
                    height={25}
                />
                </Link>
                <Link href='/'>
                <Image
                    src='/instagram.png'
                    alt='instagram'
                    width={25}
                    height={25}
                />
                </Link>
                <Link href='/'>
                <Image
                    src='/email.png'
                    alt='email'
                    width={25}
                    height={25}
                />
                </Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar