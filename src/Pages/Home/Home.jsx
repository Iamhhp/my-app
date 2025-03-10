import './Home.css';
import Hero from '../../Components/Hero/Hero';
import ServiceUs from '../../Components/ServiveUs/ServiceUs';
import University from '../../Components/University/University';
import GalleryCauses from '../../Components/GallaryCauses/GalleryCauses';
import Articles from '../../Components/Articles/Articles';
import VideosPictures from '../../Components/VideosPictures/VideosPictures';

function Home() {
  return (
    <>
      <Hero />
      <University />
      <ServiceUs />
      <GalleryCauses />
      <Articles />
      <VideosPictures />
    </>
  );
}
export default Home;
