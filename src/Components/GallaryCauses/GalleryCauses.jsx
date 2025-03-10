import './GalleryCauses.css';
import CauseSuccess from '../CauseSuccess/CauseSuccess';
import image01 from './../../Assets/imgs/images01.jpg';
import image02 from './../../Assets/imgs/images02.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Offer from '../Offer/Offer';
import IconUnderline from '../IconUderline/IconUnderline';

function GalleryCauses() {
  return (
    <>
      <div className='sec-gallery'>
        <div className='sec-r'>
          <div className='title-gallery'>
            <h3>پرونده های موفق</h3>
            <IconUnderline />
          </div>

          <Swiper
            spaceBetween={20}
            pagination
            navigation
            autoplay={{ delay: 1200, pauseOnMouseEnter: true }}
            modules={[Pagination, Navigation, Autoplay]}
            className='my-swiper'
          >
            <SwiperSlide>
              <CauseSuccess />
            </SwiperSlide>

            <SwiperSlide>
              <CauseSuccess />
            </SwiperSlide>

            <SwiperSlide>
              <CauseSuccess />
            </SwiperSlide>

            <SwiperSlide>
              <CauseSuccess />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className='sec-l'>
          <Offer title='ویزای تحصیلی' img={image01} />
          <Offer title='آفر ویژه فرتاک' img={image02} />
        </div>
      </div>
    </>
  );
}
export default GalleryCauses;
