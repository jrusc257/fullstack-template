import React from 'react';
import './LoadingIndicator.scss';

const LoadingIndicator = () => {
    return (
        <div className="loading-indicator">
            <div className="animation"></div>
            <div className="text">Loading...</div>
        </div>
    )
}

export default LoadingIndicator;