import React from "react";
import styles from "../css/Footer.module.css";
import "../css/Footer.css";

function Footer() {
  return (
    <div className={Footer}>
      <footer className="footer">
        <div className="footer_top">
          <div className="layout">
            <ul className="footer_menu_list">
              <li>
                <a href="#">회사소개</a>
              </li>
              <li>
                <a href="#">이용약관</a>
              </li>
              <li>
                <a href="#">
                  <strong>개인정보처리방침</strong>
                </a>
              </li>
              <li>
                <a href="#">위치기반서비스 이용약관</a>
              </li>
              <li>
                <a href="#">여행약관</a>
              </li>
              <li>
                <a href="#">여행자보험 가입내역</a>
              </li>
              <li>
                <a href="#">티켓판매안내</a>
              </li>
              <li>
                <a href="#">공지사항</a>
              </li>
              <li>
                <div className="footer_more">
                  <span>
                    고객센터
                    <img src="images/icon_linkArrow.svg" alt="고객센터" />
                  </span>
                  <div className="more_box">
                    <ul className="more_list">
                      <li>
                        <a href="#">투어 고객센터</a>
                      </li>
                      <li>
                        <a href="#">티켓 고객센터</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className="footer_more">
                  <span>
                    Language
                    <img src="images/icon_linkArrow.svg" alt="Language" />
                  </span>
                  <div className="more_box">
                    <ul className="more_list">
                      <li>
                        <a href="#">Korean</a>
                      </li>
                      <li>
                        <a href="#">English</a>
                      </li>
                      <li>
                        <a href="#">Japanes</a>
                      </li>
                      <li>
                        <a href="#">Chinese</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="layout">
            <div className="footer_contact">
              <div className="footer_contact_box">
                <h3>(주)놀유니버스</h3>
                <ul>
                  <li>
                    <address>
                      주소 경기도 성남시 수정구 금토로 70 (금토동, 텐엑스타워)
                    </address>
                  </li>
                  <li>
                    사업자등록번호 824-81-02515
                    <a href="#" target="_blank">
                      사업자정보확인
                    </a>
                  </li>
                  <li>통신판매업신고 2024-성남수정-0912</li>
                  <li>관광사업증 등록번호 : 제2024-000024호</li>
                  <li>
                    호스팅서비스제공자 (주)놀유니버스｜ 대표이사 배보찬, 최휘영
                  </li>
                </ul>
              </div>
              <div className="footer_contact_box">
                <h3>고객센터</h3>
                <ul>
                  <li>투어 1588-3443 ｜ 티켓 1544-1555</li>
                  <li>
                    팩스 02-830-7807 ｜ 이메일 help.interpark@nol-universe.com
                  </li>
                  <li>해외항공 02-3479-4399 ｜ 국내항공 02-3479-4340</li>
                  <li>
                    <a href="#">투어 1:1문의</a> | <a href="#">티켓 1:1문의</a>
                  </li>
                </ul>
              </div>
              <div className="footer_contact_box">
                <h3>전자금융거래 분쟁처리 담당정보</h3>
                <ul>
                  <li>투어 1588-3443 ｜ 티켓 1544-1555</li>
                  <li>
                    팩스 02-830-8295 ｜ 이메일 interpark_ef@nol-universe.com
                  </li>
                  <li>개인정보보호책임자 privacy_i@nol-universe.com</li>
                </ul>
              </div>
            </div>
            <div className="footer_copyright">
              <div className="footer_copyright_box">
                <p className="first_p">
                  (주)놀유니버스는 일부 상품의 통신판매중개자로서 통신판매의
                  당사자가 아니므로, 상품의 예약, 이용 및 환불 등 거래와 관련된
                  의무와 책임은 판매자에게 있으며 (주)놀유니버스는 일체 책임을
                  지지 않습니다.
                </p>
                <p className="second_p">
                  ⓒ Nol Universe Co., Ltd. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
