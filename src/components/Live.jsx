import React from "react";
import "../css/Live.css";

function Live() {
  return (
    <div className="live">
      <div className="layout">
        <div className="live_header">
          <h2 className="live_header_title">
            <img src="images/title_live.svg" alt="liv" />
          </h2>
        </div>
        <div className="live_slide_wrap">
          <div className="swiper sw_live">
            <div className="swiper-wrapper"></div>
          </div>
          <button className="live_slide_prev">
            <img src="images/slider_arrow.svg" alt="이전" />
          </button>
          <button className="live_slide_next">
            <img src="images/slider_arrow.svg" alt="다음" />
          </button>
        </div>
        <div className="live_footer">
          <a href="#" className="live_more_bt">
            인터파크 라이브 바로가기
            <img src="images/icon_linkArrow.svg" alt="더보기" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Live;
