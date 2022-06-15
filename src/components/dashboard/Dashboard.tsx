import React, { useEffect, useState } from "react";
import StatisticsHeader from "./StatisticsHeader";
import UserStatistics from "./UserStatistics";
import Websites from "./Websites";
import axios from "axios";

axios.defaults.withCredentials = true;

export default function Dashboard(){
    const [data, setData] = useState({
        // websites: ['no websites yet'],
        company: '',
        total_number_of_websites: 0,
        number_of_active_users: 0,
        total_number_of_companies: 0,
        total_number_of_users: 0,
        new_websites_this_month: 0,
        total_number_of_websites_last_month: 0,
        my_websites: 0,
        total_surveys: 0,
        surveys_today: 0,
    });

    useEffect(() => {
      axios
        .get(
          `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_API_VERSION}dashboard`,
          { 
            headers: {
              'Authorization': `${localStorage.getItem('access_token')}`,
              'Content-Type': 'application/json',
              'accept': 'application/json'
            } 
          }
        )
        .then((res) => {
          if (res.status === 200) {
            setData(res.data);
          }
        })
        .catch((err) => {
          console.log(err)
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <>
            <div className="container-fluid py-4">
                <StatisticsHeader data={data}/>
                <UserStatistics />
                <Websites data={data}/>
            </div>
        </>
    )
}