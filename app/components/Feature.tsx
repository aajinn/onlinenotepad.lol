import React from 'react';

interface FeatureProps {
    title: string;
    description: string;
}

const Feature: React.FC<
    FeatureProps
> = ({ title, description }) => {
    return (
        <div className="rounded-lg p-5 shadow-md">
            <h1 className="text-gray-500 text-3xl mb-2">
                {title}
            </h1>
            <p className="text-gray-200 text-2xl break-words">
                {description}
            </p>
        </div>
    );
};

export default Feature;
