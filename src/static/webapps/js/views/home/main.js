import React, { propTypes } from 'react'
import '../../../stylesheet/home/home.less'
import Pic_01 from '../../../image/Home/img-1.jpg'
import Pic_02 from '../../../image/Home/img-2.jpg'
import Pic_03 from '../../../image/Home/img-3.jpg'
import Pic_04 from '../../../image/Home/img-4.jpg'
import Pic_05 from '../../../image/Home/img-5.jpg'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.handle = this.handle.bind(this)
    this.state 
  }
  handle() {
  	console.info("哈哈哈")
  }
  render() {
  	var settings = {
    	dots: false,
    	autoplay: false,
    	infinite: true,
    	arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      speed: 300,
      beforeChange: (next)=>{
      	console.info(next)
      }
    }
    return (<div id="home">
      <Slider {...settings}>
        <div>
        	<div className='pic-list' onClick={this.handle}>
        		<img src={Pic_01}/>
        		<div className='sku'>
        			<div className="detail"><span className="price">￥119.00</span><span className='name'>稻草人手提包</span></div>
        			<div className="shopping-cart"><i className="iconfont icon-gouwuche"></i></div>
        		</div>
        	</div>
        </div>
        <div>
        	<div className='pic-list'>
        		<img src={Pic_02}/>
        		<div className='sku'>
        			<div className="detail"><span className="price">￥219.00</span><span>稻草人手提包</span></div>
        			<div className="shopping-cart"><i className="iconfont icon-gouwuche"></i></div>
        		</div>        	
        	</div>
        </div>
        <div>
        	<div className='pic-list'>
        		<img src={Pic_03}/>
        		<div className='sku'>
        			<div className="detail"><span className="price">￥319.00</span><span>稻草人手提包</span></div>
        			<div className="shopping-cart"><i className="iconfont icon-gouwuche"></i></div>
        		</div>
        	</div>
        </div>
        <div>
      	<div className='pic-list'>
      		<img src={Pic_04}/>
      		<div className='sku'>
      			<div className="detail"><span className="price">￥419.00</span><span>稻草人手提包</span></div>
      			<div className="shopping-cart"><i className="iconfont icon-gouwuche"></i></div>
      		</div>
      	</div>
        	
        </div>
        <div>
        	<div className='pic-list'>
        		<img src={Pic_05}/>
        		<div className='sku'>
        			<div className="detail"><span className="price">￥519.00</span><span>稻草人手提包</span></div>
        			<div className="shopping-cart"><i className="iconfont icon-gouwuche"></i></div>
        		</div>
        	</div>
        </div>
      </Slider>
      <div id='mask'></div>
    </div>)
  }
}
export default Home