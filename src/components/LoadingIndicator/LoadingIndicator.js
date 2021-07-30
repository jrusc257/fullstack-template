import React from 'react';
import './LoadingIndicator.scss';

const LoadingIndicator = () => {
    return (
        <div className="loading-indicator">
            <div class="animation"></div>
            <div>Loading...</div>
        </div>
    )
}

export default LoadingIndicator;