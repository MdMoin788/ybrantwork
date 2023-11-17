import React from "react";
import Chart from 'react-apexcharts';
import "./csss.css"
function Charts() {
    return (
        <>
            <div className="container-fluid mb-5" style={{ margin: "auto" }}>

                <Chart
                    type="bar"
                    width={400}
                    height={500}
                    series={[
                        {
                            name: "Data 5",
                            data: [560, 121, 675, 907, 233],
                        }

                    ]}

                    options={{

                        chart: {
                            stacked: true,
                        },
                        xaxis: {
                            title: {
                                text: "Horizantal Bar Graph"
                            },
                            categories: ['2010', '2012', '2014', '2020', '2022']
                        },


                        plotOptions: {
                            bar: {
                                columnWidth: '70%',
                                borderRadius: 10,

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