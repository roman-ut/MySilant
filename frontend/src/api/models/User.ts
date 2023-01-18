/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type User = {
    email?: string;
    readonly id?: number;
    /**
     * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
     */
    readonly username?: string;
};
