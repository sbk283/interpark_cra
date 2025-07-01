import React from "react";
import "../css/Ticket.css";

function Ticket() {
  return (
    <section className="ticket">
      <div className="layout">
        <div className="ticket_header">
          <h2 className="ticket_header_title">티켓 랭킹</h2>
          <p className="ticket_header_text">오늘 뭐볼까? 지금 HOT한 공연</p>
        </div>
        <div className="ticket_category">
          <ul className="ticket_category_list">
            <li>
              <button className="ticket_focus">뮤지컬</button>
            </li>
            <li>
              <button>콘서트</button>
            </li>
            <li>
              <button>콘서트</button>
            </li>
            <li>
              <button>콘서트</button>
            </li>
            <li>
              <button>콘서트</button>
            </li>
            <li>
              <button>콘서트</button>
            </li>
            <li>
              <button>콘서트</button>
            </li>
          </ul>
        </div>
        <div className="ticket_slide_wrap">
          <div className="swiper sw_ticket">
            <div className="swiper-wrapper"></div>
          </div>
          <button className="ticket_slide_prev">
            <img src="images/slider_arrow.svg" alt="이전" />
          </button>
          <button className="ticket_slide_next">
            <img src="images/slider_arrow.svg" alt="다음" />
          </button>
        </div>
        <div className="ticket_footer">
          <a href="#" className="ticket_more_bt">
            티켓 홈 바로가기
            <img src="images/icon_linkArrow.svg" alt="더보기" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Ticket;
