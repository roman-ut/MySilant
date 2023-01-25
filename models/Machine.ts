/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Machine = {
    readonly id?: number;
    serNumM: string;
    modelM?: number | null;
    readonly modelm_title?: string;
    modelE?: number | null;
    readonly modele_title?: string;
    serNumE: string;
    modelT?: number | null;
    readonly modelt_title?: string;
    serNumT: string;
    modelDA?: number | null;
    readonly modelda_title?: string;
    serNumDA: string;
    modelSA?: number | null;
    readonly modelsa_title?: string;
    serNumSA: string;
    NumSupContract: string;
    dateShipmentFactory: string;
    consignee: string;
    addressOperation: string;
    equipment: string;
    readonly user?: string;
    userClient: number;
    readonly service_company?: string;
    userService: number;
};
