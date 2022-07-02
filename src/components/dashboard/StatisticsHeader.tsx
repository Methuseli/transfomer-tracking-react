import React from "react";

interface DataProps {
  data: {
    // websites: any;
    company: string;
    total_number_of_websites: number;
    suggestions: number;
    total_number_of_companies: number;
    total_number_of_users: number;
    new_websites_this_month: number;
    total_number_of_websites_last_month: number;
    my_websites: number;
    total_surveys: number;
    surveys_today: number;
  };
}

export default function StatisticsHeader({data} : DataProps){
    return (
      <>
        <div className="row">
          <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div className="card">
              <div className="card-body p-3">
                <div className="row">
                  <div className="col-8">
                    <div className="numbers">
                      <p className="text-sm mb-0 text-capitalize font-weight-bold">
                        My Websites
                      </p>
                      <h5 className="font-weight-bolder mb-0">
                        {data.my_websites}
                      </h5>
                    </div>
                  </div>
                  <div className="col-4 text-end">
                    <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                      <i
                        className="ni ni-money-coins text-lg opacity-10"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div className="card">
              <div className="card-body p-3">
                <div className="row">
                  <div className="col-8">
                    <div className="numbers">
                      <p className="text-sm mb-0 text-capitalize font-weight-bold">
                        Total Survey Takers
                      </p>
                      <h5 className="font-weight-bolder mb-0">
                        {data.total_surveys}
                      </h5>
                    </div>
                  </div>
                  <div className="col-4 text-end">
                    <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                      <i
                        className="ni ni-world text-lg opacity-10"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div className="card">
              <div className="card-body p-3">
                <div className="row">
                  <div className="col-8">
                    <div className="numbers">
                      <p className="text-sm mb-0 text-capitalize font-weight-bold">
                        New Survey Takers
                      </p>
                      <h5 className="font-weight-bolder mb-0">
                        {data.surveys_today}
                      </h5>
                    </div>
                  </div>
                  <div className="col-4 text-end">
                    <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                      <i
                        className="ni ni-paper-diploma text-lg opacity-10"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="card">
              <div className="card-body p-3">
                <div className="row">
                  <div className="col-8">
                    <div className="numbers">
                      <p className="text-sm mb-0 text-capitalize font-weight-bold">
                        Total Suggestions
                      </p>
                      <h5 className="font-weight-bolder mb-0">
                        {data.total_number_of_users}
                      </h5>
                    </div>
                  </div>
                  <div className="col-4 text-end">
                    <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                      <i
                        className="ni ni-cart text-lg opacity-10"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-7 mb-lg-0 mb-4">
            <div className="card">
              <div className="card-body p-3">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="d-flex flex-column h-100">
                      <p className="mb-1 pt-2 text-bold">Built by </p>
                      <h5 className="font-weight-bolder">
                        Probable Trible Dashboard
                      </h5>
                      <p className="mb-5">
                        Monitor all your website users in one dashboard, add
                        more webistes and link it to our extension for
                        conducting surveys...
                      </p>
                      {/* <a className="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto" href="javascript:;">
                                        Read More
                                        <i className="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                                        </a> */}
                    </div>
                  </div>
                  <div className="col-lg-5 ms-auto text-center mt-5 mt-lg-0">
                    <div className="bg-gradient-primary border-radius-lg h-100">
                      <img
                        src="../assets/img/shapes/waves-white.svg"
                        className="position-absolute h-100 w-50 top-0 d-lg-block d-none"
                        alt="waves"
                      />
                      <div className="position-relative d-flex align-items-center justify-content-center h-100">
                        <img
                          className="w-100 position-relative z-index-2 pt-4"
                          src="../assets/img/illustrations/rocket-white.png"
                          alt="rocket"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="card h-100 p-3">
              <div
                className="overflow-hidden position-relative border-radius-lg bg-cover h-100"
                style={{
                  backgroundImage:
                    "url('../assets/img/curved-images/survey_form.jpg')",
                }}
              >
                <span className="mask bg-gradient-dark"></span>
                <div className="card-body position-relative z-index-1 d-flex flex-column h-100 p-3">
                  <h5 className="text-white font-weight-bolder mb-4 pt-2">
                    Extension Monitor
                  </h5>
                  <p className="text-white">
                    Get feedback on how your website performs from your daily
                    user...
                  </p>
                  {/* <a className="text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto" href="javascript:;">
                                Read More
                                <i className="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                                </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}