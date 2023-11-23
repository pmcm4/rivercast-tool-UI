import React from 'react';

interface LoadingModalProps {
  loading: boolean;
}

const LoadingModal: React.FC<LoadingModalProps> = ({ loading }) => {
  return (
    loading && (
      <div className="loading-modal">
        <p>Loading...</p>
      </div>
    )
  );
};

export default LoadingModal;
