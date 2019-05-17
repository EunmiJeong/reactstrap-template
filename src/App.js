import React, { Component } from "react"; //가장 기본적인 컴포넌트
import $ from "jquery";
import logo from "./logo.svg";
import "./App.css";
import { Row, Col, Button, Card, CardHeader, CardBody } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff, faBell } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
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
                    <div id="title">
                        <h2>고객관리</h2>
                    </div>
                    <div id="main" className="clearfix">
                        <div id="content">
                            <Row>
                                <Col sm={{ size: 8 }}>
                                    <div className="card_header">카드헤더</div>
                                    <Card>
                                        <CardHeader>카드헤더</CardHeader>
                                        <CardBody>
                                            내용텍스트 With supporting text
                                            below as a natural lead-in to
                                            additional content.
                                        </CardBody>
                                    </Card>
                                </Col>
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
                        <div id="timeline">
                            <span className="h4 mb-3 d-block">Timeline</span>
                            <div className="timeline">
                                <div className="timeline-block content-pink">
                                    <div className="timeline-icon" />
                                    <div className="timeline-content">
                                        <div className="category">
                                            <div>서비스 명칭</div>
                                        </div>
                                        <div className="desc">
                                            설명설명 나갑니다.
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline-block content-green">
                                    <div className="timeline-icon" />
                                    <div className="timeline-content">
                                        <div className="category">
                                            <div>서비스 명칭</div>
                                        </div>
                                        <div className="desc">
                                            설명설명 나갑니다.
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline-block content-blue">
                                    <div className="timeline-icon" />
                                    <div className="timeline-content">
                                        <div className="category">
                                            <div>서비스 명칭</div>
                                        </div>
                                        <div className="desc">
                                            설명설명 나갑니다.
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline-block content-yellow">
                                    <div className="timeline-icon" />
                                    <div className="timeline-content">
                                        <div className="category">
                                            <div>서비스 명칭</div>
                                        </div>
                                        <div className="desc">
                                            설명설명 나갑니다.
                                        </div>
                                    </div>
                                </div>
                            </div>
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
