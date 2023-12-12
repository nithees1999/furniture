
import { Swiper, SwiperSlide } from 'swiper/react';

import "../styles/aboutus.css";
import userimg from "../assets/images/user-icon.png";

import { Pagination } from 'swiper/modules';

export default function App() {
  return (

    <>
      <div className="about">
        <h1>What they say about our service</h1>
      </div>
      <Swiper

        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
      >

        <SwiperSlide>
          <h2>Best planning service</h2>
          <p>I had fantastic experience at shady rhymes with pax
            planner, shady rhymes was so helpful and friendly and went above and 
            beyond to help me configure my perfect walk in
            wardobe room.</p>

          <div className="content">
            <img src={userimg} alt="" />

            <h3>john doe</h3>
            <span>Project manager of cupalo</span>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <h2>Good service</h2>
          <p>The services provided by the officials was smooth and satisfactory.
            Products and goods delivered were up to satisfaction.
            and compared to market price.</p>
          <div className="content">
            <img src={userimg} alt="" />

            <h3>Maddy</h3>
            <span>Designer</span>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <h2>Solution innovative</h2>
          <p>I loved working with Darla shady rhymes for about 2 years
            and highly recommend anyone looking for an interior
            designer agency who brings creativity but designs
            something that fits YOU and your style.</p>

          <div className="content">
            <img src={userimg} alt="" />

            <h3>Denis Rara</h3>
            <span>Architect at BPPLU</span>
          </div>

        </SwiperSlide>


        <SwiperSlide>
          <h2>Flexible and reliable</h2>
          <p>Terrific work from beginning to end can work any angle
            from minimal help to complete project handling professional without a doubt! Love!</p>
          <div className="content">
            <img src={userimg} alt="" />

            <h3>woods Moniq</h3>
            <span>Freelancer</span>
          </div>

        </SwiperSlide>
      </Swiper>
    </>
  );
}




