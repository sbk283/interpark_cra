import React from "react";
import "../css/Trip.css";

function Trip() {
  return (
    <section className="trip">
      <div className="layout">
        <div className="trip_header">
          <h2 className="trip_header_title">
            <img src="images/icon_w_trip_new_pc.svg" alt="trip" />
            <img src="images/icon_w_trip_question_mark_pc.svg" alt="trip" />
          </h2>
          <p className="trip_header_text">
            누구와 여행 가시나요? 동행자별 맞춤여행
          </p>
        </div>
        <div className="trip_slide_wrap">
          <div className="swiper sw_trip">
            <div className="swiper-wrapper"></div>
          </div>
          <button className="trip_slide_prev">
            <img src="images/slider_arrow.svg" alt="이전" />
          </button>
          <button className="trip_slide_next">
            <img src="images/slider_arrow.svg" alt="다음" />
          </button>
        </div>
        <div className="trip_footer">
          <a href="#" className="trip_more_bt">
            w트립 상품 더보기
            <img src="images/icon_linkArrow.svg" alt="더보기" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Trip;
