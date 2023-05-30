import React, { useState, useEffect } from 'react'
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import axios from "axios";
import ViewTransformer from './ViewTransformer';
import AddTransformer from './AddTransformer';
import EditTransformer from './EditTransformer';


export default function TransformerTable() {
  const [transformers, setTransformers] = useState([]);
  const [reload, setReload] = useState(false);

  const token = localStorage.getItem("access_token");
  const accessToken = token !== null ? JSON.parse(token) : null;

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
          setTransformers(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (reload) {
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
            setTransformers(res.data);
            setReload(false);
          }
        })
        .catch((err) => {
          // console.log(err);
          setReload(false);
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload]);

  const cableStatus = (record: any) => {
    return (
      record?.status
        ? <>
          <div className='text-success'>
            Active
          </div>

        </>
        : <>
          <div className='text-danger'>
            InActive
          </div>
        </>
    )
  }

  const transformerActions = (record: any) => {
    return (
      <>
        <ViewTransformer transformer={record} />{" "}
        <EditTransformer setReload={setReload} record={record} />{" "}
        <button className="btn btn-dark" style={{color: "yellow"}} onClick={() => { }}>
          Tech Mobility
        </button>
      </>
    );
  };

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
            <div className='row gutters'>
              <div className='col-9'>
              </div>
              <div className='col-3'>
                <AddTransformer setReload={setReload} />
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
                <Column field="created" header="Added" />
                <Column field="location" header="Location" />
                <Column field="city" header="City" />
                <Column field="transformer_identity" header="Transformer Id" />
                <Column header="Status" body={cableStatus} />
                <Column header="View" body={transformerActions} />
              </DataTable>
            </div>
          </div>
        </div>
        {/* <WebsiteOverview data={data} /> */}
      </div>
    </>
  );
}