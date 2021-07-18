import axios from "axios";
import { GoogleSpreadsheet } from "google-spreadsheet";

const REACT_APP_SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
const REACT_APP_CLIENT_EMAIL = process.env.REACT_APP_CLIENT_EMAIL;
const REACT_APP_PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem("profile")).token
        }`;
    }

    return req;
});

export const googlesheetConnect = async () => {
    const doc = new GoogleSpreadsheet(REACT_APP_SPREADSHEET_ID);

    await doc.useServiceAccountAuth({
        client_email: REACT_APP_CLIENT_EMAIL,
        private_key: REACT_APP_PRIVATE_KEY,
    });
    await doc.loadInfo();

    return doc;
}
