import { Share2 } from 'lucide-react';
import Image from 'next/image';
import Favorite from './components/(favorite)/Favorite';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Perfil',
};

export default function Profile() {
    return (
        <div className='mt-32 px-4 md:px-8 max-w-screen-lg mx-auto pb-32 space-y-8'>
            <div className='space-y-8'>
                <div className='flex items-start justify-between'>
                    <div className='flex items-center gap-2'>
                        <Image
                            alt='Matheus'
                            src='https://github.com/MatheusAltrao.png'
                            width={128}
                            height={128}
                            className='rounded-full bg-zinc-900 object-cover'
                        ></Image>
                        <p>Matheus </p>
                    </div>
                    <div className=' hidden md:flex items-center gap-2'>
                        <button className='btn hover:border-zinc-500 border border-zinc-800 text-sm'>
                            Configuração
                        </button>
                        <button className='btn hover:border-zinc-500 border border-zinc-800'>
                            <Share2 size={16} />
                        </button>
                    </div>
                </div>

                <div className='space-y-4'>
                    <h2 className='text-zinc-200 text-xl font-semibold'>
                        Jogos Favoritos
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <Favorite />
                        <Favorite />
                        <Favorite />
                    </div>
                </div>
            </div>
        </div>
    );
}
