import React, { createContext, useState, useContext } from 'react';

const ChoicesContext = createContext();

export const ChoicesProvider = ({ children }) => {
    const [selectedTaste, setSelectedTaste] = useState("");
    const [avoids, setAvoids] = useState("");
    const [veganNow, setVeganNow] = useState(false)
    const [start, setStart] = useState(false)

    return (
        <ChoicesContext.Provider value={{ selectedTaste, setSelectedTaste, avoids, setAvoids, veganNow, setVeganNow, start, setStart }}>
            {children}
        </ChoicesContext.Provider>
    );
};

export const useChoices = () => useContext(ChoicesContext);
