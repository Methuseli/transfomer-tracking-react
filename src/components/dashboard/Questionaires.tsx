import React, { useEffect, useState } from "react";
import { Chart } from "primereact/chart";
import axios from "axios";

axios.defaults.withCredentials = true;

export default function Questionaires(){
    const [basicData, setBasicData] = useState({
        labels: ['10 Days ago', '', '', '', '', '', '', '', 'Yesterday', 'Today'],
        datasets: [
            {
                label: '',
                backgroundColor: '',
                data: [0],
            }
        ]
    });

    const token = localStorage.getItem('access_token');
    const accessToken = token !== null ? JSON.parse(token) : null;

    useEffect(() => {
        axios
        .get(
          `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_API_VERSION}graph-statistics`,
          {
            headers: {
              'Authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
              'accept': 'application/json'
            } 
          }
        )
        .then((res) => {
          if (res.status === 200) {
            setBasicData({
                labels: ['10 Days ago', '', '', '', '', '', '', '', 'Yesterday', 'Today'],
                datasets: [
                    {
                        label: 'Number of Questionaires',
                        backgroundColor: '#ffffff',
                        data: [
                            res.data['10'],
                            res.data['09'],
                            res.data['08'],
                            res.data['07'],
                            res.data['06'],
                            res.data['05'],
                            res.data['04'],
                            res.data['03'],
                            res.data['yesterday'],
                            res.data['today']
                        ]
                    }
                ]
            });
          }
        })
        .catch((err) => {
          console.log(err)
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getLightTheme = () => {
        return {
            maintainAspectRatio: false,
            aspectRatio: .8,
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#ffffff'
                    },
                    grid: {
                        color: '#ffffff'
                    }
                },
                y: {
                    ticks: {
                        color: '#ffffff'
                    },
                    grid: {
                        color: '#ffffff'
                    }
                }
            }
        };
    };

    const basicOptions = getLightTheme();

    return(
        <>
            <Chart type="bar" data={basicData} options={basicOptions} />
        </>
    )
}
