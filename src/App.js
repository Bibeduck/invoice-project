import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { GoogleSpreadsheet } from "google-spreadsheet";
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
      console.log(sheet.title);

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    googlesheetConnect();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
