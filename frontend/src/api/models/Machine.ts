/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Machine = {
    readonly id?: number;
    serNumM: string;
    serNumE: string;
    serNumT: string;
    serNumDA: string;
    serNumSA: string;
    NumSupContract: string;
    dateShipmentFactory: string;
    consignee: string;
    addressOperation: string;
    equipment: string;
    modelM?: number | null;
    modelE?: number | null;
    modelT?: number | null;
    modelDA?: number | null;
    modelSA?: number | null;
    userClient: number;
    userService: number;
};
