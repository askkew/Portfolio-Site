import { Parallax } from 'react-scroll-parallax';

const Stars = () => {
  return (
    <Parallax translateY={[-20, 20]}>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </Parallax>
  );
};

export default Stars;