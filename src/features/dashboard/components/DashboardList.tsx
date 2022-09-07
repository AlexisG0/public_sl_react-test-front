import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { User } from '../../../interfaces/user';
import { useAppSelector } from '../../../utils/hooks/reduxHook';
import DashboardLoading from './DashboardLoading';

const StyledCol = styled(Col)`
    margin-bottom: 16px;
`

const DashboardList = () => {
    const users = useAppSelector((state) => state.users.list);
    const albums = useAppSelector((state) => state.albums.list);

    return (
        <Container>
            {users.length > 0 ?
                <Row>
                    {users.map((user: User) => {
                        return (
                            <StyledCol xs={4} key={user.id}>
                                <ListGroup as="ul">
                                    <ListGroup.Item as="li" active>
                                        {user.name}
                                    </ListGroup.Item>

                                    {albums.filter((album) => album.userId === user.id).map((album) => {
                                        return (
                                            <>
                                                <ListGroup.Item as="li">
                                                    {album.title}
                                                </ListGroup.Item>
                                            </>
                                        )
                                    })}
                                </ListGroup>
                            </StyledCol>
                        )
                    })}
                </Row>
                :
                <DashboardLoading />
            }

        </Container>
    );
};

export default DashboardList;
