import React from 'react';
import { Parallax } from 'react-parallax';

const ParallaxImage = ({ imageUrl }) => {
  return (
    <Parallax bgImage={imageUrl} strength={500}>
      <div style={{ height: 500 }}></div>
    </Parallax>
  );
}

export default ParallaxImage;
