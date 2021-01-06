import React from 'react';

import image1 from '../../assets/images/modern-design.jpg';
import image2 from '../../assets/images/clean-design.jpg';
import image3 from '../../assets/images/great-support.jpg';
import image4 from '../../assets/images/easy-customise.jpg';
import image5 from '../../assets/images/unlimited-features.jpg';
import image6 from '../../assets/images/advanced-option.jpg';

import { Row, Col, Card } from 'antd';
const { Meta } = Card;


function AppFeature() {
    return (
        <div className="block featureBlock bgGray">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Features and Benefits</h2>
                    <p>Get amazing features and a lot of benefits from us!</p>
                </div>
                <Row gutter={[16, 16]}>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <Card hoverable cover={<img src={image1} alt="Modern Design" />} >
                            <Meta title="Modern Design" />
                        </Card>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <Card hoverable cover={<img src={image2} alt="Clean and Elegant" />} >
                            <Meta title="Clean and Elegant" />
                        </Card>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <Card hoverable cover={<img src={image3} alt="Great Support" />} >
                            <Meta title="Great Support" />
                        </Card>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <Card hoverable cover={<img src={image4} alt="Easy to Customize" />} >
                            <Meta title="Easy to Customize" />
                        </Card>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <Card hoverable cover={<img src={image5} alt="Unlimited Features" />} >
                            <Meta title="Unlimited Features" />
                        </Card>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <Card hoverable cover={<img src={image6} alt="Advanced Option" />} >
                            <Meta title="Advanced Option" />
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default AppFeature;
