import { Col, Row } from "antd";
import React from "react";

export default function MoreNASAImages() {
  return (
    <div>
      <Row gutter={16}>
        <Col span={12} md={6}></Col>
        <Col span={12} md={6}></Col>
        <Col span={12} md={6}></Col>
      </Row>
    </div>
  );
}
