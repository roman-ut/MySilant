/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserCreate = {
    email?: string;
    /**
     * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
     */
    username: string;
    readonly id?: number;
    password: string;
};
