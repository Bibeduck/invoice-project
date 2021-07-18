import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Typography, Table } from "antd";

import { googlesheetConnect } from "../../api";
import { columns } from "./utils";


export default function Home() {
    const { Title } = Typography;
    const dispatch = useDispatch();
    const [data, setData] = useState(null);
    let doc = null;
    let sheet = null;

    const connect = async () => {
        await googlesheetConnect().then(value => {doc = value; sheet = value?.sheetsByIndex[1]});
    }
    
    const processData = async () => {
        await connect();
        doc?.loadInfo();
        await sheet?.getRows().then(value => convertData(value))
    }

    const convertData = (dataToConvert) => {
        let sheetData = [];
        dataToConvert && dataToConvert.map(item => { sheetData = [ ...sheetData, {
            amount: item.AMOUNT,
            co: item["C/O"],
            date: item.DATE,
            description: item.DESCRIPTION,
            from: item.FROM,
            id: item.ID,
            job_order: item["JOB ORDER"],
            particular: item.PARTICULAR,
            reference: item.REFERENCE,
            remarks: item.REMARKS,
            to: item.TO,
            trans_type: item["TRANS TYPE"]
        }]});

        setData(sheetData);
    }

    useEffect(() => {
        processData();
    }, [])
    
    useEffect(() => {
    }, [doc])

    return (
        <div>
            <Title level={2}>Transactions</Title>
            <Table dataSource={data ? data : []} columns={columns} rowKey={record => record.id}  />
        </div>
    )
}
