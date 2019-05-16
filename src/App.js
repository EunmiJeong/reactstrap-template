import React, { Component } from "react"; //가장 기본적인 컴포넌트
import $ from "jquery";
import logo from "./logo.svg";
import "./App.css";
import { Row, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff, faBell } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
    componentDidMount() {
        // Jquery here $(...)...
        $(window)
            .resize(function() {
                var document_height = $(document).height();
                var window_height = $(window).height();
                var window_width = $(document).innerWidth();
                if (window_width > 767) {
                    var header_height =
                        $("#top-nav").outerHeight() + $("#title").outerHeight();
                    if (document_height > window_height) {
                        // 컨텐츠가 길 경우
                        console.log("document^^");
                        var timeline_height =
                            $(document).innerHeight() -
                            $("#top-nav").outerHeight() -
                            $("#title").outerHeight();
                    } else {
                        // 컨텐츠가 짧을 경우

                        var timeline_height =
                            $(document).innerHeight() - header_height;
                        $("#timeline").css(
                            "maxHeight",
                            $(window).height() - header_height
                        );
                        // $("#nav").css("height", window_height);
                    }

                    console.log(document_height);
                    console.log($("#top-nav").outerHeight());

                    // $("#timeline").css("height", timeline_height);
                }

                if (window_width > 767 && document_height > window_height) {
                }
            })
            .resize();
    }

    //재사용 가능한 것
    render() {
        const name = "react";

        return (
            <React.Fragment>
                <div id="nav">
                    <div id="user">
                        <span className="avatar" />
                        <span className="d-block name">Eunmi Jeong</span>
                    </div>
                    <ul>
                        <li>
                            회원관리
                            <ul>
                                <li>고객관리</li>
                                <li>전문가관리</li>
                                <li>기타관리</li>
                            </ul>
                        </li>
                        <li>
                            회원관리
                            <ul>
                                <li>고객관리</li>
                                <li>전문가관리</li>
                                <li>기타관리</li>
                            </ul>
                        </li>
                        <li>
                            회원관리
                            <ul>
                                <li>고객관리</li>
                                <li>전문가관리</li>
                                <li>기타관리</li>
                            </ul>
                        </li>
                        <li>
                            회원관리
                            <ul>
                                <li>고객관리</li>
                                <li>전문가관리</li>
                                <li>기타관리</li>
                            </ul>
                        </li>
                        <li>
                            회원관리
                            <ul>
                                <li>고객관리</li>
                                <li>전문가관리</li>
                                <li>기타관리</li>
                            </ul>
                        </li>
                        {/* <li>
                            회원관리
                            <ul>
                                <li>고객관리</li>
                                <li>전문가관리</li>
                                <li>기타관리</li>
                            </ul>
                        </li>
                        <li>
                            회원관리
                            <ul>
                                <li>고객관리</li>
                                <li>전문가관리</li>
                                <li>기타관리</li>
                            </ul>
                        </li>
                        <li>회원관리</li>
                        <li>회원관리</li> */}
                    </ul>
                </div>

                <main id="page_wrap">
                    <header id="top_nav">
                        <ul className="list-unstyled">
                            <li>
                                <a href="#" className="burger">
                                    <span />
                                    <span />
                                    <span />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="alarm" title="알람확인">
                                    <span className="beep">
                                        <FontAwesomeIcon icon={faBell} />
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="logout" title="로그아웃">
                                    <span>
                                        <FontAwesomeIcon icon={faPowerOff} />
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </header>
                    <div id="title">dd</div>
                    <div id="main" className="clearfix">
                        <div id="content">
                            <Row>
                                <Col>Col</Col>
                            </Row>
                            <div style={{ height: 590 }}>
                                hello {name}
                                <Button color="primary">dd</Button>
                                <p className="h1">h1</p>
                                <p className="h2">h2</p>
                                <p className="h3">h3</p>
                                <p className="h4">h4</p>
                                <p className="h5">h5</p>
                                <p className="h6">h6</p>
                            </div>
                        </div>
                        <div id="timeline" className="timeline">
                            <div style={{ height: 200 }}>타임라인 자리</div>
                        </div>
                    </div>

                    <div
                        id="footer"
                        className="text-center font-size-xs text-muted"
                    >
                        &copy; EKHUB
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

export default App; //컴포넌트를 재사용 하기위해 내보내는 역할.

//기사같은건 컴포넌트로...

//component는 will, did 나누어서 .. 렌더링? ㅎㄹ수있음
