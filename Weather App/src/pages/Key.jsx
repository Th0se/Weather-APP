/** @format */

import { useState } from 'react';
import Header from '../shared/Header';
import Footer from '../shared/Footer';

const Key = () => {
    const [newKey, setNewKey] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        localStorage.setItem('key', newKey);
    };

    return (
        <div
            data-theme='night'
            className='grid gap-4'
        >
            <Header />
            <main>
                <div className='grid grid-cols-1 grid-rows 2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                    <form className='lg:col-span-2 md:col-start-2 lg:col-start-2 bg-neutral border-2 p-2'>
                        <label className='grid grid-cols-1 gap-2 items-center form-control'>
                            <div className='label'>
                                <span className='label-text'>
                                    Enter your weather API key
                                </span>
                                <span className='label-text-alt text-info'>
                                    API key obtained from your WeatherAPI
                                    account.
                                </span>
                            </div>
                            <input
                                type='password'
                                value={newKey}
                                onChange={(e) => setNewKey(e.target.value)}
                                className='input input-bordered input-primary'
                            />
                            <div className='label'>
                                <span className='label-text text-info'>
                                    {`The key will be stored in your browser's local storage.`}
                                </span>
                                <span className='label-text-alt text-info'>
                                    This website does not save your key in a
                                    remote server. Your browser does, locally.
                                </span>
                            </div>
                        </label>
                    </form>
                    <button
                        onClick={(e) => handleSubmit(e)}
                        className='lg:col-span-2 md:col-start-2 lg:col-start-2 btn btn-primary'
                    >
                        Submit
                    </button>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Key;
