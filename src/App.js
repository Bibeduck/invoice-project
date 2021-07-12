import { useEffect } from "react";
import logo from "./logo.svg";
import { BrowserRouter } from 'react-router-dom';
import { GoogleSpreadsheet } from "google-spreadsheet";
import { Button } from 'antd';

import { routes } from './routes';
import Layout from './containers/Layout/Layout';
// import keys from "../keys.json";

const REACT_APP_SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
const REACT_APP_CLIENT_EMAIL = process.env.REACT_APP_CLIENT_EMAIL;
const REACT_APP_PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;

function App() {

  const doc = new GoogleSpreadsheet(REACT_APP_SPREADSHEET_ID);

  const googlesheetConnect = async () => {
    try {
      await doc.useServiceAccountAuth({
        client_email: REACT_APP_CLIENT_EMAIL,
        private_key: REACT_APP_PRIVATE_KEY,
      });

      await doc.loadInfo();

      const sheet = doc.sheetsByIndex[1];
      sheet.getRows({limit: 3}).then(data => console.log(data));
      console.log(sheet.title);

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    googlesheetConnect();
  }, [])

  return (
    <BrowserRouter>
      {routes(localStorage.getItem('isLogin'))}
    </BrowserRouter>
  );
}

export default App;
