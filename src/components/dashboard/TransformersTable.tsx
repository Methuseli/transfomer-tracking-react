import React, {useState, useEffect} from 'react'
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import axios from "axios";
import ViewTransformer from './ViewTransformer';


export default function TransformerTable() {
  const [transformers, setSuggestions] = useState([]);

  const token = localStorage.getItem("access_token");
  const accessToken = token !== null ? JSON.parse(token) : null;

  const viewTransformer = (record: any) => {
    return (
      <>
        <ViewTransformer transformer={record} />
      </>
    );
  };

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_API_VERSION}transformers`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
            accept: "application/json",
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setSuggestions(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // let percentIncrease: number = ( data.new_  websites_this_month / data.total_number_of_websites_last_month ) * 100;
  // let test : number = 0;

  // const dateCreated = (record: any) => {
  //   const toBeFormatted = new Date(record?.created);
  //   return toBeFormatted.toLocaleDateString("en-ZA", {
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //   });
  // }

  return (
    <>
      <div className="row my-4">
        <div className="col-lg-12 col-md-6 mb-md-0 mb-4">
          <div className="card">
            <div className="card-header pb-0">
              <div className="row">
                <div className="col-lg-6 col-7">
                  <h6>Transformers</h6>
                </div>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <DataTable
                value={transformers}
                filterDisplay="row"
                className="text-danger"
                style={{ fontSize: "12px" }}
                responsiveLayout="scroll"
                dataKey="id"
                paginator
                size="small"
                rows={15}
              >
                <Column field="" />
                <Column field="created" header="Added"/>
                <Column field="location" header="Location" />
                <Column field="city" header="City" />
                <Column header="View" body={viewTransformer} />
              </DataTable>
            </div>
          </div>
        </div>
        {/* <WebsiteOverview data={data} /> */}
      </div>
    </>
  );
}