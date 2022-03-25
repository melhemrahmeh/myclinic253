import MaterialTable from "material-table";
import React from 'react'

export default function Material_Table() {
    return (
        <>
            <br />
            <div class="container">
                <div class="panel-heading">
                    <h1 style={{ "margin": "auto" }}>My Employees</h1>
                    <br />
                </div>
                <div class="panel-body">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th style={{ 'color': "#535356"}}>Name</th>
                                <th style={{ 'color': "#535356"}}>Email</th>
                                <th style={{ 'color': "#535356"}}>Phone Number</th>
                                <th style={{ 'color': "#535356"}}>Position</th>
                                <th style={{ 'color': "#535356" }}>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr data-toggle="collapse" data-target="#demo1" class="accordion-toggle">
                                <td style={{ 'color': "#5D5C63" }}>Melhem Rahmeh</td>
                                <td style={{ 'color': "#5D5C63" }}>melhem.rahmehh@gmail.com</td>
                                <td style={{ 'color': "#5D5C63" }}>71 589 832</td>
                                <td style={{ 'color': "#5D5C63" }}>Administrator</td>
                                <td style={{ 'color': "#5D5C63" }}> <button type="button" class="btn btn-info">Edit</button>   or   <button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>

                            <tr>
                                <td colspan="12" class="hiddenRow">
                                    <div class="accordian-body collapse" id="demo1">
                                        <h5>Melhem Rahmeh's Information</h5>
                                        <table class="table table-striped">
                                            <thead>
                                                <tr class="info">
                                                    <th style={{ 'color': "#5D5C63" }}>Employment Type</th>
                                                    <th style={{ 'color': "#5D5C63" }}>Salary</th>
                                                    <th style={{ 'color': "#5D5C63" }}>Address</th>
                                                    <th style={{ 'color': "#5D5C63" }}>Age</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr data-toggle="collapse" class="accordion-toggle">
                                                    <td style={{ 'color': "#5D5D60" }}>Full Time</td>
                                                    <td style={{ 'color': "#5D5D60" }}> 1000$ </td>
                                                    <td style={{ 'color': "#5D5D60" }}> Byblos </td>
                                                    <td style={{ 'color': "#5D5D60" }}> 20</td>
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
                                <td style={{ 'color': "#5D5C63" }}>Administrator</td>
                                <td style={{ 'color': "#5D5C63" }}> <button type="button" class="btn btn-info">Edit</button> or  <button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>

                            <tr>
                                <td colspan="12" class="hiddenRow">
                                    <div class="accordian-body collapse" id="demo2">
                                        <h5>Melhem Rahmeh's Information</h5>
                                        <table class="table table-striped">
                                            <thead>
                                                <tr class="info">
                                                    <th style={{ 'color': "#5D5C63" }}>Employment Type</th>
                                                    <th style={{ 'color': "#5D5C63" }}>Salary</th>
                                                    <th style={{ 'color': "#5D5C63" }}>Address</th>
                                                    <th style={{ 'color': "#5D5C63" }}>Age</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr data-toggle="collapse" class="accordion-toggle">
                                                    <td style={{ 'color': "#5D5D60" }}>Full Time</td>
                                                    <td style={{ 'color': "#5D5D60" }}> 1000$ </td>
                                                    <td style={{ 'color': "#5D5D60" }}> Byblos </td>
                                                    <td style={{ 'color': "#5D5D60" }}> 20</td>
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
