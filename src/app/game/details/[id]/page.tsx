import Badge from '@/components/badge/Badge';
import Banner from '@/components/banner/Banner';
import ButtonToHome from '@/components/buttonToHome/ButtonToHome';
import { GameProps } from '@/utils/types/game';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

interface ParamsProps {
    params: {
        id: string;
    };
}

//metadata dinamico
export async function generateMetadata({
    params,
}: ParamsProps): Promise<Metadata> {
    try {
        const response = await fetch(
            `${process.env.NEXT_API_URL}/next-api/?api=game&id=${params.id}`,
            { next: { revalidate: 60 * 60 } },
        )
            .then((res) => res.json())
            .catch(() => {
                return {
                    title: 'Matheus Games',
                };
            });

        return {
            title: response.title,
            description: `${response.description.slice(0, 100)} ...`,
            openGraph: {
                title: response.title,
                images: [response.image_url],
            },
            robots: {
                index: true,
                follow: true,
                nocache: true,
                googleBot: {
                    index: true,
                    follow: true,
                    noimageindex: true,
                },
            },
        };
    } catch (error) {
        return {
            title: 'Matheus Games',
        };
    }
}

async function gameDetails(id: string) {
    try {
        const res = await fetch(
            `${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`,
            { cache: 'no-store' },
        );
        return res.json();
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
}

export default async function GameDetails({
    params: { id },
}: {
    params: { id: string };
}) {
    const game: GameProps = await gameDetails(id);

    if (!game) {
        redirect('/');
    }

    return (
        <div className='mt-32 px-4 md:px-8 max-w-screen-lg mx-auto pb-32 space-y-8'>
            <ButtonToHome />
            <div>
                <Banner dalygame={game} />
            </div>

            <div className='space-y-8 '>
                <div className='space-y-4'>
                    <h1 className='text-zinc-200 text-2xl font-semibold'>
                        {game.title}
                    </h1>
                    <p className='text-zinc-500'>{game.description}</p>
                </div>

                <div className='space-y-4'>
                    <h2 className='text-zinc-200 text-xl font-semibold'>
                        Data de lançamento
                    </h2>

                    {game.release ? (
                        <Badge title={game.release} />
                    ) : (
                        <p className='text-zinc-400'>Não especificada</p>
                    )}
                </div>

                <div className='space-y-4'>
                    <h2 className='text-zinc-200 text-xl font-semibold'>
                        Plataformas disponíveis:
                    </h2>

                    <div className='flex items-center gap-2 flex-wrap'>
                        {game.platforms.map((item, index) => (
                            <Badge key={index} title={item} />
                        ))}
                    </div>
                </div>

                <div className='space-y-4'>
                    <h2 className='text-zinc-200 text-xl font-semibold'>
                        Categorias
                    </h2>
                    <div className='flex items-center gap-2 flex-wrap'>
                        {game.categories.map((item, index) => (
                            <Badge key={index} title={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
