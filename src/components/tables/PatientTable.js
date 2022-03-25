import MaterialTable from "material-table";
import React from 'react'

export default function PatientTable() {

    return (
        <>
            <br />
            <div class="container">
                <div class="panel-heading">
                    <h1 style={{ "margin": "auto" }}>My Patients</h1>
                    <br />
                </div>
                <div class="panel-body">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th style={{ 'color': "#535356" }}>Name</th>
                                <th style={{ 'color': "#535356" }}>Email</th>
                                <th style={{ 'color': "#535356" }}>Phone Number</th>
                                <th style={{ 'color': "#535356" }}>Total Amount Due</th>
                                <th style={{ 'color': "#535356" }}>Number of Operations Done</th>
                                <th style={{ 'color': "#535356" }}>Actions</th>

                            </tr>
                        </thead>

                        <tbody>
                            <tr data-toggle="collapse" data-target="#demo1" class="accordion-toggle">
                                <td style={{ 'color': "#5D5C63" }}>Melhem Rahmeh</td>
                                <td style={{ 'color': "#5D5C63" }}>melhem.rahmehh@gmail.com</td>
                                <td style={{ 'color': "#5D5C63" }}>71 589 832</td>
                                <td style={{ 'color': "#5D5C63" }}>100$</td>
                                <td style={{ 'color': "#5D5C63" }}>6</td>
                                <td style={{ 'color': "#5D5C63" }}> <button type="button" class="btn btn-info">Edit</button> or  <button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>

                            <tr>
                                <td colspan="12" class="hiddenRow">
                                    <div class="accordian-body collapse" id="demo1">
                                        <h5>Melhem Rahmeh's Visits</h5>
                                        <table class="table table-striped">
                                            <thead>
                                                <tr class="info">
                                                    <th style={{ 'color': "#5D5C63" }}>Visit Date</th>
                                                    <th style={{ 'color': "#5D5C63" }}>Operation</th>
                                                    <th style={{ 'color': "#5D5C63" }}>Price</th>
                                                    <th style={{ 'color': "#5D5C63" }}>Amount Paid</th>
                                                    <th style={{ 'color': "#5D5C63" }}>Amount Due</th>
                                                    <th style={{ 'color': "#5D5C63" }}>Summary</th>
                                                </tr>
                                            </thead>

                                            <tbody>

                                                <tr data-toggle="collapse" class="accordion-toggle">
                                                    <td style={{ 'color': "#5D5D60" }}>2016/09/27</td>
                                                    <td style={{ 'color': "#5D5D60" }}>Root Canal</td>
                                                    <td style={{ 'color': "#5D5D60" }}> 100$ </td>
                                                    <td style={{ 'color': "#5D5D60" }}> 100$ </td>
                                                    <td style={{ 'color': "#5D5D60" }}> 0$</td>
                                                    <td style={{ 'color': "#5D5D60" }}><i class='bx bxs-file-pdf' style={{ "font-size": "25px" }}></i>After Visit Summary</td>
                                                </tr>
                                                <tr data-toggle="collapse" class="accordion-toggle">
                                                    <td style={{ 'color': "#5D5D60" }}>2016/09/27</td>
                                                    <td style={{ 'color': "#5D5D60" }}>Root Canal</td>
                                                    <td style={{ 'color': "#5D5D60" }}> 100$ </td>
                                                    <td style={{ 'color': "#5D5D60" }}> 100$ </td>
                                                    <td style={{ 'color': "#5D5D60" }}> 0$</td>
                                                    <td style={{ 'color': "#5D5D60" }}><i class='bx bxs-file-pdf' style={{ "font-size": "25px" }}></i>After Visit Summary</td>
                                                </tr>
                                                <tr data-toggle="collapse" class="accordion-toggle">
                                                    <td style={{ 'color': "#5D5D60" }}>2016/09/27</td>
                                                    <td style={{ 'color': "#5D5D60" }}>Root Canal</td>
                                                    <td style={{ 'color': "#5D5D60" }}> 100$ </td>
                                                    <td style={{ 'color': "#5D5D60" }}> 100$ </td>
                                                    <td style={{ 'color': "#5D5D60" }}> 0$</td>
                                                    <td style={{ 'color': "#5D5D60" }}><i class='bx bxs-file-pdf' style={{ "font-size": "25px" }}></i>After Visit Summary</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                </td>
                            </tr>


                            <tr data-toggle="collapse" data-target="#demo2" class="accordion-toggle">
                                <td style={{ 'color': "#5D5C63" }}>Melhem Rahmeh</td>
                                <td style={{ 'color': "#5D5C63" }}>melhem.rahmehh@gmail.com</td>
                                <td style={{ 'color': "#5D5C63" }}>71 589 832</td>
                                <td style={{ 'color': "#5D5C63" }}>100$</td>
                                <td style={{ 'color': "#5D5C63" }}>6</td>
                                <td style={{ 'color': "#5D5C63" }}> <button type="button" class="btn btn-info">Edit</button> or  <button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>

                            <tr>
                                <td colspan="12" class="hiddenRow">
                                    <div class="accordian-body collapse" id="demo2">
                                        <h5>Melhem Rahmeh's Visits</h5>
                                        <table class="table table-striped">
                                            <thead>
                                                <tr class="info">
                                                    <th style={{ 'color': "#5D5C63" }}>Visit Date</th>
                                                    <th style={{ 'color': "#5D5C63" }}>Operation</th>
                                                    <th style={{ 'color': "#5D5C63" }}>Price</th>
                                                    <th style={{ 'color': "#5D5C63" }}>Amount Paid</th>
                                                    <th style={{ 'color': "#5D5C63" }}>Amount Due</th>
                                                    <th style={{ 'color': "#5D5C63" }}>Summary</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr data-toggle="collapse" class="accordion-toggle">
                                                    <td style={{ 'color': "#5D5D60" }}>2016/09/27</td>
                                                    <td style={{ 'color': "#5D5D60" }}>Root Canal</td>
                                                    <td style={{ 'color': "#5D5D60" }}> 100$ </td>
                                                    <td style={{ 'color': "#5D5D60" }}> 100$ </td>
                                                    <td style={{ 'color': "#5D5D60" }}> 0$</td>
                                                    <td style={{ 'color': "#5D5D60" }}><i class='bx bxs-file-pdf' style={{ "font-size": "25px" }}></i>After Visit Summary</td>
                                                </tr>
                                                <tr data-toggle="collapse" class="accordion-toggle">
                                                    <td style={{ 'color': "#5D5D60" }}>2016/09/27</td>
                                                    <td style={{ 'color': "#5D5D60" }}>Root Canal</td>
                                                    <td style={{ 'color': "#5D5D60" }}> 100$ </td>
                                                    <td style={{ 'color': "#5D5D60" }}> 100$ </td>
                                                    <td style={{ 'color': "#5D5D60" }}> 0$</td>
                                                    <td style={{ 'color': "#5D5D60" }}><i class='bx bxs-file-pdf' style={{ "font-size": "25px" }}></i>After Visit Summary</td>
                                                </tr>
                                                <tr data-toggle="collapse" class="accordion-toggle">
                                                    <td style={{ 'color': "#5D5D60" }}>2016/09/27</td>
                                                    <td style={{ 'color': "#5D5D60" }}>Root Canal</td>
                                                    <td style={{ 'color': "#5D5D60" }}> 100$ </td>
                                                    <td style={{ 'color': "#5D5D60" }}> 100$ </td>
                                                    <td style={{ 'color': "#5D5D60" }}> 0$</td>
                                                    <td style={{ 'color': "#5D5D60" }}><i class='bx bxs-file-pdf' style={{ "font-size": "25px" }}></i>After Visit Summary</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );

}
