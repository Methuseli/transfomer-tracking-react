import React from "react";
import ActiveUsersLineGraph from "./ActiveUsersLineGraph";

export default function UserChart(){
    return(
        <>
            <div className="col-lg-7">
                <div className="card z-index-2">
                    <div className="card-header pb-0">
                        <h6>Users overview</h6>
                    </div>
                    <div className="card-body p-3">
                        <div className="chart">
                            <ActiveUsersLineGraph />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}