import React from 'react'
import Chart from "react-google-charts";
function Reportes() {

    
    return (
        <div>
            <div class="d-flex justify-content-center" >
                <Chart
                    width={400}
                    height={300}
                    chartType="ColumnChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['City', '2010 Population', '2000 Population'],
                        ['New York City, NY', 8175000, 8008000],
                        ['Los Angeles, CA', 3792000, 3694000],
                        ['Chicago, IL', 2695000, 2896000],
                        ['Houston, TX', 2099000, 1953000],
                        ['Philadelphia, PA', 1526000, 1517000],
                    ]}
                    options={{
                        title: 'Population of Largest U.S. Cities',
                        chartArea: { width: '30%' },
                        hAxis: {
                            title: 'Total Population',
                            minValue: 0,
                        },
                        vAxis: {
                            title: 'City',
                        },
                    }}
                    legendToggle
                />
            </div>
            <div class="d-flex justify-content-center" >
                <Chart
                    width={1000}
                    height={350}
                    chartType="Calendar"
                    loader={<div>Loading Chart</div>}
                    data={[
                        [{ type: 'date', id: 'Date' }, { type: 'number', id: 'Won/Loss' }],
                        [new Date(2012, 3, 13), 37032],
                        [new Date(2012, 3, 14), 38024],
                        [new Date(2012, 3, 15), 38024],
                        [new Date(2012, 3, 16), 38108],
                        [new Date(2012, 3, 17), 38229],
                        [new Date(2013, 1, 4), 38177],
                        [new Date(2013, 1, 5), 38705],
                        [new Date(2013, 1, 12), 38210],
                        [new Date(2013, 1, 13), 38029],
                        [new Date(2013, 1, 19), 38823],
                        [new Date(2013, 1, 23), 38345],
                        [new Date(2013, 1, 24), 38436],
                        [new Date(2013, 2, 10), 38447],
                    ]}
                    options={{
                        title: 'Red Sox Attendance',
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
            </div>
        </div>
    )
}
export default Reportes;