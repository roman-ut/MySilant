/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserSilant = {
    readonly id?: number;
    silUser?: number;
    readonly user_name?: string;
    categoryType: UserSilant.categoryType;
};

export namespace UserSilant {

    export enum categoryType {
        MG = 'MG',
        CL = 'CL',
        SK = 'SK',
    }


}
