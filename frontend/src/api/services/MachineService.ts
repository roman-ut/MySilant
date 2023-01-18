/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Machine } from '../models/Machine';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MachineService {

    /**
     * @returns Machine 
     * @throws ApiError
     */
    public static machineList(): CancelablePromise<Array<Machine>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/machine/',
        });
    }

    /**
     * @param data 
     * @returns Machine 
     * @throws ApiError
     */
    public static machineCreate(
data: Machine,
): CancelablePromise<Machine> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/machine/',
            body: data,
        });
    }

}
