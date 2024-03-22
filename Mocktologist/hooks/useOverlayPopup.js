import React, { createContext, useState, useContext } from 'react';

const OverlayPopupContext = createContext();

export const OverlayPopupProvider = ({ children }) => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [ showThumbnailPopup, setShowThumbnailPopup ] = useState(false);

    return (
        <OverlayPopupContext.Provider value={{ showOverlay, setShowOverlay, showPopup, setShowPopup, showThumbnailPopup, setShowThumbnailPopup }}>
            {children}
        </OverlayPopupContext.Provider>
    );
};

export const useOverlayPopup = () => useContext(OverlayPopupContext);
