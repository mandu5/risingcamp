import React from 'react'
import { Footer } from "../components";

function Search() {
  const menuToggle = () => {
    const toggleMenu = document.querySelector(".menu");
    toggleMenu.classList.toggle("active");
  };
  return (
    <><header>
    <div className="top">
        <div className="logo" onclick="location.href='index.html'">
            <i className="fa-brands fa-airbnb"></i>
            <span>airbnb</span>
        </div>
        <div className="selections">
            <span className="selection">숙소</span>
            <span className="selection">체험</span>
            <span className="selection">온라인 체험</span>
        </div>
        <div className="selections2">
            <input placeholder="검색 시작하기"/>
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="host">
            <ul>
                <li><a>호스트 되기</a></li>
                <li><a>🌐</a></li>
                <li>
                    <div className="action" onClick={menuToggle}>
                        <div className="profile">
                            <i className="fa-solid fa-bars"></i>
                            <i className="fa-solid fa-circle-user"></i>
                        </div>
                        <div className="menu">
                            <h3>회원가입<br/></h3>
                            <h3>로그인<br/></h3>
                            <h3>숙소 호스트 되기<br/></h3>
                            <h3>체험 호스팅하기<br/></h3>
                            <h3>도움말<br/></h3>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div className="input">
        <div className="borders">
            <div>농장</div>
        </div>
        <div className="border">
            <div>해변 근처</div>
        </div>
        <div className="border">
            <div>멋진 수영장</div>
        </div>
        <div className="border">
            <div>하우스보트</div>
        </div>
        <div className="border">
            <div>통나무집</div>
        </div>
        <div className="border">
            <div>초소형 주택</div>
        </div>
        <div className="border">
            <div>트리하우스</div>
        </div>
        <div className="border">
            <div>Luxe</div>
        </div>
        <div className="border">
            <div>캠핑카</div>
        </div>
        <div className="border">
            <div>개성 넘치는 숙소</div>
        </div>
        <div className="border">
            <div>료칸</div>
        </div>
        <div className="border">
            <div>헛간</div>
        </div>
        <div className="border">
            <div>성</div>
        </div>
        <div className="border">
            <div>더 보기</div>
        </div>
        <span>언제든 <div className="fa-solid fa-angle-down"></div></span>
        <span>인원 <div className="fa-solid fa-angle-down"></div></span>
        <span>
            <div className="fa-solid fa-filter"></div> 필터
        </span>
    </div>
</header>
<section>
    <div className="margin">
        <div className="tabs">
            <div className="tab1">
                <div className="img1"></div>
                <div>
                    <span className="city">Namwon-eup<span className="right">₩249,866 / 박</span></span><br />
                    <span className="distance">477km 거리<span className="right">7월 31일 ~ 10일</span></span>
                </div>
            </div>
            <div className="tab2">
                <div className="img2"></div>
                <div>
                    <span className="city">Gujwa-eup, Cheju, 제주도<span className="right">₩271,628 / 박</span></span><br />
                    <span className="distance">447km 거리<span className="right">2월 28일 ~ 3월 7일</span></span>
                </div>
            </div>
            <div className="tab3">
                <div className="img3"></div>
                <div>
                    <span className="city">Hangyeong-myeon,Jeju<span className="right">₩173,294 / 박</span></span><br />
                    <span className="distance">479km 거리<span className="right">4월 8일 ~ 15일</span></span>
                </div>
            </div>
            <div className="tab4">
                <div className="img4"></div>
                <div>
                    <span className="city">Seogwipo-si,제주도<span className="right">₩61,280 / 박</span></span><br />
                    <span className="distance">478km 거리<span className="right">3월 4일 ~ 11일</span></span>
                </div>
            </div>
            <div className="tab1">
                <div className="img5"></div>
                <div>
                    <span className="city">Gujwa-eup, Jeju<span className="right">₩66,413 / 박</span></span><br />
                    <span className="distance">451km 거리<span className="right">5월 30일 ~ 6월 6일</span></span>
                </div>
            </div>
            <div className="tab2">
                <div className="img6"></div>
                <div>
                    <span className="city">Hallim-eub, 제주<span className="right">₩166,362 / 박</span><span
                            className="right">a</span></span><br />
                    <span className="distance">324km 거리<span className="right">3월 4일 ~ 11일</span></span>
                </div>
            </div>
            <div className="tab3">
                <div className="img7"></div>
                <div>
                    <span className="city">일동면, 포천시, 경기도<span className="right">₩189,559 / 박</span></span><br />
                    <span className="distance">166km 거리<span className="right">3월 6일 ~ 13일</span></span>
                </div>
            </div>
            <div className="tab4">
                <div className="img8"></div>
                <div>
                    <span className="city">Ha-myeon, Gapyeong<span className="right">₩311,228 / 박</span></span><br />
                    <span className="distance">157km 거리<span className="right">3월 20일 ~ 27일</span></span>
                </div>
            </div>
            <div className="tab1">
                <div className="img9"></div>
                <div>
                    <span className="city">Seojong-myeon<span className="right">₩143,917 / 박</span></span><br />
                    <span className="distance">425km 거리<span className="right">4월 10일 ~ 17일</span></span>
                </div>
            </div>
            <div className="tab2">
                <div className="img10"></div>
                <div>
                    <span className="city">포천시, 경기도<span className="right">₩187,050 / 박</span><span
                            className="right">a</span></span><br />
                    <span className="distance">354km 거리<span className="right">2월 28일 ~ 3월 7일</span></span>
                </div>
            </div>
            <div className="tab3">
                <div className="img11"></div>
                <div>
                    <span className="city">Yangju-si, 경기도<span className="right">₩187,991 / 박</span></span><br />
                    <span className="distance">166km 거리<span className="right">3월 6일 ~ 13일</span></span>
                </div>
            </div>
            <div className="tab4">
                <div className="img12"></div>
                <div>
                    <span className="city">Seojong-myeon<span className="right">₩181,959 / 박</span></span><br />
                    <span className="distance">273km 거리<span className="right">2월 13일 ~ 20일</span></span>
                </div>
            </div>
            <div className="tab1">
                <div className="img13"></div>
                <div>
                    <span className="city">중구, 인천(Incheon)<span className="right">₩184,847 / 박</span></span><br />
                    <span className="distance">318km 거리<span className="right">3월 4일 ~ 11일</span></span>
                </div>
            </div>
            <div className="tab2">
                <div className="img14"></div>
                <div>
                    <span className="city">Sinbuk-myeon<span className="right">₩109,637 / 박</span></span><br />
                    <span className="distance">224km 거리<span className="right">2월 18일 ~ 25일</span></span>
                </div>
            </div>
            <div className="tab3">
                <div className="img15"></div>
                <div>
                    <span className="city">Jangheung-myeon<span className="right">₩313,580 / 박</span></span><br />
                    <span className="distance">128km 거리<span className="right">2월 18일 ~ 25일</span></span>
                </div>
            </div>
            <div className="tab4">
                <div className="img16"></div>
                <div>
                    <span className="city">Buleun-myeon<span className="right">₩205,477 / 박</span></span><br />
                    <span className="distance">386km 거리<span className="right">2월 14일 ~ 21일</span></span>
                </div>
            </div>
        </div>
    </div>
</section>
<Footer />
</>
  )
}

export default Search