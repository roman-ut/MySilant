import React from "react";
import {MaintenanceService, Maintenance} from "../api";
import {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
import "../styles/MaintenanceListPublic.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';


function MaintenanceItem(props:Maintenance ) {

    return (<tr className={"item"}>
            <td>{props.serNumM}</td>
            <td>{props.modelm_title}</td>
            <td>{props.modele_title}</td>
            <td>{props.serNumE}</td>
            <td>{props.modelt_title}</td>
            <td>{props.serNumT}</td>
            <td>{props.modelda_title}</td>
            <td>{props.serNumDA}</td>
            <td>{props.modelsa_title}</td>
            <td>{props.serNumSA}</td>
            </tr>
    );
}

export default function MaintenanceListPublic() {
    const [sernum , setSernum] = useState('');
    const [maintenances , setMaintenances] = useState<Maintenance [] | undefined>();
    const loadMaintenance  = async () => {
        setMaintenances(await MaintenanceService.maintenancepublicList());
    };

    useEffect(() => {
        loadMaintenance();
    }, []);

    async function loadMaintenanceFilter() {
        setMaintenances(await MaintenanceService.maintenancepublicList(sernum));
    }


    return (
        <div>
            <h3>Информация о комплектации и технических характеристиках техники Силант</h3>
    <Navbar  id="filter1">
    <Container fluid>
    <Form className="d-flex">
    <Form.Control
        type="search"
    placeholder="Введите зав. № машины"
    className="me-2"
    aria-label="Search"
    value={sernum} onChange={e => setSernum(e.target.value)}
    />
    <Button variant="outline-secondary" onClick={loadMaintenanceFilter}>Поиск</Button>
        </Form>
        </Container>
        </Navbar>
        <div className="table1">
        <Table striped bordered hover className={"table12"}>
        <thead><tr><th>Заводской номер машины</th><th>Модель машины</th><th>Модель двигателя</th>
    <th>Заводской номер двигателя</th><th>Модель трансмиссии</th><th>Заводской номер трансмиссии</th>
    <th>Модель ведущего моста</th><th>Заводской номер ведущего моста</th>
    <th>Модель управляемого моста</th><th>Заводской номер управляемого мост</th></tr></thead>
    <tbody>
        {maintenances && maintenances.map(maintenance => {return <MaintenanceItem key={maintenance.id} {...maintenance}/>;})}
    </tbody>
    </Table>
    </div>
    </div>
    );
    }
