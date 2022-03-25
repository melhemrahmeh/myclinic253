import React from 'react'

export default function ClinicOperation() {
    return (
        <>
            <br />
            <div class="container">
                <div class="panel-heading">
                    <h1 style={{ "margin": "auto" }}>My Operations</h1>
                    <br />
                </div>
                <div class="panel-body">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th style={{ 'color': "#535356" }}>Name</th>
                                <th style={{ 'color': "#535356" }}>Description</th>
                                <th style={{ 'color': "#535356" }}>Price</th>
                                <th style={{ 'color': "#535356" }}>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr data-toggle="collapse" data-target="#demo1" class="accordion-toggle">
                                <td style={{ 'color': "#5D5C63" }}>Root Canal</td>
                                <td style={{ 'color': "#5D5C63" }}>Desc...............</td>
                                <td style={{ 'color': "#5D5C63" }}>100$</td>
                                <td style={{ 'color': "#5D5C63" }}> <button type="button" class="btn btn-info">Edit</button>   or   <button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>

                            <tr data-toggle="collapse" data-target="#demo2" class="accordion-toggle">
                                <td style={{ 'color': "#5D5C63" }}>Root Canal</td>
                                <td style={{ 'color': "#5D5C63" }}>Desc...............</td>
                                <td style={{ 'color': "#5D5C63" }}>100$</td>
                                <td style={{ 'color': "#5D5C63" }}> <button type="button" class="btn btn-info">Edit</button>   or   <button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>
                            <tr data-toggle="collapse" data-target="#demo2" class="accordion-toggle">
                                <td style={{ 'color': "#5D5C63" }}>Root Canal</td>
                                <td style={{ 'color': "#5D5C63" }}>Desc...............</td>
                                <td style={{ 'color': "#5D5C63" }}>100$</td>
                                <td style={{ 'color': "#5D5C63" }}> <button type="button" class="btn btn-info">Edit</button>   or   <button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );

}
