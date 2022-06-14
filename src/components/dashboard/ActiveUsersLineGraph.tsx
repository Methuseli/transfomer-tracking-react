import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import axios from "axios";

axios.defaults.withCredentials = true;

export default function ActiveUsersLineGraph(){
    const [basicData, setBasicData] = useState({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: '',
                backgroundColor: '',
                data: [0]
            }
        ]
    });

    useEffect(() => {
        axios
        .get(
          `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_API_VERSION}graph-statistics`,
          { withCredentials: true }
        )
        .then((res) => {
          if (res.status === 200) {
            setBasicData({
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [
                    {
                        label: 'My First dataset',
                        backgroundColor: '#42A5F5',
                        data: [
                            res.data['January'],
                            res.data['February'],
                            res.data['March'],
                            res.data['April'],
                            res.data['May'],
                            res.data['June'],
                            res.data['July'],
                            res.data['August'],
                            res.data['September'],
                            res.data['October'],
                            res.data['November'],
                            res.data['December'],
                        ]
                    }
                ]
            });
          }
        })
        .catch((err) => {
          console.log(err)
        });
    }, [])

    const getLightTheme = () => {
        return {
            maintainAspectRatio: false,
            aspectRatio: .6,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
            }
        };

    };

    const basicOptions = getLightTheme();

    return(
        <>
            <Chart type="line" data={basicData} options={basicOptions} />
        </>
    )
}
