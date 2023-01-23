import React, {useEffect, useState} from "react";
import {
    ApiError,
    Machine,
    MachineService,
    ModelDriveAxle,
    ModeldriveaxleService,
    ModelEngine,
    ModelengineService,
    ModelMachine,
    ModelmachineService,
    ModelSteeringAxle,
    ModelsteeringaxleService,
    ModelTransmission,
    ModeltransmissionService,
    ServiceCompany,
    ServicecompanyService,
    UserSilant, UsgroupService
} from "../api";
import Table from "react-bootstrap/Table";
import "../styles/MachineListPrivate.css";
import Form from 'react-bootstrap/Form';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";


function MachineItem(props:Machine) {

    return (
        <tr className={"machine"}>
            <td>{props.id}</td>
            <td>{props.modelm_title}</td>
            <td><Link to="/machineitem" state={{MachineItem:props,  modM:props, modE:props, modT:props,
                modD:props, modS:props}}>
                    {props.serNumM}
                </Link>
            </td>
            <td>{props.modele_title}</td>
            <td>{props.serNumE}</td>
            <td>{props.modelt_title}</td>
            <td>{props.serNumT}</td>
            <td>{props.modelda_title}</td>
            <td>{props.serNumDA}</td>
            <td>{props.modelsa_title}</td>
            <td>{props.serNumSA}</td>
            <td>{props.dateShipmentFactory}</td>
        </tr>
    );
}

function ItemRefBook(props:any) {

    return (
        <option>{props.title}</option>
    );
}

export default function MachineListPrivate({isLoggedIn}: any) {
    const [machines, setMachines] = useState<Machine[]>();
    // if (isLoggedIn === 'true') {}
    const loadMachine  = async () => {
        setMachines(await MachineService.machineList())

    };
    //Первоначальная загрузка информации
    // if (isLoggedIn === 'true')
    useEffect(() => {
        loadMachine().catch((err:ApiError) => {
            console.log(JSON.stringify(err))
        });
        loadModM();
        loadModE();
        loadModT();
        loadModD();
        loadModS();
    }, [])

    //Загрузка справочников
    const [modM, setModM] = useState<ModelMachine[]>();
    const [modE, setModE] = useState<ModelEngine[]>();
    const [modT, setModT] = useState<ModelTransmission[]>();
    const [modD, setModD] = useState<ModelDriveAxle[]>();
    const [modS, setModS] = useState<ModelSteeringAxle[]>();
    const loadModM  = async () => {
        setModM(await ModelmachineService.modelmachineList())

    };
    const loadModE  = async () => {
        setModE(await ModelengineService.modelengineList())

    };
    const loadModT  = async () => {
        setModT(await ModeltransmissionService.modeltransmissionList())

    };
    const loadModD  = async () => {
        setModD(await ModeldriveaxleService.modeldriveaxleList())

    };
    const loadModS  = async () => {
        setModS(await ModelsteeringaxleService.modelsteeringaxleList())

    };

    //Загрузка по фильтру
    const [serNum, setSerNum] = useState('');
    const [modM_i, setModM_i] = useState<any>();
    const [modE_i, setModE_i] = useState<any>();
    const [modT_i, setModT_i] = useState<any>();
    const [modD_i, setModD_i] = useState<any>();
    const [modS_i, setModS_i] = useState<any>();

    async function loadMachineFilter() {
        setMachines(await MachineService.machineList(serNum, modM_i, modE_i, modT_i, modD_i, modS_i));
    }

    const [show, setShow] = useState(false);
    const [serCom, setSerCom] = useState<ServiceCompany[]>();
    const [usr, setUsr] = useState<UserSilant[]>();
    const [imodM, setIModM] = useState<any>();
    const [imodE, setIModE] = useState<any>();
    const [imodT, setIModT] = useState<any>();
    const [imodD, setIModD] = useState<any>();
    const [imodS, setIModS] = useState<any>();
    const [serNumM, setSerNumM] = useState('');
    const [serNumE, setSerNumE] = useState('');
    const [serNumT, setSerNumT] = useState('');
    const [serNumD, setSerNumD] = useState('');
    const [serNumS, setSerNumS] = useState('');
    const [contract, setContract] = useState('');
    const [dateShF, setDateShF] = useState('');
    const [consignee, setConsignee] = useState('');
    const [address, setAddress] = useState('');
    const [equipment, setEquipment] = useState('');
    const [iSerCom, setISerCom] = useState<any>();
    const [iUsr, setIUsr] = useState<any>();

    const loadSerCom  = async () => {
        setSerCom(await ServicecompanyService.servicecompanyList());

    };
    const loadUsr  = async () => {
        setUsr(await UsgroupService.usgroupList());

    };
    useEffect(() => {
        loadSerCom();
        loadUsr();
    }, []);

    function save() {
        MachineService.machineCreate(
            {
                NumSupContract: contract,
                addressOperation: address,
                consignee: consignee,
                dateShipmentFactory: dateShF,
                equipment: equipment,
                modelDA: imodD,
                modelE: imodE,
                modelM: imodM,
                modelSA: imodS,
                modelT: imodT,
                serNumDA: serNumD,
                serNumE: serNumE,
                serNumM: serNumM,
                serNumSA: serNumS,
                serNumT: serNumT,
                userClient: iUsr,
                userService: iSerCom,
            }
        ).then(() => {
            setShow(false);
        })
    }

    function handleSave () {
        save()
        console.log(modM);
        console.log(modE);
        console.log(modT);
        console.log(modD);
        console.log(modS);
        console.log(imodM);
        console.log(imodE.id);
        console.log(imodT);
        console.log(imodD);
        console.log(imodS);
    }

    return (
        <div>
            { isLoggedIn === 'true' &&
            <>
                <h3>Информация о комплектации и технических характеристиках Вашей техники Силант</h3>
                <div id='but-muchitem1'>
                    <Button variant="outline-secondary" onClick={() => setShow(true)}>
                        Добавить машину
                    </Button>
                </div>
                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                    fullscreen={true}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Редактирование информации о комплектации и технических характеристиках
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="table1">
                            <h5>Технические характеристики</h5>
                            <Table striped bordered hover className={"table12"} size="sm">
                                <thead>
                                <tr>
                                    <th>Зав. № машины</th>
                                    <th>Модель машины</th>
                                    <th>Модель двигателя</th>
                                    <th>Зав. № двигателя</th>
                                    <th>Модель трансмиссии</th>
                                    <th>Зав. № трансмиссии</th>
                                </tr>
                                </thead>
                                <tbody><tr>
                                    <td>
                                        <Form.Control size="sm" type="text" value={serNumM}
                                                      onChange={e => setSerNumM(e.target.value)}/>
                                    </td>
                                    <td>
                                        <Form.Select aria-label="" size="sm"
                                                     onChange={(e) => {
                                                         if (modM) {
                                                             setIModM(modM[e.target.selectedIndex].id);
                                                         }
                                                     }}>
                                            <option value="" disabled>
                                                Выберите...
                                            </option>
                                            {modM && modM.map((i) => {
                                                return <option key={i.id}>{i.title}</option>;
                                            })});
                                        </Form.Select>
                                    </td>
                                    <td>
                                        <Form.Select aria-label="" size="sm"
                                                     onChange={(e) => {
                                                         if (modE) {
                                                             setIModE(modE[e.target.selectedIndex]);
                                                         }
                                                     }}>
                                            <option value="" disabled>
                                                Выберите...
                                            </option>
                                            {modE && modE.map((i) => {
                                                return <option key={i.id}>{i.title}</option>;
                                            })});
                                        </Form.Select>
                                    </td>
                                    <td>
                                        <Form.Control size="sm" type="text" value={serNumE}
                                                      onChange={e => setSerNumE(e.target.value)}/>
                                    </td>
                                    <td>
                                        <Form.Select aria-label="" size="sm"
                                                     onChange={(e) => {
                                                         if (modT) {
                                                             setIModT(modT[e.target.selectedIndex]);
                                                         }
                                                     }}>
                                            <option value="" disabled>
                                                Выберите...
                                            </option>
                                            {modT && modT.map((i) => {
                                                return <option key={i.id}>{i.title}</option>;
                                            })});
                                        </Form.Select>
                                    </td>
                                    <td>
                                        <Form.Control size="sm" type="text" value={serNumT}
                                                      onChange={e => setSerNumT(e.target.value)}/>
                                    </td>
                                </tr></tbody>
                            </Table>
                            <Table striped bordered hover className={"table12"} size="sm">
                                <thead>
                                <tr>
                                    <th>Модель ведущего моста</th>
                                    <th>Зав. № ведущего моста</th>
                                    <th>Модель управляемого моста</th>
                                    <th>Зав. № управляемого моста</th>
                                    <th>Договор поставки №, дата</th>
                                    <th>Дата отгрузки с завода</th>
                                </tr>
                                </thead>
                                <tbody><tr>
                                    <td>
                                        <Form.Select aria-label="" size="sm"
                                                     onChange={(e) => {
                                                         if (modD) {
                                                             setIModD(modD[e.target.selectedIndex].id);
                                                         }
                                                     }}>
                                            <option value="" disabled>
                                                Выберите...
                                            </option>
                                            {modD && modD.map((i) => {
                                                return <option key={i.id}>{i.title}</option>;
                                            })});
                                        </Form.Select>
                                    </td>
                                    <td>
                                        <Form.Control size="sm" type="text" value={serNumD}
                                                      onChange={e => setSerNumD(e.target.value)}/>
                                    </td>
                                    <td>
                                        <Form.Select aria-label="" size="sm"
                                                     onChange={(e) => {
                                                         if (modS) {
                                                             setIModS(modS[e.target.selectedIndex].id);
                                                         }
                                                     }}>
                                            <option value="" disabled>
                                                Выберите...
                                            </option>
                                            {modS && modS.map((i) => {
                                                return <option key={i.id}>{i.title}</option>;
                                            })});
                                        </Form.Select>
                                    </td>
                                    <td>
                                        <Form.Control size="sm" type="text" value={serNumS}
                                                      onChange={e => setSerNumS(e.target.value)}/>
                                    </td>
                                    <td>
                                        <Form.Control size="sm" type="text" value={contract}
                                                      onChange={e => setContract(e.target.value)}/>
                                    </td>
                                    <td>
                                        <Form.Control size="sm" type="date" value={dateShF}
                                                      onChange={e => setDateShF(e.target.value)}/>
                                    </td>
                                </tr></tbody>
                            </Table>
                            <h5>Комплектация и иные сведения</h5>
                            <Table striped bordered hover className={"table12"} size="sm">
                                <thead>
                                <tr>
                                    <th>Грузополучатель (конечный потребитель)</th>
                                    <th>Адрес поставки (эксплуатации)</th>
                                    <th>Комплектация (доп. опции)</th>
                                    <th>Сервисная компания</th>
                                    <th>Клиент</th>
                                </tr>
                                </thead>
                                <tbody><tr>
                                    <td>
                                        <Form.Control size="sm" type="text" value={consignee}
                                                      onChange={e => setConsignee(e.target.value)}/>
                                    </td>
                                    <td>
                                        <Form.Control size="sm" type="text" value={address}
                                                      onChange={e => setAddress(e.target.value)}/>
                                    </td>
                                    <td>
                                        <Form.Control size="sm" type="text" value={equipment}
                                                      onChange={e => setEquipment(e.target.value)}/>
                                    </td>
                                    <td>
                                        <Form.Select aria-label="" size="sm" defaultValue=""
                                                     onChange={(e) => {
                                                         if (serCom) {
                                                             setISerCom(serCom[e.target.selectedIndex].id);
                                                         }
                                                     }}>
                                            <option value="" disabled>
                                                Выберите...
                                            </option>
                                            {serCom && serCom.map((i) => {
                                                return <option key={i.id}>
                                                    {i.title}
                                                </option>;
                                            })});
                                        </Form.Select>
                                    </td>
                                    <td>
                                        <Form.Select aria-label='' size="sm" defaultValue=""
                                                     onChange={(e) => {
                                                         if (usr) {
                                                             setIUsr(usr[e.target.selectedIndex].id);
                                                         }
                                                     }}>
                                            <option value="" disabled>
                                                Выберите...
                                            </option>
                                            {usr && usr.map((i) => {
                                                return <option key={i.id}>
                                                    {i.user_name}
                                                </option>;
                                            })});
                                        </Form.Select>
                                    </td>
                                </tr></tbody>
                            </Table>
                        </div>
                        <div id='button'>
                            <Button variant="outline-secondary" onClick={handleSave}>
                                Сохранить
                            </Button>
                            <Button variant="outline-secondary" onClick={() => setShow(false)}>
                                Отменить
                            </Button>
                        </div>
                    </Modal.Body>
                </Modal>
                <div className="table2">
                    <Table striped bordered hover className={"table22"} size="sm">
                        <thead>
                        <tr>
                            <th>№ п/п</th>
                            <th>Модель машины</th>
                            <th>Зав. № машины</th>
                            <th>Модель двигателя</th>
                            <th>Зав. № двигателя</th>
                            <th>Модель трансмиссии</th>
                            <th>Зав. № трансмиссии</th>
                            <th>Модель ведущего моста</th>
                            <th>Зав. № ведущего моста</th>
                            <th>Модель управляемого моста</th>
                            <th>Зав. № управляемого моста</th>
                            <th>Дата отгрузки с завода</th>
                        </tr>
                        </thead>
                        <thead>
                        <tr>
                            <th></th>
                            <th>
                                <Form.Select aria-label="" size="sm" defaultValue=""
                                             onKeyDown={event => event.key === "Enter" &&
                                                 loadMachineFilter()}
                                             onChange={e => setModM_i(e.target.value)}>
                                    <option value="" disabled>
                                        Выберите...
                                    </option>
                                    {modM && modM.map(i =>
                                    {return <ItemRefBook key={i.id} {...i}/>;})}
                                </Form.Select>
                            </th>
                            <th>
                                <Form.Control size="sm" type="text" placeholder="Введите номер" value={serNum}
                                              onKeyDown={event => event.key === "Enter" &&
                                                  loadMachineFilter()}
                                              onChange={e => setSerNum(e.target.value)}/>
                            </th>
                            <th>
                                <Form.Select aria-label="" size="sm" defaultValue=""
                                             onKeyDown={event => event.key === "Enter" &&
                                                 loadMachineFilter()}
                                             onChange={e => setModE_i(e.target.value)}>
                                    <option value="" disabled>
                                        Выберите...
                                    </option>
                                    {modE && modE.map(i =>
                                    {return <ItemRefBook key={i.id} {...i}/>;})}
                                </Form.Select>
                            </th>
                            <th></th>
                            <th>
                                <Form.Select aria-label="" size="sm" defaultValue=""
                                             onKeyDown={event => event.key === "Enter" &&
                                                 loadMachineFilter()}
                                             onChange={e => setModT_i(e.target.value)}>
                                    <option value="" disabled>
                                        Выберите...
                                    </option>
                                    {modT && modT.map(i =>
                                    {return <ItemRefBook key={i.id} {...i}/>;})}
                                </Form.Select>
                            </th>
                            <th></th>
                            <th>
                                <Form.Select aria-label="" size="sm" defaultValue=""
                                             onKeyDown={event => event.key === "Enter" &&
                                                 loadMachineFilter()}
                                             onChange={e => setModD_i(e.target.value)}>
                                    <option value="" disabled>
                                        Выберите...
                                    </option>
                                    {modD && modD.map(i =>
                                    {return <ItemRefBook key={i.id} {...i}/>;})}
                                </Form.Select>
                            </th>
                            <th></th>
                            <th>
                                <Form.Select aria-label="" size="sm" defaultValue=""
                                             onKeyDown={event => event.key === "Enter" &&
                                                 loadMachineFilter()}
                                             onChange={e => setModS_i(e.target.value)}>
                                    <option value="" disabled>
                                        Выберите...
                                    </option>
                                    {modS && modS.map(i =>
                                    {return <ItemRefBook key={i.id} {...i}/>;})}
                                </Form.Select>
                            </th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {machines && machines.map(machine =>
                        {return <MachineItem key={machine.id} {...machine}/>;})}
                        </tbody>
                    </Table>
                </div>
             </>
            }
            { isLoggedIn !== 'true' &&
                <h1>Вы не авторизированы!</h1>
            }
        </div>
    );
}
