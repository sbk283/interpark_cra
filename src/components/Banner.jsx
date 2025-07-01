import React from "react";

function Banner() {
  return (
    <div className="banner">
      <div className="layout">
        <div className="banner_wrap">
          <div className="swiper sw_banner">
            <div className="swiper-wrapper"></div>
          </div>

          <button className="banner_slide_prev">
            <img src="images/slider_arrow.svg" alt="이전" />
          </button>
          <button className="banner_slide_next">
            <img src="images/slider_arrow.svg" alt="다음" />
          </button>
          <div className="banner_slide_pg">페이지네이션</div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
