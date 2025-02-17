import axios from "axios";
import {USER_LOCALSTORAGE_KEY} from "@/shared/const/localStorage.ts";



export const $api = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY)
    }
})