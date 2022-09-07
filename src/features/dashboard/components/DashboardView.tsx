import React, { useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import DashboardList from './DashboardList';
import { useAppDispatch } from '../../../utils/hooks/reduxHook';
import { initListUsers } from '../../../utils/redux/actions/users.action';
import { initListAlbums } from '../../../utils/redux/actions/albums.action';

const DashboardView = () => {
    const dispatch = useAppDispatch();

    const initDashboard = () => {
        dispatch(initListUsers());
        dispatch(initListAlbums());
    }

    return (
        <main className="main">
            <Jumbotron fluid>
                <Container fluid="md">
                    <h1 className="mb-5">Keep calm, take a deep breath...</h1>

                    <Button variant="primary" onClick={initDashboard}>Charger les albums</Button>
                </Container>
            </Jumbotron>
            <Container fluid="md">
                <DashboardList />
            </Container>
        </main>
    );
};

export default DashboardView;