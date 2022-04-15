import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


export default function OperationsFormVisit(props) {

    var is_admin = props.is_admin;
    const options = ['canceled', 'completed', 'unspecified'];
    const defaultOption = options[2];

    if (is_admin) { return <></>; }
    return (
        <div style={{ "marginLeft": "10px" }}>
            <br />
            <div class="container">
                <div class="panel-heading">
                    <h3 style={{ "margin": "auto" }}>Operations</h3>
                    <br />
                </div>
                <div class="panel-body table-responsive-sm">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th style={{ 'color': "#535356" }}>Operation</th>
                                <th style={{ 'color': "#535356" }}>Tooth</th>
                                <th style={{ 'color': "#535356" }}>Fee</th>
                            </tr>
                        </thead>

                        <tbody backgroundColor="#808808" style={{ 'color': "#5D5C63" }}>
                            <tr data-toggle="collapse" data-target="#demo1" class="accordion-toggle">
                                <td>Root Canal</td>
                                <td >..</td>
                                <td>.....</td>
                            </tr>

                        </tbody>
                    </table>
                    <br /><br />
                </div>



            </div>    </div>

    );
}
