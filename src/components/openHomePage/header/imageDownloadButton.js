import React from 'react';

const ImageDownloadButton = ({ imageUrl, fileName }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = fileName || 'image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload}>
      Download Image
    </button>
  );
};

export default ImageDownloadButton;