/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Activation } from '../models/Activation';
import type { PasswordResetConfirm } from '../models/PasswordResetConfirm';
import type { SendEmailReset } from '../models/SendEmailReset';
import type { SetPassword } from '../models/SetPassword';
import type { SetUsername } from '../models/SetUsername';
import type { TokenCreate } from '../models/TokenCreate';
import type { User } from '../models/User';
import type { UserCreate } from '../models/UserCreate';
import type { UsernameResetConfirm } from '../models/UsernameResetConfirm';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthService {

    /**
     * Use this endpoint to obtain user authentication token.
     * @param data 
     * @returns TokenCreate 
     * @throws ApiError
     */
    public static authTokenLoginCreate(
data: TokenCreate,
): CancelablePromise<TokenCreate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/token/login/',
            body: data,
        });
    }

    /**
     * Use this endpoint to logout user (remove user authentication token).
     * @returns any 
     * @throws ApiError
     */
    public static authTokenLogoutCreate(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/token/logout/',
        });
    }

    /**
     * @returns User 
     * @throws ApiError
     */
    public static authUsersList(): CancelablePromise<Array<User>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/users/',
        });
    }

    /**
     * @param data 
     * @returns UserCreate 
     * @throws ApiError
     */
    public static authUsersCreate(
data: UserCreate,
): CancelablePromise<UserCreate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/users/',
            body: data,
        });
    }

    /**
     * @param data 
     * @returns Activation 
     * @throws ApiError
     */
    public static authUsersActivation(
data: Activation,
): CancelablePromise<Activation> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/users/activation/',
            body: data,
        });
    }

    /**
     * @returns User 
     * @throws ApiError
     */
    public static authUsersMeRead(): CancelablePromise<Array<User>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/users/me/',
        });
    }

    /**
     * @param data 
     * @returns User 
     * @throws ApiError
     */
    public static authUsersMeUpdate(
data: User,
): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/auth/users/me/',
            body: data,
        });
    }

    /**
     * @param data 
     * @returns User 
     * @throws ApiError
     */
    public static authUsersMePartialUpdate(
data: User,
): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/auth/users/me/',
            body: data,
        });
    }

    /**
     * @returns void 
     * @throws ApiError
     */
    public static authUsersMeDelete(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/auth/users/me/',
        });
    }

    /**
     * @param data 
     * @returns SendEmailReset 
     * @throws ApiError
     */
    public static authUsersResendActivation(
data: SendEmailReset,
): CancelablePromise<SendEmailReset> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/users/resend_activation/',
            body: data,
        });
    }

    /**
     * @param data 
     * @returns SendEmailReset 
     * @throws ApiError
     */
    public static authUsersResetPassword(
data: SendEmailReset,
): CancelablePromise<SendEmailReset> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/users/reset_password/',
            body: data,
        });
    }

    /**
     * @param data 
     * @returns PasswordResetConfirm 
     * @throws ApiError
     */
    public static authUsersResetPasswordConfirm(
data: PasswordResetConfirm,
): CancelablePromise<PasswordResetConfirm> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/users/reset_password_confirm/',
            body: data,
        });
    }

    /**
     * @param data 
     * @returns SendEmailReset 
     * @throws ApiError
     */
    public static authUsersResetUsername(
data: SendEmailReset,
): CancelablePromise<SendEmailReset> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/users/reset_username/',
            body: data,
        });
    }

    /**
     * @param data 
     * @returns UsernameResetConfirm 
     * @throws ApiError
     */
    public static authUsersResetUsernameConfirm(
data: UsernameResetConfirm,
): CancelablePromise<UsernameResetConfirm> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/users/reset_username_confirm/',
            body: data,
        });
    }

    /**
     * @param data 
     * @returns SetPassword 
     * @throws ApiError
     */
    public static authUsersSetPassword(
data: SetPassword,
): CancelablePromise<SetPassword> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/users/set_password/',
            body: data,
        });
    }

    /**
     * @param data 
     * @returns SetUsername 
     * @throws ApiError
     */
    public static authUsersSetUsername(
data: SetUsername,
): CancelablePromise<SetUsername> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/users/set_username/',
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this user.
     * @returns User 
     * @throws ApiError
     */
    public static authUsersRead(
id: number,
): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/users/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param data 
     * @returns User 
     * @throws ApiError
     */
    public static authUsersUpdate(
id: number,
data: User,
): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/auth/users/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param data 
     * @returns User 
     * @throws ApiError
     */
    public static authUsersPartialUpdate(
id: number,
data: User,
): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/auth/users/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this user.
     * @returns void 
     * @throws ApiError
     */
    public static authUsersDelete(
id: number,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/auth/users/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
