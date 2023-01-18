import React from "react";
import {MachineviewService, MachineView} from "../api";
import {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
import "../styles/MachineList.css";

function MachineItem(props:MachineView ) {

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

export default function MachineList() {
    const [machines , setMachines] = useState<MachineView [] | undefined>();
    const loadMachine  = async () => {
        setMachines(await MachineviewService.machineviewList());
    };
    useEffect(() => {
        loadMachine();
    }, []);
    return (
        <div>
            <h3>Проверьте комплектацию и технические характеристики техники Силант</h3>
            <form className="filter1">
                <input type="text" placeholder="Введите зав. № машины" ></input>
                <button>Поиск</button>
            </form>
            <div className="table1">
                <h3>Информация о комплектации и технических характеристиках вашей техники</h3>
                <Table striped bordered hover className={"table12"}>
                    <thead><tr><th>Заводской номер машины</th><th>Модель машины</th><th>Модель двигателя</th>
                        <th>Заводской номер двигателя</th><th>Модель трансмиссии</th><th>Заводской номер трансмиссии</th>
                        <th>Модель ведущего моста</th><th>Заводской номер ведущего моста</th>
                        <th>Модель управляемого моста</th><th>Заводской номер управляемого мост</th></tr></thead>
                    <tbody>
                    {machines && machines.map(machine => {return <MachineItem key={machine.id} {...machine}/>;})}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

