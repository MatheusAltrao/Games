import { GameProps } from '@/utils/types/game';
import { ArrowRightCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface BannerProps {
    dalygame: GameProps;
}

const Banner = ({ dalygame }: BannerProps) => {
    return (
        <Link href={`/game/details/${dalygame.id}`}>
            <div className=' h-[300px] relative w-full rounded-lg overflow-hidden  '>
                <Image
                    className='w-full h-full  object-cover'
                    alt={dalygame.title}
                    src={dalygame.image_url}
                    quality={100}
                    priority={true}
                    fill={true}
                    sizes='(max-width:768px) 100vw,(max-width:1200px) 44vw'
                />

                <div className='absolute bottom-4 left-4 p-1 bg-zinc-900 rounded flex items-center gap-4'>
                    <p className='font-medium text-xs '>{dalygame.title}</p>
                    <ArrowRightCircle size={20} />
                </div>
            </div>
        </Link>
    );
};

export default Banner;
