import React from 'react';
import {Col, PageHeader, Row} from 'antd';
import './App.css';
import IngredientsInput from "./components/IngredientsInput";

const App = () => (
        <>
            {/* PAGE TITLE*/}
            <PageHeader
                className="site-page-header"
                // onBack={() => null}
                title="whatDoYouEat"
                subTitle="당신의 냉장고를 비워볼까요?"
            />
            {/* SEARCH */}
            <Row>
                <Col span={6}></Col>
                <Col span={12} style={{marginTop: "100px"}}>
                    <IngredientsInput/>
                </Col>
                <Col span={6}></Col>
            </Row>
            {/* */}
            <Row>
                <Col span={24}></Col>
            </Row>
        </>
    )
;

export default App;