import React from "react";
import ActiveUsersLineGraph from "./ActiveUsersLineGraph";

export default function UserChart(){
    return(
        <>
            <div className="col-lg-7">
                <div className="card z-index-2">
                    <div className="card-header pb-0">
                        <h6>Trades overview</h6>
                        <p className="text-sm">
                            <i className="fa fa-arrow-up text-success"></i>
                            <span className="font-weight-bold">4% more</span> in 2021
                        </p>
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