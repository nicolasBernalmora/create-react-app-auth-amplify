import React, { useState } from 'react'
import { Table, InputGroup, Button, Input } from 'reactstrap';
import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons'

var Nombres = ["name 1", "name 2", "name 3", "name 4", "name 5", "name 6", "name 7", "name 8"];
var colores1Stados = ["white", "white", "white", "white", "white", "white", "white", "white", "white"];
var colores2Stados = ["white", "white", "white", "white", "white", "white", "white", "white", "white"];
var colores3Stados = ["white", "white", "white", "white", "white", "white", "white", "white", "white"];
var colores4Stados = ["white", "white", "white", "white", "white", "white", "white", "white", "white"];
var colores5Stados = ["white", "white", "white", "white", "white", "white", "white", "white", "white"];

function Inicio() {
    const [items, setItems] = useState({
        "Items": [
            {
                "BateryLevel": "0",
                "Tamper": "0",
                "Activity": "0",
                "SignalLevel": "0",
                "ID": "0",
                "Heart": "0"
            },
            {
                "BateryLevel": "0",
                "Tamper": "0",
                "Activity": "0",
                "SignalLevel": "0",
                "ID": "0",
                "Heart": "0"
            },
            {
                "BateryLevel": "0",
                "Tamper": "0",
                "Activity": "0",
                "SignalLevel": "0",
                "ID": "0",
                "Heart": "0"
            },
            {
                "BateryLevel": "0",
                "Tamper": "0",
                "Activity": "0",
                "SignalLevel": "0",
                "ID": "0",
                "Heart": "0"
            },
            {
                "BateryLevel": "0",
                "Tamper": "0",
                "Activity": "0",
                "SignalLevel": "0",
                "ID": "0",
                "Heart": "0"
            },
            {
                "BateryLevel": "0",
                "Tamper": "0",
                "Activity": "0",
                "SignalLevel": "0",
                "ID": "0",
                "Heart": "0"
            },
            {
                "BateryLevel": "0",
                "Tamper": "0",
                "Activity": "0",
                "SignalLevel": "0",
                "ID": "0",
                "Heart": "0"
            },
            {
                "BateryLevel": "0",
                "Tamper": "0",
                "Activity": "0",
                "SignalLevel": "0",
                "ID": "0",
                "Heart": "0"
            },
            {
                "BateryLevel": "0",
                "Tamper": "0",
                "Activity": "0",
                "SignalLevel": "0",
                "ID": "0",
                "Heart": "0"
            }
        ],
        "Count": 8,
        "ScannedCount": 8,
        "ResponseMetadata": {
            "RequestId": "HFP8LRBSA3U9SNH80115EO59NRVV4KQNSO5AEMVJF66Q9ASUAAJG",
            "HTTPStatusCode": 200,
            "HTTPHeaders": {
                "server": "Server",
                "date": "Tue, 09 Nov 2021 19:43:39 GMT",
                "content-type": "application/x-amz-json-1.0",
                "content-length": "1047",
                "connection": "keep-alive",
                "x-amzn-requestid": "HFP8LRBSA3U9SNH80115EO59NRVV4KQNSO5AEMVJF66Q9ASUAAJG",
                "x-amz-crc32": "994193393"
            },
            "RetryAttempts": 0
        }
    });


    const [LimitAct, setLimitAct] = useState(["30", "70"]);
    const [LimitHe, setLimitHe] = useState(["0", "250"]);
    const [LNombres, setLNombres] = useState(["name 1", "name 2", "name 3", "name 4", "name 5", "name 6", "name 7", "name 8"])
    const [colores, setcolores] = useState(["white", "white", "white", "white", "white", "white", "white", "white"])
    const [colores1, setcolores1] = useState(["white", "white", "white", "white", "white", "white", "white", "white"])
    const [colores2, setcolores2] = useState(["white", "white", "white", "white", "white", "white", "white", "white"])
    const [colores3, setcolores3] = useState(["white", "white", "white", "white", "white", "white", "white", "white"])
    const [colores4, setcolores4] = useState(["white", "white", "white", "white", "white", "white", "white", "white"])


    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "rwovyndZ4a6eXt1wl2Kpx8HTUorE4YxD8XePxqaw");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };




    setTimeout(llamada, 5000);


    function llamada() {

        console.log("hagofesh")
        fetch("https://z0jki0bu60.execute-api.us-east-1.amazonaws.com/dev/API-cosultaTabla?=", requestOptions)

            .then(response => response.text())

            .then(result => mostrarDatos(result))
            .catch(error => console.log('error', error));

    }


    function mostrarDatos(result) {

        var TableDates = JSON.parse(result)
        setItems(TableDates);

        var datostabla = TableDates["Items"]

        for (var i = 0; i < 9; i++) {

            evaluar(TableDates, i);
        }

        setcolores(colores1Stados);
        setcolores1(colores2Stados);
        setcolores2(colores3Stados);
        setcolores3(colores4Stados);
        setcolores4(colores5Stados);
    }


    const evaluar = (data, h) => {
        console.log("--------------------evaluo")
        var heartdate = parseInt(data["Items"][h]["Heart"]);
        //console.log(heartdate);
        var Activity = parseInt(data["Items"][h]["Activity"]);
        var tampervar = parseInt(data["Items"][h]["Tamper"]);
        var levelbatery = parseInt(data["Items"][h]["BateryLevel"]);
        LimitHeart(heartdate, h);

        LimitActi(Activity, h);
        //LimitHeart(h);
        //console.log(h);
        BatteryAlarm(levelbatery, h);
        tamperAlarm(tampervar, h);

        // }


    }


    const LimitActi = (data, i) => {

        var bajo = parseInt(LimitAct[0]);
        var alto = parseInt(LimitAct[1]);
        var id = parseInt(items["Items"][i]["ID"])
        // console.log(parseInt(items["Items"][i]["ID"]))
        if (data < bajo) {

            colores3Stados[id] = "red"
        }
        else if (data < alto) {
            colores3Stados[id] = "white"
        }
        else {
            // console.log("no pase el limite bajo")
            colores3Stados[id] = "red"
        }



    }

    const LimitHeart = (data, i) => {
        //console.log("entre a heart limit")
        // console.log(data);
        var bajo = parseInt(LimitHe[0]);
        var alto = parseInt(LimitHe[1]);
        var id = parseInt(items["Items"][i]["ID"])
        // console.log(parseInt(items["Items"][i]["ID"]))
        if (data < bajo) {
            //console.log("entre a nivel bajo")
            //console.log(data)

            colores2Stados[id] = "green"
        }
        else {
            // console.log("no pase el limite bajo")
            colores2Stados[id] = "white"
        }

        if (data > alto) {
            //console.log("alarma nivel alto")
            // console.log(data)

            colores1Stados[id] = "green"
        }
        else {
            //console.log("no pase el limite alto")
            colores1Stados[id] = "white"
        }
    }

    const tamperAlarm = (data, i) => {
        var id = parseInt(items["Items"][i]["ID"])

        if (data == 0) {
            colores4Stados[id] = "white"
        }
        else {
            colores4Stados[id] = "red"
        }

    }
    const BatteryAlarm = (data, i) => {
        var id = parseInt(items["Items"][i]["ID"])
        if (data == 0) {
            colores5Stados[id] = "red"
            //console.log(colores5Stados[i])
        }
        else {
            colores5Stados[id] = "green"

        }

    }


    const registrarlimitesH = () => {
        var limit = []
        limit[0] = document.getElementById("Txt2").value
        limit[1] = document.getElementById("Txt3").value
        setLimitHe(limit);
    }

    const registrarlimitesACT = () => {
        var limit = []
        limit[0] = document.getElementById("Txt4").value
        limit[1] = document.getElementById("Txt5").value
        setLimitAct(limit);
    }

    const registrarNOMBRE = () => {
        var IDnumero = document.getElementById("IDnumero").value
        var nombre = document.getElementById("Name").value
        //console.log(typeof(IDnumero))

        if (IDnumero == "1") {

            Nombres[0] = nombre;
            console.log(nombre);
        }
        else if (IDnumero == "2") {
            Nombres[1] = nombre;
            console.log(nombre);
        }
        else if (IDnumero == "3") {
            Nombres[2] = nombre;
            console.log(nombre);
        }
        else if (IDnumero == "4") {
            Nombres[3] = nombre;
            console.log(nombre);
        }
        else if (IDnumero == "5") {
            Nombres[4] = nombre;
            console.log(nombre);
        }
        else if (IDnumero == "6") {
            Nombres[5] = nombre;
            console.log(nombre);
        }
        else if (IDnumero == "7") {
            Nombres[6] = nombre;
            console.log(nombre);
        }
        else if (IDnumero == "8") {
            Nombres[7] = nombre;
            console.log(nombre);
        }
        setLNombres(Nombres);

    }


    // one linerA
    return (
        <div>
            <div class="container" >

                <Table bordered>
                    <thead>
                        <tr>
                            <th>Name </th>
                            <th>Heart Limits</th>
                            <th>Activity Limits</th>
                        </tr>

                        <tr>
                            <th> <InputGroup>
                                <Button onClick={registrarNOMBRE}>Name</Button>
                                <Input class="mb-0" id="IDnumero" />
                                <Input id="Name" />
                            </InputGroup> </th>
                            <th> <InputGroup>
                                <Button onClick={registrarlimitesH}>Load</Button>
                                <Input id="Txt2" />
                                <Input id="Txt3" />
                            </InputGroup> </th>
                            <th> <InputGroup>
                                <Button onClick={registrarlimitesACT}>Load</Button>
                                <Input id="Txt4" />
                                <Input id="Txt5" />
                            </InputGroup> </th>

                        </tr>
                    </thead>
                </Table>


                <Table dark>
                    <thead>
                        <tr>
                            <th># ID </th>
                            <th>Name </th>
                            <th>Heart Rate</th>
                            <th>Activity</th>
                            <th>High Rate Alarm </th>
                            <th>Low rate Alarm </th>
                            <th>Activity  Alarm </th>
                            <th>Tamper Alarm</th>
                            <th>Battery Alarm</th>
                            <th>Signal Level (RSSI)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{items["Items"][2]["ID"]}</th>
                            <td>{LNombres[0]}</td>
                            <td>{items["Items"][2]["Heart"]}</td>
                            <td>{items["Items"][2]["Activity"]}</td>
                            <td> <CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores[1]} /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores1[1]} /> </td>
                            <td> <CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores2[1]} /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores3[1]} /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores4[1]} /> </td>
                            <td>{items["Items"][2]["SignalLevel"]}</td>
                        </tr>
                        <tr>
                            <th scope="row">{items["Items"][0]["ID"]}</th>
                            <td>{LNombres[1]}</td>
                            <td>{items["Items"][0]["Heart"]}</td>
                            <td>{items["Items"][0]["Activity"]}</td>
                            <td> <CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores[2]} /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores1[2]} /> </td>
                            <td> <CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores2[2]} /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores3[2]} /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores4[2]} /> </td>
                            <td>{items["Items"][0]["SignalLevel"]}</td>
                        </tr>
                        <tr>
                            <th scope="row">{items["Items"][8]["ID"]}</th>
                            <td>{LNombres[2]}</td>
                            <td>{items["Items"][8]["Heart"]}</td>
                            <td>{items["Items"][8]["Activity"]}</td>
                            <td> <CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores[3]} /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores1[3]} /> </td>
                            <td> <CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores2[3]} /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores3[3]} /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores4[3]} /> </td>
                            <td>{items["Items"][8]["SignalLevel"]}</td>
                        </tr>
                        <tr>
                            <th scope="row">{items["Items"][6]["ID"]}</th>
                            <td>{LNombres[3]}</td>
                            <td>{items["Items"][6]["Heart"]}</td>
                            <td>{items["Items"][6]["Activity"]}</td>
                            <td> <CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores[4]} /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores1[4]} /> </td>
                            <td> <CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores2[4]} /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores3[4]} /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores4[4]} /> </td>
                            <td>{items["Items"][6]["SignalLevel"]}</td>
                        </tr>
                        <tr>
                            <th scope="row">{items["Items"][5]["ID"]}</th>
                            <td>{LNombres[4]}</td>
                            <td>{items["Items"][5]["Heart"]}</td>
                            <td>{items["Items"][5]["Activity"]}</td>
                            <td> <CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores[5]} /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores1[5]} /> </td>
                            <td> <CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores2[5]} /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores3[5]} /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores4[5]} /> </td>
                            <td>{items["Items"][5]["SignalLevel"]}</td>
                        </tr>
                        <tr>
                            <th scope="row">{items["Items"][3]["ID"]}</th>
                            <td>{LNombres[5]}</td>
                            <td>{items["Items"][3]["Heart"]}</td>
                            <td>{items["Items"][3]["Activity"]}</td>
                            <td> <CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores[6]} /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores1[6]} /> </td>
                            <td> <CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores2[6]} /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores3[6]} /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores4[6]} /> </td>
                            <td>{items["Items"][3]["SignalLevel"]}</td>
                        </tr>

                        <tr>
                            <th scope="row">{items["Items"][7]["ID"]}</th>
                            <td>{LNombres[6]}</td>
                            <td>{items["Items"][7]["Heart"]}</td>
                            <td>{items["Items"][7]["Activity"]}</td>
                            <td> <CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores[7]} /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores1[7]} /> </td>
                            <td> <CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores2[7]} /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores3[7]} /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores4[7]} /> </td>
                            <td>{items["Items"][7]["SignalLevel"]}</td>
                        </tr>
                        <tr>
                            <th scope="row">{items["Items"][1]["ID"]}</th>
                            <td>{LNombres[7]}</td>
                            <td>{items["Items"][1]["Heart"]}</td>
                            <td>{items["Items"][1]["Activity"]}</td>
                            <td> <CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores[8]} /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores1[8]} /> </td>
                            <td> <CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores2[8]} /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores3[8]} /> </td>
                            <td><CloseCircleTwoTone style={{ fontSize: '40px' }} twoToneColor={colores4[8]} /> </td>
                            <td>{items["Items"][1]["SignalLevel"]}</td>
                        </tr>
                    </tbody>
                </Table>

            </div>


        </div>
    )
}
export default Inicio;