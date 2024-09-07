/** @format */

import { useState } from 'react';
import Header from '../shared/Header';

const Key = () => {
    const [newKey, setNewKey] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        localStorage.setItem('key', newKey);
    };

    return (
        <div>
            <Header />
            <main>
                <div>
                    <form>
                        <label>
                            <span>Enter your weather API key</span>
                            <input
                                type='password'
                                value={newKey}
                                onChange={(e) => setNewKey(e.target.value)}
                                id='newKey'
                            />
                        </label>
                    </form>
                    <button onClick={(e) => handleSubmit(e)}>Submit</button>
                </div>
            </main>{' '}
        </div>
    );
};

export default Key;
