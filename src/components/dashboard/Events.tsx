import React, { useState, useEffect } from "react";
import axios from "axios";


export default function Events() {
    const [cableEvents, setCableEvents] = useState<any>([]);
    const [manholeEvents, setManholeEvents] = useState<any>([]);
    const [transformerEvents, setTransformerEvents] = useState<any>([]);
    const baseUrl = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_API_VERSION}`
    const token = localStorage.getItem("access_token");
    const accessToken = token !== null ? JSON.parse(token) : null;

    useEffect(() => {
        axios
            .get(`${baseUrl}cable-events/`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-Type": "application/json",
                        accept: "application/json",
                    },
                })
            .then((res) => {
                setCableEvents(res.data);
            });
        axios
            .get(`${baseUrl}manhole-events/`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-Type": "application/json",
                        accept: "application/json",
                    },
                })
            .then((res) => {
                setManholeEvents(res.data);
            });
        axios
            .get(`${baseUrl}transformer-events/`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-Type": "application/json",
                        accept: "application/json",
                    },
                })
            .then((res) => {
                setTransformerEvents(res.data);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const dateCreated = (record: any) => {
        if (record.created) {
            const date = new Date(record.created);
            return date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: false,
            });
        }
    }

    const listGroup = (events: any) => {
        return (
            <>
                <ul className="list-group">
                    {events?.map((event: any) => <li>
                        {event?.event_type.replace("_", " ")} @ {event?.cable_id !== undefined ? event?.cable_id : event?.manhole_id !== undefined ? event?.manhole_id : event?.transformer_id !== undefined ? event?.transformer_id : ""} on {dateCreated(event)}
                    </li>)
                    }
                </ul>

            </>
        )
    }

    return (
        <div className="row mt-4">
            <div className="col-4 mb-lg-0 mb-4">
                <div className="card h-100 p-3">
                    <div className="card-header">Cables</div>
                    <div className="card-body">
                        {listGroup(cableEvents)}
                    </div>
                </div>
            </div>
            <div className="col-4 mb-lg-0 mb-4">
                <div className="card h-100 p-3">
                    <div className="card-header">Transformers</div>
                    <div className="card-body">
                        {listGroup(transformerEvents)}
                    </div>
                </div>
            </div>
            <div className="col-4 mb-lg-0 mb-4">
                <div className="card h-100 p-3">
                    <div className="card-header">Manholes</div>
                    <div className="card-body">
                        {listGroup(manholeEvents)}
                    </div>
                </div>
            </div>
        </div>
    )
}