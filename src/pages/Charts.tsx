import React from "react";
import Chart from 'react-apexcharts';

function Charts() {
    return (
        <>
            <div className="container-fluid mb-5">

                <Chart
                    type="bar"
                    width={1000}
                    height={300}
                    series={[
                        {
                            name: "Data 5",
                            data: [560, 121, 675, 907, 233],
                        }

                    ]}

                    options={{
                        title: {
                            text: "Horizantal Bar Graph",
                            style: { fontSize: "30px" }
                        },
                        chart: {
                            stacked: true,
                        },
                        xaxis: {
                            title: {
                                text: "Horizantal Bar Graph"
                            },
                            categories: ['AGILE FAST/agile marketing', 'AGILE FAST/agile marketing', '2014', 'AGILE FAST/agile marketing', 'AGILE FAST/agile marketing']
                        },


                        plotOptions: {
                            bar: {
                                horizontal: true,
                                columnWidth: '100%',
                                borderRadius:10
                            }
                        },
                        stroke: {
                            width: 1,
                        },

                        grid: {
                            show: true,
                            xaxis: {
                                lines: {
                                    show: false
                                }
                            },
                            yaxis: {
                                lines: {
                                    show: false
                                }
                            }

                        }

                    }}

                />
            </div>
        </>
    );
}
export default Charts;