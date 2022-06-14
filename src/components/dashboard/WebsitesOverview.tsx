import React from "react";
import 'primeicons/primeicons.css';

interface DataProps{
    data : {
        websites: any;
        company: string;
        total_number_of_websites: number;
        number_of_active_users: number;
        total_number_of_companies: number;
        total_number_of_users: number;
    };
}

export default function WebsitesOverview({data}: DataProps){
    return(
        <>
            <div className="col-lg-4 col-md-6">
                <div className="card h-100">
                    <div className="card-header pb-0">
                    <h6>Websites overview</h6>
                    <p className="text-sm">
                        Active Users 
                        <span className="font-weight-bold"> {data?.number_of_active_users}</span> this month
                    </p>
                    </div>
                    <div className="card-body p-3">
                        <div className="timeline timeline-one-side">
                            <div className="timeline-block mb-3">
                                <span className="timeline-step">
                                    <i className="pi pi-globe text-success text-gradient"></i>
                                </span>
                                <div className="timeline-content">
                                    <h6 className="text-dark text-sm font-weight-bold mb-0">My latest Website</h6>
                                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">{data?.websites[0]}</p>
                                </div>
                            </div>
                            <div className="timeline-block mb-3">
                                <span className="timeline-step">
                                    <i className="pi pi-star-fill text-success text-gradient"></i>
                                </span>
                                <div className="timeline-content">
                                    <h6 className="text-dark text-sm font-weight-bold mb-0">My Company</h6>
                                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">{data?.company}</p>
                                </div>
                            </div>
                            <div className="timeline-block mb-3">
                                <span className="timeline-step">
                                    <i className="pi pi-star text-info text-gradient"></i>
                                </span>
                                <div className="timeline-content">
                                    <h6 className="text-dark text-sm font-weight-bold mb-0">Total Number Websites</h6>
                                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">{data?.total_number_of_websites}</p>
                                </div>
                            </div>
                            <div className="timeline-block mb-3">
                                <span className="timeline-step">
                                    <i className="pi pi-users text-warning text-gradient"></i>
                                </span>
                                <div className="timeline-content">
                                    <h6 className="text-dark text-sm font-weight-bold mb-0">Number of Active Users</h6>
                                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">{data?.number_of_active_users}</p>
                                </div>
                            </div>
                            <div className="timeline-block mb-3">
                                <span className="timeline-step">
                                    <i className="pi pi-bars text-primary text-gradient"></i>
                                </span>
                                <div className="timeline-content">
                                    <h6 className="text-dark text-sm font-weight-bold mb-0">Total Number of Companies</h6>
                                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">{data?.total_number_of_companies}</p>
                                </div>
                            </div>
                            <div className="timeline-block">
                                <span className="timeline-step">
                                    <i className="pi pi-users text-dark text-gradient"></i>
                                </span>
                                <div className="timeline-content">
                                    <h6 className="text-dark text-sm font-weight-bold mb-0">Total Number of Users</h6>
                                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">{data?.total_number_of_users}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}