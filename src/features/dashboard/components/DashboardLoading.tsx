import React from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';

const DashboardLoading = () => {
    return (
        <Row>
            <Col xs={4}>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" active>
                        ..
                    </ListGroup.Item>
                    <ListGroup.Item as="li">..</ListGroup.Item>
                    <ListGroup.Item as="li">..</ListGroup.Item>
                </ListGroup>
            </Col>
            <Col xs={4}>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" active>
                        ..
                    </ListGroup.Item>
                    <ListGroup.Item as="li">..</ListGroup.Item>
                    <ListGroup.Item as="li">..</ListGroup.Item>
                </ListGroup>
            </Col>
            <Col xs={4}>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" active>
                        ..
                    </ListGroup.Item>
                    <ListGroup.Item as="li">..</ListGroup.Item>
                    <ListGroup.Item as="li">..</ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
    );
};

export default DashboardLoading;