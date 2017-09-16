import React, { Component } from 'react'
import './Top.css'
import './swiper-3.4.2.min.css'
import a from './images/men_08.jpg'
import b from './images/logo_03.png'
import c from './images/fsangdajing_03.jpg'
import d from './images/shop_03.jpg'
import e from './images/1.jpg'
import f from './images/2.jpg'
import g from './images/3.jpg'
import logo from './images/shopp.svg'

class Top extends Component {
  render () {
    return (
      <div className="top">
  			<div className="top_on clearfix">
  				<a href="#"><img src={a} /></a>
          <a href="index.html"><img src={b} alt=""/></a>
          <div className="denglu">
            <img src={logo} alt=""/>
            <img src={d} alt=""/>
            <a href="#">登录</a>/
            <a href="#">注册</a>
          </div>
        </div>
        <div className="banner_on">
          <div className="banner">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide"><img src={e} alt=""/></div>
                <div className="swiper-slide"><img src={f}  /></div>
                <div className="swiper-slide"><img src={g} alt=""/></div>
              </div>
            </div>
            <div className="swiper-button-prev swiper-button-white"></div>
            <div className="swiper-button-next swiper-button-white"></div>
          </div>
        </div>
      </div>
        )
        }
        }
export default Top
