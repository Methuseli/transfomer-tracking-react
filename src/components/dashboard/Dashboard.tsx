import React, { useEffect, useState } from "react";
import StatisticsHeader from "./StatisticsHeader";
// import UserStatistics from "./UserStatistics";
// import Websites from "./Websites";
import axios from "axios";

axios.defaults.withCredentials = true;

export default function Dashboard(){
    const [data, setData] = useState<any>({
    });

    const token = localStorage.getItem('access_token');
    const accessToken = token !== null ? JSON.parse(token) : null;

    useEffect(() => {
      axios
        .get(
          `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_API_VERSION}dashboard`,
          {
            headers: {
              Authorization: `JWT ${accessToken}`,
              "Content-Type": "application/json",
              accept: "application/json",
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            setData(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <>
            <div className="container-fluid py-4">
                <StatisticsHeader data={data}/>
                {/* <UserStatistics /> */}
                {/* <Websites data={data}/> */}
            </div>
        </>
    )
}