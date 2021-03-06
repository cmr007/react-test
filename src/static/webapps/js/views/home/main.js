import React, { propTypes } from 'react'
import '../../../stylesheet/home/home.less'
import Pic_01 from '../../../image/Home/img-1.jpg'
import Pic_02 from '../../../image/Home/img-2.jpg'
import Pic_03 from '../../../image/Home/img-3.jpg'
import Pic_04 from '../../../image/Home/img-4.jpg'
import Pic_05 from '../../../image/Home/img-5.jpg'
import Tumbnail_01 from '../../../image/Home/thumbnail-1.png'
import Tumbnail_02 from '../../../image/Home/thumbnail-2.png'
import Tumbnail_03 from '../../../image/Home/thumbnail-3.png'
import Tumbnail_04 from '../../../image/Home/thumbnail-4.png'
import Tumbnail_05 from '../../../image/Home/thumbnail-5.png'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeClass: 'active',
      index: 0,
      settings: {
        dots: false,
        autoplay: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        speed: 300,
        beforeChange: (prev,current)=>{
          this.setState({
            index: current
          })
        }
      }
    }
  }
  handleClick(e,v) {
    this.refs.slider.slickGoTo(v)
  }
  render() {
    return (<div id="home">
      <Slider ref='slider' {...this.state.settings}>
        <div>
        	<div className='pic-list'>
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
      <div id='thumbnail'>
    		<div onClick={(ev, arg1) => {this.handleClick(ev, '0')}}><img className={this.state.index == 0 ? this.state.activeClass : ''} src={ Tumbnail_01 }/></div>
        <div onClick={(ev, arg1) => {this.handleClick(ev, '1')}}><img className={this.state.index == 1 ? this.state.activeClass : ''} src={ Tumbnail_02 }/></div>
        <div onClick={(ev, arg1) => {this.handleClick(ev, '2')}}><img className={this.state.index == 2 ? this.state.activeClass : ''} src={ Tumbnail_03 }/></div>
        <div onClick={(ev, arg1) => {this.handleClick(ev, '3')}}><img className={this.state.index == 3 ? this.state.activeClass : ''} src={ Tumbnail_04 }/></div>
        <div onClick={(ev, arg1) => {this.handleClick(ev, '4')}}><img className={this.state.index == 4 ? this.state.activeClass : ''} src={ Tumbnail_05 }/></div>
      </div>
    </div>)
  }
}
export default Home