import { GameProps } from '@/utils/types/game';
import { ArrowRightCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
    gamesData: GameProps;
}

const Card = ({ gamesData }: CardProps) => {
    return (
        <div className=' border border-zinc-800  rounded-lg flex flex-col items-start gap-4 w-full max-w-[300px] overflow-hidden'>
            <Image
                className='w-full object-cover hover:scale-105 transition-transform'
                alt={gamesData.title}
                src={gamesData.image_url}
                width={200}
                height={200}
            />

            <div className='space-y-4 w-full p-5'>
                <h3 className='truncate font-semibold '>{gamesData.title}</h3>
                <p className='text-zinc-500 text-sm'>
                    {gamesData.description.slice(0, 50)} ...
                </p>
                <Link
                    href={`/game/details/${gamesData.id}`}
                    className='btn hover:border-zinc-500 border border-zinc-800'
                >
                    Ver mais <ArrowRightCircle size={18} />
                </Link>
            </div>
        </div>
    );
};

export default Card;
