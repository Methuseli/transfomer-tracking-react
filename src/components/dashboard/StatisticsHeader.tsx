import React from "react";

// interface DataProps {
//   data: {
//     // websites: any;
//     company: string;
//     total_number_of_websites: number;
//     suggestions: number;
//     total_number_of_companies: number;
//     total_number_of_users: number;
//     new_websites_this_month: number;
//     total_number_of_websites_last_month: number;
//     my_websites: number;
//     total_surveys: number;
//     surveys_today: number;
//   };
// }

export default function StatisticsHeader({ data }: any) {
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
                      Transformers
                    </p>
                    <h5 className="font-weight-bolder mb-0">
                      {data?.transformers}
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
                      Manholes
                    </p>
                    <h5 className="font-weight-bolder mb-0">
                      {data.manholes}
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
                      Cables
                    </p>
                    <h5 className="font-weight-bolder mb-0">
                      {data.cables}
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
                      Power Thefts
                    </p>
                    <h5 className="font-weight-bolder mb-0">
                      {data.theft_alerts}
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
                    <p className="mb-1 pt-2 text-bold">Built for 
                        ZETDC</p>
                    <p className="mb-5">
                      Monitor all cables, transformer and manhole activity using the cloud. Log all major activitis from overvoltages, power surges, etc.
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 ms-auto text-center mt-5 mt-lg-0">
                  <div className="bg-gradient-primary border-radius-lg h-100">
                    <img
                      src="../assets/img/waves-white.svg"
                      className="position-absolute h-100 w-50 top-0 d-lg-block d-none"
                      alt="waves"
                    />
                    <div className="position-relative d-flex align-items-center justify-content-center h-100">
                      <img
                        className="w-100 position-relative z-index-2 pt-4"
                        src="../assets/img/rocket-white.png"
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
                  "url('../assets/img/transformer.jpg')",
              }}
            >
              <span className="mask bg-gradient-dark"></span>
              <div className="card-body position-relative z-index-1 d-flex flex-column h-100 p-3">
                <h5 className="text-white font-weight-bolder mb-4 pt-2">
                  Extension Monitor
                </h5>
                <p className="text-white">
                  View all major activities from the dashboard...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}