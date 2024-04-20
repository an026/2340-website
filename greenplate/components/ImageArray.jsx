import React from 'react';
import Gallery from './components/Gallery';

const imageArray = [
  {
    url: './src/assets/_ (7).jpeg',
    alt: 'Description of image 1',
    description: 'This is image 1'
  },
  {
    url: './src/assets/_ (7).jpeg',
    alt: 'Description of image 2',
    description: 'This is image 2'
  },
  {
    url: './src/assets/_ (7).jpeg',
    alt: 'Description of image 2',
    description: 'This is image 3'
  },
  {
    url: './src/assets/_ (7).jpeg',
    alt: 'Description of image 2',
    description: 'This is image 4'
  },
  {
    url: './src/assets/_ (7).jpeg',
    alt: 'Description of image 2',
    description: 'This is image 5'
  },
  {
    url: './src/assets/_ (7).jpeg',
    alt: 'Description of image 2',
    description: 'This is image 6'
  }
  // Add more image objects here
];

function App() {
  return (
    <div>
      <Gallery images={imageArray} />
    </div>
  );
}

export default App;
