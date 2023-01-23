import React, {useEffect} from 'react';
import {ApiError, MachineService} from "../api";

function Test() {

    // useEffect(() => {
    //     MachineService.machineUpdate(
    //         1,
    //         {
    //             NumSupContract: "TEST",
    //             addressOperation: "TEST",
    //             consignee: "TEST",
    //             dateShipmentFactory: "2022-01-01",
    //             equipment: "TEST",
    //             modelda_title: "TEST",
    //             modele_title: "TEST",
    //             modelm_title: "TEST",
    //             modelsa_title: "TEST",
    //             modelt_title: "TEST",
    //             serNumDA: "TEST",
    //             serNumE: "TEST",
    //             serNumM: "TEST",
    //             serNumSA: "TEST",
    //             serNumT: "TEST",
    //             service_company: "TEST"
    //
    //
    //         }).catch((err:ApiError) => {
    //         console.log(JSON.stringify(err))
    //     })
    // }, []);
    return (
        <div>
            <p>test</p>
        </div>
    );
};

export default Test;