/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Maintenance = {
    readonly id?: number;
    readonly type_title?: string;
    date: string;
    operTime: number;
    workOrder: string;
    dateWorkOrder: string;
    readonly service_company?: string;
    readonly machine_title?: string;
    serviceCompany: number;
    machine?: number;
    type?: number | null;
};
