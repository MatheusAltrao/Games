import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const ButtonToHome = () => {
    return (
        <div className='inline-block'>
            <Link
                className='flex items-center  gap-2 text-zinc-400 hover:text-zinc-50 transition-colors'
                href={'/'}
            >
                <ArrowLeft size={18} /> Voltar
            </Link>
        </div>
    );
};

export default ButtonToHome;
