import Banner from '@/components/banner/Banner';
import Card from '@/components/card/Card';
import Search from '@/components/search/Search';

import { GameProps } from '@/utils/types/game';

async function getDalyGame() {
    try {
        const res = await fetch(
            `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
            {
                next: { revalidate: 60 * 60 },
            },
        );
        return res.json();
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
}

async function getGamesData() {
    try {
        const res = await fetch(
            `${process.env.NEXT_API_URL}/next-api/?api=games`,
            {
                next: { revalidate: 60 * 60 },
            },
        );
        return res.json();
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
}

export default async function Home() {
    const dalygame: GameProps = await getDalyGame();
    const gamesData: GameProps[] = await getGamesData();

    return (
        <div className='min-h-screen w-full mx-auto px-4 md:px-8 py-2 max-w-screen-lg scroll  mt-32 '>
            <Banner dalygame={dalygame} />

            <div className='mt-20'>
                <Search />
            </div>

            <div className='mt-10 space-y-4'>
                <h2 className='text-xl font-semibold'>Todos os jogos</h2>

                <div className='grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 gap-4 pb-10'>
                    {gamesData.map((game) => (
                        <Card key={game.id} gamesData={game} />
                    ))}
                </div>
            </div>
        </div>
    );
}
