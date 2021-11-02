import React from 'react'
import { Table } from 'reactstrap';
import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons'

function Inicio() {
    return (
        <div>
            <div class="container" >
                <Table
                    dark
                    hover
                    responsive
                    size=""
                >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre </th>
                            <th>Heart Rate</th>
                            <th>Activiti</th>
                            <th>High Rate Alarm </th>
                            <th>Low rate Alarm </th>
                            <th>Activiti  Alarm </th>
                            <th>Tamper Alarm</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>150 </td>
                            <td>136</td>
                            <td> <CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor="white" /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor="white" /> </td>
                            <td> <CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor="white" /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor="white" /> </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Mark</td>
                            <td>150 </td>
                            <td>136</td>
                            <td> <CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor="white" /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor="white" /> </td>
                            <td> <CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor="white" /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor="white" /> </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Mark</td>
                            <td>150 </td>
                            <td>136</td>
                            <td> <CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor="white" /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor="white" /> </td>
                            <td> <CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor="white" /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor="white" /> </td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Mark</td>
                            <td>150 </td>
                            <td>136</td>
                            <td> <CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor="white" /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor="white" /> </td>
                            <td> <CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor="white" /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor="white" /> </td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Mark</td>
                            <td>150 </td>
                            <td>136</td>
                            <td> <CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor="white" /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor="white" /> </td>
                            <td> <CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor="white" /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor="white" /> </td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>Mark</td>
                            <td>150 </td>
                            <td>136</td>
                            <td> <CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor="white" /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor="white" /> </td>
                            <td> <CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor="white" /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor="white" /> </td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>Mark</td>
                            <td>150 </td>
                            <td>136</td>
                            <td> <CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor="white" /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor="white" /> </td>
                            <td> <CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor="white" /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor="white" /> </td>
                        </tr>
                        <tr>
                            <th scope="row">8</th>
                            <td>Mark</td>
                            <td>150 </td>
                            <td>136</td>
                            <td> <CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor="white" /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor="white" /> </td>
                            <td> <CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor="white" /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor="white" /> </td>
                        </tr>

                    </tbody>
                </Table>

            </div>
           
        </div>
    )
}
export default Inicio;