'use client';

import { Check, Pen, X } from 'lucide-react';
import { useState } from 'react';

const Favorite = () => {
    const [isShowInput, setIsShowinput] = useState(false);
    const [input, setInput] = useState('');
    const [gameName, setGameName] = useState('');

    const handleAddGameName = () => {
        setGameName(input);
        setIsShowinput(false);
        setInput('');
    };

    const handleClearInput = () => {
        setIsShowinput(false);
        setInput('');
    };

    return (
        <div className='h-40 rounded-lg relative bg-zinc-900 flex flex-col justify-between p-4'>
            <div>
                {isShowInput ? (
                    <div className='flex items-center gap-2 '>
                        <input
                            placeholder='Add o seu jogo favorito'
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className=' text-sm bg-transparent rounded border border-zinc-600 focus:outline-none focus:border-zinc-400 h-8 px-2 w-full'
                            type='text'
                        />

                        <div className='flex items-center gap-2'>
                            <button onClick={handleClearInput}>
                                <X
                                    className='text-zinc-400 hover:text-red-500 transition-colors'
                                    size={18}
                                />
                            </button>

                            <button
                                disabled={input.length == 0}
                                className='disabled:opacity-0 disabled:pointer-events-none transition-all duration-200 opacity-100 '
                                onClick={handleAddGameName}
                            >
                                <Check
                                    className='text-zinc-400 hover:text-green-500 transition-colors'
                                    size={18}
                                />
                            </button>
                        </div>
                    </div>
                ) : (
                    <button
                        onClick={() => setIsShowinput(true)}
                        className='p-1.5  rounded hover:border-zinc-500 border border-zinc-800 '
                    >
                        <Pen size={16} />
                    </button>
                )}
            </div>
            <div>
                {!gameName && <p>Adicionar jogo</p>}
                {gameName.length > 0 && <p>{gameName}</p>}
            </div>
        </div>
    );
};

export default Favorite;
