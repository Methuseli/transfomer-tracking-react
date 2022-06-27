import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import axios from "axios";

axios.defaults.withCredentials = true;

export default function QuestionRatings(){
    const [basicData, setBasicData] = useState(
        {
        labels: ['10 Days ago', '', '', '', '', '', '', '', 'Yesterday', 'Today'],
        datasets: [
            {
                label: '',
                backgroundColor: '',
                data: [0],
                borderColor: '',
                tension: .4,
            },
            {
                label: '',
                backgroundColor: '',
                data: [0],
                borderColor: '',
                tension: .4,
            },
            {
                label: '',
                backgroundColor: '',
                data: [0],
                borderColor: '',
                tension: .4,
            },
            {
                label: '',
                backgroundColor: '',
                data: [0],
                borderColor: '',
                tension: .4,
            },
            {
                label: '',
                backgroundColor: '',
                data: [0],
                borderColor: '',
                tension: .4,
            },
            {
                label: '',
                backgroundColor: '',
                data: [0],
                borderColor: '',
                tension: .4,
            },
            {
                label: '',
                backgroundColor: '',
                data: [0],
                borderColor: '',
                tension: .4,
            },
            {
                label: '',
                backgroundColor: '',
                data: [0],
                borderColor: '',
                tension: .4,
            },
            {
                label: '',
                backgroundColor: '',
                data: [0],
                borderColor: '',
                tension: .4,
            },
            {
                label: '',
                backgroundColor: '',
                data: [0],
                borderColor: '',
                tension: .4,
            },
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
              'Authorization': `JWT ${accessToken}`,
              'Content-Type': 'application/json',
              'accept': 'application/json'
            }
          }
        )
        .then((res) => {
          if (res.status === 200) {
            let answer_ratings = res.data['answer_ratings'];
            try{
                setBasicData({
                    labels: ['10 Days ago', '', '', '', '', '', '', '', 'Yesterday', 'Today'],
                    datasets: [
                        {
                            label: 'Question 1',
                            backgroundColor: '#00E006',
                            data: [
                                answer_ratings[9]['1'],
                                answer_ratings[8]['1'],
                                answer_ratings[7]['1'],
                                answer_ratings[6]['1'],
                                answer_ratings[5]['1'],
                                answer_ratings[4]['1'],
                                answer_ratings[3]['1'],
                                answer_ratings[2]['1'],
                                answer_ratings[1]['1'],
                                answer_ratings[0]['1'],
                            ],
                            borderColor: '#00E006',
                            tension: .4
                        },
                        {
                            label: 'Question 2',
                            backgroundColor: '#5F00A0',
                            data: [
                                answer_ratings[9]['2'],
                                answer_ratings[8]['2'],
                                answer_ratings[7]['2'],
                                answer_ratings[6]['2'],
                                answer_ratings[5]['2'],
                                answer_ratings[4]['2'],
                                answer_ratings[3]['2'],
                                answer_ratings[2]['2'],
                                answer_ratings[1]['2'],
                                answer_ratings[0]['2'],
                            ],
                            borderColor: '#5F00A0',
                            tension: .4
                        },
                        {
                            label: 'Question 3',
                            backgroundColor: '#468200',
                            data: [
                                answer_ratings[9]['3'],
                                answer_ratings[8]['3'],
                                answer_ratings[7]['3'],
                                answer_ratings[6]['3'],
                                answer_ratings[5]['3'],
                                answer_ratings[4]['3'],
                                answer_ratings[3]['3'],
                                answer_ratings[2]['3'],
                                answer_ratings[1]['3'],
                                answer_ratings[0]['3'],
                            ],
                            borderColor: '#468200',
                            tension: .4
                        },
                        {
                            label: 'Question 4',
                            backgroundColor: '#640000',
                            data: [
                                answer_ratings[9]['4'],
                                answer_ratings[8]['4'],
                                answer_ratings[7]['4'],
                                answer_ratings[6]['4'],
                                answer_ratings[5]['4'],
                                answer_ratings[4]['4'],
                                answer_ratings[3]['4'],
                                answer_ratings[2]['4'],
                                answer_ratings[1]['4'],
                                answer_ratings[0]['4'],
                            ],
                            borderColor: '#640000',
                            tension: .4
                        },
                        {
                            label: 'Question 5',
                            backgroundColor: '#0000FF',
                            data: [
                                answer_ratings[9]['5'],
                                answer_ratings[8]['5'],
                                answer_ratings[7]['5'],
                                answer_ratings[6]['5'],
                                answer_ratings[5]['5'],
                                answer_ratings[4]['5'],
                                answer_ratings[3]['5'],
                                answer_ratings[2]['5'],
                                answer_ratings[1]['5'],
                                answer_ratings[0]['5'],
                            ],
                            borderColor: '#0000FF',
                            tension: .4
                        },
                        {
                            label: 'Question 6',
                            backgroundColor: '#000000',
                            data: [
                                answer_ratings[9]['6'],
                                answer_ratings[8]['6'],
                                answer_ratings[7]['6'],
                                answer_ratings[6]['6'],
                                answer_ratings[5]['6'],
                                answer_ratings[4]['6'],
                                answer_ratings[3]['6'],
                                answer_ratings[2]['6'],
                                answer_ratings[1]['6'],
                                answer_ratings[0]['6'],
                            ],
                            borderColor: '#000000',
                            tension: .4
                        },
                        {
                            label: 'Question 7',
                            backgroundColor: '#FF0033',
                            data: [
                                answer_ratings[9]['7'],
                                answer_ratings[8]['7'],
                                answer_ratings[7]['7'],
                                answer_ratings[6]['7'],
                                answer_ratings[5]['7'],
                                answer_ratings[4]['7'],
                                answer_ratings[3]['7'],
                                answer_ratings[2]['7'],
                                answer_ratings[1]['7'],
                                answer_ratings[0]['7'],
                            ],
                            borderColor: '#FF0033',
                            tension: .4
                        },
                        {
                            label: 'Question 8',
                            backgroundColor: '#00F8A0',
                            data: [
                                answer_ratings[9]['8'],
                                answer_ratings[8]['8'],
                                answer_ratings[7]['8'],
                                answer_ratings[6]['8'],
                                answer_ratings[5]['8'],
                                answer_ratings[4]['8'],
                                answer_ratings[3]['8'],
                                answer_ratings[2]['8'],
                                answer_ratings[1]['8'],
                                answer_ratings[0]['8'],
                            ],
                            borderColor: '#00F8A0',
                            tension: .4
                        },
                        {
                            label: 'Question 9',
                            backgroundColor: '#191970',
                            data: [
                                answer_ratings[9]['9'],
                                answer_ratings[8]['9'],
                                answer_ratings[7]['9'],
                                answer_ratings[6]['9'],
                                answer_ratings[5]['9'],
                                answer_ratings[4]['9'],
                                answer_ratings[3]['9'],
                                answer_ratings[2]['9'],
                                answer_ratings[1]['9'],
                                answer_ratings[0]['9'],
                            ],
                            borderColor: '#191970',
                            tension: .4
                        },
                        {
                            label: 'Question 10',
                            backgroundColor: '#8E8E8E',
                            data: [
                                answer_ratings[9]['10'],
                                answer_ratings[8]['10'],
                                answer_ratings[7]['10'],
                                answer_ratings[6]['10'],
                                answer_ratings[5]['10'],
                                answer_ratings[4]['10'],
                                answer_ratings[3]['10'],
                                answer_ratings[2]['10'],
                                answer_ratings[1]['10'],
                                answer_ratings[0]['10'],
                            ],
                            borderColor: '#8E8E8E',
                            tension: .4
                        }
                    ]
                });
            } catch (err){
                
            }
          }
        })
        .catch((err) => {
          console.log(err)
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
