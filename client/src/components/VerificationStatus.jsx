import React from 'react';

const VerificationStatus = () => {
    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Verification Status</h1>
            <div className="flex space-x-4">
                <div className="flex-1 text-center">
                    <span className="text-green-500 text-4xl">✔️</span>
                    <p className="mt-2">Registration Successful</p>
                </div>
                <div className="flex-1 text-center">
                    <span className="text-yellow-500 text-4xl">🔄</span>
                    <p className="mt-2">Document Verification</p>
                </div>
                <div className="flex-1 text-center">
                    <span className="text-green-500 text-4xl">✔️</span>
                    <p className="mt-2">Approved</p>
                </div>
            </div>
        </div>
    );
};

export default VerificationStatus;