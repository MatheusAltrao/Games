import { User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Header = () => {
    return (
        <header className=' fixed top-0 left-0 bg-zinc-950 z-50 pt-2 pb-4  w-full  border-b border-zinc-700'>
            <div className='w-full mx-auto px-4 md:px-8 py-2 max-w-screen-lg  h-16  rounded-lg flex items-center justify-between'>
                <div className='flex items-center gap-8'>
                    <Link href='/'>
                        <Image src='/logo.png' alt='M' width={40} height={40} />
                    </Link>

                    <nav className='flex items-center gap-2'>
                        <Link
                            className='border-b border-transparent hover:border-cyan-500 transition-colors '
                            href='/'
                        >
                            Jogos
                        </Link>
                        <Link
                            className='border-b border-transparent hover:border-cyan-500 transition-colors '
                            href='/profile'
                        >
                            Perfil
                        </Link>
                    </nav>
                </div>

                {/*       <button className='btn hover:border-zinc-500 border border-zinc-800'>
                    Entrar <User size={20} />{' '}
                </button> */}
            </div>
        </header>
    );
};

export default Header;
