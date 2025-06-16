/** @format */

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Header from '../shared/Header';
import type { FunctionComponent } from 'react';

const Popup: FunctionComponent<{
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ active, setActive }) => {
    const closePopup = () => {
        setActive(false);
    };

    return active ? (
        <div>
            <p>Your API Key has been saved to your local storage.</p>
            <p>Simply insert a new key to change it.</p>
            <p>
                For deletion, either delete via the developer tools, clear local
                storage, or insert a space via the input field.
            </p>
            <button onClick={closePopup}>Close</button>
        </div>
    ) : null;
};

const Insert: FunctionComponent = () => {
    const [key, setKey] = useState('');
    const [popupActive, setPopupActive] = useState(false);
    const saveKey = async () => {
        localStorage.setItem('key', key);
        setPopupActive(true);
    };

    const storedKey = localStorage.getItem('key');
    useEffect(() => {
        if (storedKey) {
            setKey(storedKey);
            setPopupActive(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <Header />
            <main>
                {createPortal(
                    <Popup
                        active={popupActive}
                        setActive={setPopupActive}
                    />,
                    document.body
                )}
                <form>
                    <label htmlFor='key'>Key</label>
                    <input
                        id='key'
                        type='text'
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                    />
                </form>
                <button
                    onClick={saveKey}
                    type='button'
                >
                    Save API key
                </button>
            </main>
        </div>
    );
};

const Key: FunctionComponent = () => {
    return (
        <div>
            <Header />
            <Insert />
        </div>
    );
};

export default Key;
