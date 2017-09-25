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
        <div>
        	<div className='pic-list'>
        		<img src={Pic_01}/>
        		<div>
        			<div className="detail"><span className="price">￥119.00</span><span className='name'>稻草人手提包</span></div>
        			<div><i className="iconfont icon-gouwuche"></i></div>
        		</div>
        	</div>
        </div>
        <div>
        	<div className='pic-list'>
        		<img src={Pic_02}/>
        		<div>
        			<div><span>￥219.00</span><span>稻草人手提包</span></div>
        			<div><i className="iconfont icon-gouwuche"></i></div>
        		</div>        	
        	</div>
        </div>
        <div>
        	<div className='pic-list'>
        		<img src={Pic_03}/>
        		<div>
        			<div><span>￥319.00</span><span>稻草人手提包</span></div>
        			<div><i className="iconfont icon-gouwuche"></i></div>
        		</div>
        	</div>
        </div>
        <div>
        	<div  className='pic-list'>
        		<img src={Pic_04}/>
        		<div>
        			<div><span>￥419.00</span><span>稻草人手提包</span></div>
        			<div><i className="iconfont icon-gouwuche"></i></div>
        		</div>
        	</div>
        	
        </div>
        <div>
        	<div className='pic-list'>
        		<img src={Pic_05}/>
        		<div>
        			<div><span>￥519.00</span><span>稻草人手提包</span></div>
        			<div><i className="iconfont icon-gouwuche"></i></div>
        		</div>
        	</div>
        </div>
      </Slider>
    </div>)
  }
}
export default Home