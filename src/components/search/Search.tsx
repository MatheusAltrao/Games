'use client';
import { SearchIcon, X } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const router = useRouter();

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();

        router.push(`/game/search/${searchValue}`);
    };

    return (
        <div>
            <form
                onSubmit={handleSearch}
                className=' flex items-center gap-4  '
            >
                <div className='flex items-center gap-2 bg-zinc-900 w-full rounded px-2 h-10 '>
                    <SearchIcon size={20} />
                    <input
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder='Está procurando algum jogo?'
                        className='h-10 w-full bg-transparent focus:outline-none'
                        type='text'
                    />
                    <button
                        type='button'
                        onClick={() => setSearchValue('')}
                        className={`${
                            searchValue.length > 3
                                ? 'opacity-100'
                                : 'opacity-0 pointer-events-none '
                        } transition-opacity`}
                    >
                        {' '}
                        <X size={18} />
                    </button>
                </div>
                <button
                    disabled={searchValue.length == 0}
                    type='submit'
                    className='btn border disabled:border-zinc-600 border-green-700 hover:border-green-500 transition-all duration-150 disabled:opacity-30 disabled:cursor-not-allowed  '
                >
                    {' '}
                    Pesquisar <SearchIcon size={18} />{' '}
                </button>
            </form>
        </div>
    );
};

export default Search;
