import {Currency} from "@/entities/Currency/types/currency.ts";
import {Country} from "@/entities/Country/types/country.ts";


export enum ValidateProfileError{
    INCORRECT_USER_DATA = "INCORRECT_USER_DATA",
    INCORRECT_AGE = "INCORRECT_AGE",
    INCORRECT_COUNTY = "INCORRECT_COUNTY",
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR'
}

export interface Profile {
        id?: string
        first?: string,
        lastname?: string,
        age?: number,
        currency?: Currency,
        country?: Country,
        city?: string,
        username?: string,
        avatar?: string

}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly: boolean;
    validateError?: ValidateProfileError[];
}