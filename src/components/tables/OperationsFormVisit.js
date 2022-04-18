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
                                <th style={{ 'color': "#535356" }}></th>
                            </tr>
                        </thead>

                        <tbody backgroundColor="#808808" style={{ 'color': "#5D5C63" }}>
                            <tr data-toggle="collapse" data-target="#demo1" class="accordion-toggle">
                                <td>
                                    <div class="dropdown">
                                        <select className="form-select bg-light border-0" >
                                            <ul class="dropdown-menu">
                                                <li><a href="#">Root Canal</a></li>
                                                <li><a href="#">Whitening</a></li>
                                                <li><a href="#">...</a></li>
                                            </ul>
                                        </select>
                                    </div>
                                </td>


                                <td >
                                    <div class="dropdown">
                                        <select className="form-select bg-light border-0" ><span class="caret"></span>
                                            <ul class="dropdown-menu">
                                                <li><option value="val1"> 11 </option></li>
                                                <li><option value="val2"> 12 </option></li>
                                                <li><option value="val3"> 13 </option></li>
                                                <li><option value="val4"> 14 </option></li>
                                                <li><option value="val5"> 15 </option></li>
                                                <li><option value="val6"> 16 </option></li>
                                                <li><option value="val7"> 17 </option></li>
                                                <li><option value="val8"> 18 </option></li>

                                                <li><option value="val11"> 21 </option></li>
                                                <li><option value="val12"> 22 </option></li>
                                                <li><option value="val13"> 23 </option></li>
                                                <li><option value="val14"> 24 </option></li>
                                                <li><option value="val15"> 25 </option></li>
                                                <li><option value="val16"> 26 </option></li>
                                                <li><option value="val17"> 27 </option></li>
                                                <li><option value="val18"> 28 </option></li>

                                                <li><option value="val21"> 31 </option></li>
                                                <li><option value="val22"> 32 </option></li>
                                                <li><option value="val23"> 33 </option></li>
                                                <li><option value="val24"> 34 </option></li>
                                                <li><option value="val25"> 35 </option></li>
                                                <li><option value="val26"> 36 </option></li>
                                                <li><option value="val27"> 37 </option></li>
                                                <li><option value="val28"> 38 </option></li>

                                                <li><option value="val31"> 41 </option></li>
                                                <li><option value="val32"> 42 </option></li>
                                                <li><option value="val33"> 43 </option></li>
                                                <li><option value="val34"> 44 </option></li>
                                                <li><option value="val35"> 45 </option></li>
                                                <li><option value="val36"> 46 </option></li>
                                                <li><option value="val37"> 47 </option></li>
                                                <li><option value="val38"> 48 </option></li>

                                            </ul>
                                        </select>
                                    </div>

                                </td>
                                <td>
                                    ...

                                </td>

                                <td style={{ 'color': "#5D5C63" }}>  <button type="button" class="btn btn-primary">
                                    <i class="fa-thin fa-grid-2-plus fa-lg">+</i>
                                </button> </td>
                            </tr>

                            <tr class="bg-primary">
                                <td></td>

                                <td>Total Fee:</td>
                                <td>...</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>

                    {/* 
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Action</th>
                                    <th>Event ID</th>
                                    <th>Event Name</th>
                                    <th>Do Attendance</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div className="btn-group">
                                        <button type="button" className="btn btn-light dropdown-toggle" data-toggle="dropdown">
                                            <span className="caret" />
                                            <span className="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <ul className="dropdown-menu" role="menu">
                                            <li><option value="val1"> 11 </option></li>
                                            <li><option value="val2"> 12 </option></li>
                                            <li><option value="val3"> 13 </option></li>
                                            <li><option value="val4"> 14 </option></li>
                                            <li><option value="val5"> 15 </option></li>
                                            <li><option value="val6"> 16 </option></li>
                                            <li><option value="val7"> 17 </option></li>
                                            <li><option value="val8"> 18 </option></li>
                                            
                                            <li><option value="val11"> 21 </option></li>
                                            <li><option value="val12"> 22 </option></li>
                                            <li><option value="val13"> 23 </option></li>
                                            <li><option value="val14"> 24 </option></li>
                                            <li><option value="val15"> 25 </option></li>
                                            <li><option value="val16"> 26 </option></li>
                                            <li><option value="val17"> 27 </option></li>
                                            <li><option value="val18"> 28 </option></li>
                                      
                                            <li><option value="val21"> 31 </option></li>
                                            <li><option value="val22"> 32 </option></li>
                                            <li><option value="val23"> 33 </option></li>
                                            <li><option value="val24"> 34 </option></li>
                                            <li><option value="val25"> 35 </option></li>
                                            <li><option value="val26"> 36 </option></li>
                                            <li><option value="val27"> 37 </option></li>
                                            <li><option value="val28"> 38 </option></li>
                           
                                            <li><option value="val31"> 41 </option></li>
                                            <li><option value="val32"> 42 </option></li>
                                            <li><option value="val33"> 43 </option></li>
                                            <li><option value="val34"> 44 </option></li>
                                            <li><option value="val35"> 45 </option></li>
                                            <li><option value="val36"> 46 </option></li>
                                            <li><option value="val37"> 47 </option></li>
                                            <li><option value="val38"> 48 </option></li>
                                        </ul>
                                    </div></td>
                                    <td>E01</td>
                                    <td>Meeting</td>
                                    <td><button type="button" className="test">Select</button></td>
                                </tr>


                            </tbody>
                        </table> 
                    </div>*/}

                    <br /><br />
                </div>



            </div>    </div >

    );
}
