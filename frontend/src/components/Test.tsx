import React, {useEffect} from 'react';
import {ModelmachineService} from "../api";

function Test() {

    useEffect(() => {
            ModelmachineService.modelmachineCreate(
                {
                    "title": "ПД1,5",
                    "description": ''
                }
            );
    }, []);
    return (
        <div>
            <p>test</p>
        </div>
    );
};

export default Test;