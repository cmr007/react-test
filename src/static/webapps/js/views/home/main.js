import React, { propTypes } from 'react'
import '../../../stylesheet/home/home.less'
import Pic_01 from '../../../image/Home/img-1.jpg'
import Pic_02 from '../../../image/Home/img-2.jpg'
import Pic_03 from '../../../image/Home/img-3.jpg'
import Pic_04 from '../../../image/Home/img-4.jpg'
import Pic_05 from '../../../image/Home/img-5.jpg'
import Slider from 'react-slick'
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  	var settings = {
    	dots: true,
    	dotsClass: 'slick-dots slick-thumb',
    	autoplay: true,
    	infinite: true,
    	arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      speed: 300
    }
    return (<div className="home">
      <Slider {...settings}>
          <div><img src={Pic_01}/></div>
          <div><img src={Pic_02}/></div>
          <div><img src={Pic_03}/></div>
          <div><img src={Pic_04}/></div>
          <div><img src={Pic_05}/></div>
      </Slider>
    </div>)
  }
}
export default Home