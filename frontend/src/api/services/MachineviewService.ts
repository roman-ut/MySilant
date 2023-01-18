/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MachineView } from '../models/MachineView';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MachineviewService {

    /**
     * @returns MachineView 
     * @throws ApiError
     */
    public static machineviewList(): CancelablePromise<Array<MachineView>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/machineview/',
        });
    }

}
