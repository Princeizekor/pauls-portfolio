import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    // css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
  };
  const icons = [
    {
      id: 1,
      image: '/img/bx_bxl-facebook.png',
      link: 'https://www.facebook.com/prince.izekor.5/'
    },
    {
      id: 2,
      image: '/img/cib_codesandbox.png',
      link: 'https://www.facebook.com/prince.izekor.5/'
    },
    {
      id: 3,
      image: '/img/ant-design_github-outlined.png',
      link: 'https://github.com/Princeizekor'
    },
    {
      id: 4,
      image: '/img/ant-design_twitter-outlined.png',
      link: 'https://twitter.com/Paullizekor'
    },
    {
      id: 5,
      image: '/img/ant-design_behance-outlined.png',
      link: 'https://www.facebook.com/prince.izekor.5/'
    }
  ]
  return (
    <div id='home'>
      <h2 className='hello'>Hello,</h2>
      <h1 href="" class="typewrite" data-period="2000" data-type='["I am Paul Izekor.", "I am front-end developer.", "I Love Design.", "I Love to Develop." ]'>
        <span class="wrap"></span>
      </h1>

      <h2 className='hello'>Welcome to my portfolio</h2>
      <button className='front-end-btn'>Frontend Developer</button>
      <button className='more'><a href="#about">More about me</a></button>

      <div class="icons">
        {
          icons.map((item) => 
          <Link to={item.link} target="_blank">
        <img src={item.image} alt="Facebook icon"/>
        </Link>
          )
        }
    </div>
    </div>
  )
}

export default Home
