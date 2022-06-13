import React from "react";
import SubscriberChart from "./UserChart";
import ActiveUsersChart from "./ActiveUsersChart";


export default function UserStatistics(){
    return(
        <>
            <div className="row mt-4">
              <div className="col-lg-5 mb-lg-0 mb-4">
                <div className="card z-index-2">
                  <div className="card-body p-3">
                    <div className="bg-gradient-dark border-radius-lg py-3 pe-1 mb-3">
                      <div className="chart">
                        <ActiveUsersChart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <SubscriberChart />
            </div>
        </>
    )
}