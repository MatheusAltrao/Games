import Card from '@/components/card/Card';
import { GameProps } from '@/utils/types/game';
import Search from '@/components/search/Search';
import ButtonToHome from '@/components/buttonToHome/ButtonToHome';

async function getData(title: string) {
    const decodeTitle = decodeURI(title);
    try {
        const res = await fetch(
            `${process.env.NEXT_API_URL}/next-api/?api=game&title=${decodeTitle}`,
        );
        return res.json();
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
}

export default async function SearchGames({
    params: { title },
}: {
    params: { title: string };
}) {
    const gamesData: GameProps[] = await getData(title);

    return (
        <div className='mt-32 px-4 md:px-8 max-w-screen-lg mx-auto'>
            <ButtonToHome />

            <div className='mt-10'>
                <Search />
            </div>
            <div className='mt-10 space-y-4'>
                <h2 className='text-xl font-semibold'>Jogos Encontrados</h2>

                <div className='pb-10'>
                    <div>
                        {!gamesData && (
                            <p className='text-zinc-500 '>
                                Nenhum jogo encontrado, tente novamente!
                            </p>
                        )}
                    </div>

                    <div className='grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 gap-4 '>
                        {gamesData &&
                            gamesData.map((game) => (
                                <Card key={game.id} gamesData={game} />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
