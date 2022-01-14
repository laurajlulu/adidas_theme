class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <nav>
            <div class="top_bar">
                <div class="bar_inner">
                        <a class="logo" href="./index.html"><img src="./images/ico.png" alt="" /></a>
                    <ul class="top_bar_menu">
                        <li><a href="#" alt="">주문조회</a></li>
                        <li><a>l</a></li>
                        <li><a href="join.html" alt="">회원가입</a></li>
                        <li><a>l</a></li>
                        <li><a href="login.html" alt="">로그인</a></li>
                        <li>
                            <p><i class="fas fa-user"></i></p>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="container">
                <ul class="menu_main">

                    <li><a href="men.html">MEN</a>
                        <div class="menu_sub">
                            <div class="menu_col1">
                                <h3 class="menu_category">남성</h3>
                                <ul>
                                    <li><a href="men.html">신상품</a></li>
                                    <li><a href="#">인기상품</a></li>
                                    <li><a href="#">런칭 캘린더</a></li>
                                    <li><a href="#">온라인단독</a></li>
                                    <li>-</li>
                                    <li><a href="#">Y-3 Collection</a></li>
                                    <li>-</li>
                                    <li class="see_all"><a href="men.html">남성 전체보기</a></li>

                                </ul>
                            </div>

                            <div class="menu_col1">
                                <h3 class="menu_category">신발</h3>
                                <ul>
                                    <li><a href="#">오리지널스</a></li>
                                    <li><a href="#">러닝</a></li>
                                    <li><a href="#">농구</a></li>
                                    <li><a href="#">아웃도어</a></li>
                                    <li><a href="#">축구</a></li>
                                    <li class="see_all"><a href="#">남성신발 전체보기</a></li>
                                </ul>
                            </div>

                            <div class="menu_col1">
                                <h3 class="menu_category">의류</h3>
                                <ul>
                                    <li><a href="#">수영복</a></li>
                                    <li><a href="#">자켓</a></li>
                                    <li><a href="#">티셔츠</a></li>
                                    <li><a href="#">팬츠 / 타이즈</a></li>
                                    <li><a href="#">후디 / 스웨트셔츠</a></li>
                                    <li class="see_all"><a href="#">남성의류 전체보기</a></li>
                                </ul>
                            </div>

                            <div class="menu_col1">
                                <h3 class="menu_category">용품</h3>
                                <ul>
                                    <li><a href="#">기타웨어</a></li>
                                    <li><a href="#">수건/우산/물병</a></li>
                                    <li><a href="#">장갑</a></li>
                                    <li><a href="#">피트니스용품</a></li>
                                    <li class="see_all"><a href="#">남성용품 전체보기</a></li>
                                </ul>
                            </div>

                            <div class="menu_col1">
                                <h3 class="menu_category">스포츠</h3>
                                <ul>
                                    <li><a href="#">축구</a></li>
                                    <li><a href="#">러닝</a></li>
                                    <li><a href="#">아웃도어</a></li>
                                    <li><a href="#">테니스</a></li>
                                    <li><a href="#">스케이트보딩</a></li>
                                    <li><a href="#">스윔</a></li>
                                    <li class="see_all"><a href="#">스포츠 전체보기</a></li>
                                </ul>
                            </div>

                        </div>
                    </li>


                    <li><a href="women.html">WOMEN</a>
                        <div class="menu_sub">
                            <div class="menu_col1">
                                <h3 class="menu_category">여성</h3>
                                <ul>
                                    <li><a href="women.html">신상품</a></li>
                                    <li><a href="#">인기상품</a></li>
                                    <li><a href="#">런칭 캘린더</a></li>
                                    <li><a href="#">온라인단독</a></li>
                                    <li>-</li>
                                    <li><a href="#">Y-3 Collection</a></li>
                                    <li>-</li>
                                    <li class="see_all"><a href="women.html">여성 전체보기</a></li>
                                </ul>
                            </div>

                            <div class="menu_col1">
                                <h3 class="menu_category">신발</h3>
                                <ul>
                                    <li><a href="#">오리지널스</a></li>
                                    <li><a href="#">러닝</a></li>
                                    <li><a href="#">아웃도어</a></li>
                                    <li><a href="#">샌들 / 슬리퍼</a></li>
                                    <li class="see_all"><a href="#">여성신발 전체보기</a></li>
                                </ul>
                            </div>

                            <div class="menu_col1">
                                <h3 class="menu_category">의류</h3>
                                <ul>
                                    <li><a href="#">스포츠브라</a></li>
                                    <li><a href="#">티셔츠</a></li>
                                    <li><a href="#">쟈켓</a></li>
                                    <li><a href="#">스커트 / 원피스</a></li>
                                    <li><a href="#">수영복</a></li>
                                    <li><a href="#">팬츠 / 타이즈</a></li>
                                    <li class="see_all"><a href="#">여성의류 전체보기</a></li>
                                </ul>
                            </div>

                            <div class="menu_col1">
                                <h3 class="menu_category">용품</h3>
                                <ul>
                                    <li><a href="#">액세서리</a></li>
                                    <li><a href="#">수건/우산/물병</a></li>
                                    <li><a href="#">양말</a></li>
                                    <li><a href="#">장갑</a></li>
                                    <li><a href="#">피트니스용품</a></li>
                                    <li class="see_all"><a href="#">여성용품 전체보기</a></li>
                                </ul>
                            </div>

                            <div class="menu_col1">
                                <h3 class="menu_category">스포츠</h3>
                                <ul>
                                    <li><a href="#">러닝</a></li>
                                    <li><a href="#">트레이닝</a></li>
                                    <li><a href="#">아웃도어</a></li>
                                    <li><a href="#">테니스</a></li>
                                    <li><a href="#">스케이트보딩</a></li>
                                    <li class="see_all"><a href="#">스포츠 전체보기</a></li>
                                </ul>
                            </div>

                        </div>
                    </li>



                    <li><a href="kids.html">KIDS</a>
                        <div class="menu_sub">
                            <div class="menu_col1">
                                <h3 class="menu_category">키즈</h3>
                                <ul>
                                    <li><a href="#">신상품</a></li>
                                    <li><a href="#">인기상품</a></li>
                                    <li><a href="#">런칭 캘린더</a></li>
                                    <li>-</li>
                                    <li><a href="#">키즈 트레이닝 컬렉션</a></li>
                                    <li>-</li>
                                    <li class="see_all"><a href="kids.html">키즈 전체보기</a></li>
                                </ul>
                            </div>

                            <div class="menu_col1">
                                <h3 class="menu_category">유아 (3-36개월)</h3>
                                <ul>
                                    <li><a href="#">신발</a></li>
                                    <li><a href="#">의류</a></li>
                                    <li><a href="#">용품</a></li>
                                    <li class="see_all"><a href="#">유아 전체보기</a></li>
                                </ul>
                            </div>

                            <div class="menu_col1">
                                <h3 class="menu_category">남아 (4세-13세)</h3>
                                <ul>
                                    <li><a href="#">신발</a></li>
                                    <li><a href="#">의류</a></li>
                                    <li><a href="#">용품</a></li>
                                    <li class="see_all"><a href="#">남아 전체보기</a></li>
                                </ul>
                            </div>

                            <div class="menu_col1">
                                <h3 class="menu_category">여아 (4-13세)</h3>
                                <ul>
                                    <li><a href="#">신발</a></li>
                                    <li><a href="#">의류</a></li>
                                    <li><a href="#">용품</a></li>
                                    <li class="see_all"><a href="#">여아 전체보기</a></li>
                                </ul>
                            </div>

                            <div class="menu_col1">
                                <h3 class="menu_category">스포츠</h3>
                                <ul>
                                    <li><a href="#">축구</a></li>
                                    <li><a href="#">러닝</a></li>
                                    <li><a href="#">농구</a></li>
                                    <li><a href="#">트레이닝</a></li>
                                    <li><a href="#">아웃도어</a></li>
                                    <li><a href="#">테니스</a></li>
                                    <li><a href="#">스윔</a></li>
                                    <li class="see_all"><a href="#">스포츠 전체보기</a></li>
                                </ul>
                            </div>

                        </div>
                    </li>

                    <li><a href="#">BRANDS</a>
                        <div class="menu_sub">
                            <div class="menu_col2">
                                <h3 class="menu_category">ADIDAS ORIGINALS</h3>
                                <ul>
                                    <li><a href="#"><img class="img-sportsmenu" src="images/menu_originals.jpg"
                                                width="150px" alt="OPEN SPIRIT" /></a>
                                    </li>
                                    <li><a href="#">신발</a></li>
                                    <li><a href="#">의류</a></li>
                                    <li><a href="#">용품</a> </li>
                                    <li class="see_all"><a href="#">전체보기</a></li>
                                </ul>
                            </div>

                            <div class="menu_col2">
                                <h3 class="menu_category">ADIDAS ATHLETICS</h3>
                                <ul>
                                    <li><a href="#"><img class="img-sportsmenu" src="images/menu_athl.jpg"
                                                width="150px" alt="Athletics" /></a></li>
                                    <li><a href="#">신발</a> </li>
                                    <li><a href="#">의류</a> </li>
                                    <li><a href="#">용품</a> </li>
                                    <li class="see_all"><a href="#">전체보기</a></li>
                                </ul>
                            </div>

                            <div class="menu_col2">
                                <h3 class="menu_category">STELLA MacCartney"</a>
                                </h3>
                                <ul>
                                    <li><a href="#"><img class="img-sportsmenu" src="images/menu_steall.jpg"
                                                alt="StellaMaccartney" /></a></li>
                                    <li><a href="#">의류</a></li>
                                    <li><a href="#">용품</a></li>
                                    <li class="see_all"><a href="#">전체보기</a></li>
                                </ul>
                            </div>

                            <div class="menu_col2">
                                <h3 class="menu_category">ADIDAS Skateboarding</a>
                                </h3>
                                <ul>
                                    <li><a href="#"><img class="img-sportsmenu" src="images/menu_boardin.jpg"
                                                alt="Skateboarding" /></a></li>
                                    <li><a href="#">신발</a></li>
                                    <li><a href="#">의류</a> </li>
                                    <li class="see_all"><a href="#">전체보기</a></li>
                                </ul>
                            </div>

                            <div class="menu_col2">

                            </div>
                        </div>

                    </li>



                    <li><a class="divide">l</a></li>
                    <li><a href="#" class="link_only">브랜드 캠페인↗</a></li>


                    <li><a class="divide">l</a></li>
                    <li><a href="#" class="link_only">런칭 캘린더↗</a></li>

                    <li class="serach_bar">
                        <input type="text" name="search" placeholder="Search items..">
                    </li>
                </ul>
            </div>
        </nav>
    </header>
        `
    }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="info_bottom">
                <div class="info">
                    <p>아디다스코리아(유)</p>
                    <p>서울특별시 서초구 서초대로 74길 4, 삼성생명 서초타워 23층 (06620)
                        &nbsp;&nbsp;&nbsp;&nbsp;대표자 : 곽근엽&nbsp;&nbsp;&nbsp;&nbsp;
                        사업자 등록번호 : 214-81-07412</p>
                    <p>통신판매업신고 : 2007-서울서초-10391&nbsp;&nbsp;&nbsp;&nbsp;
                        개인정보관리책임자 : 장영태&nbsp;&nbsp;&nbsp;&nbsp;
                        호스팅서비스사업자 : 아디다스코리아(유)</p><br>
                    <p>고객센터 : 1588-8241&nbsp;&nbsp;&nbsp;&nbsp;이메일 : adiclub_korea@adidas.com </p>
                    <div>©adidas Korea, LLC. All Rights Reserved.</div>
                </div>
                <div class="contract">
                    <ul>
                        <li><a href="agreement.html" target="_blank"><strong>구매 이용약관</strong></a></li>
                        <li><a href="agreement.html" target="_blank"><strong>개인정보 처리방침</strong></a></li>
                        <li><a href="agreement.html" target="_blank"><strong>아디클럽 이용약관</strong></a></li>
                        <li><a href="#">사업자정보확인</a></li>
                        <li><a href="#">공정거래 자율준수</a></li>
                        <li><a href="#">채무지급보증안내</a></li>
                    </ul>

                </div>
            </div>
        </footer> 
        `
    }
}
customElements.define('my-footer', MyFooter)

// <header>
// <a href=index.html>
//     <img src=#>
// </a>
// <nav>
//     <ul>
//         <li><a href=index.html>HOME</a>
//         <li><a href=login.html>login</a>
//         <li><a href=join.html>Join</a>
//     </ul>
// </nav>
// </header>    