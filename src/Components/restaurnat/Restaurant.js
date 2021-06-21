import React from 'react';
import './Restaurant.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faAngleDown, faAngleUp, faPlus, faMinus, faUtensils,faHome ,facutlery} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';


class Rest extends React.Component {

    state = {
        
        selectedflag:"tab1",
        FirstName:"",LastName:"",Username:"",Email:"",Password:"",CPassword:"",
      ordermeal:[],SellingArray:[]

    }
    
    componentDidMount() {
        //this.setState({Rest:this.state.Rest})
    }


    render() {
       
        return (
               <>
         
            <div class="container shadow p-3 mb-5 bg-white rounded" >

                <h3>Talbat</h3>
                <hr></hr>
               
                <div class="row" >
                       
                     <div class="col col-md-12">
                         {
                           
                        <form class="needs-validation" novalidate>
                           
                        <div class="form-group row">
                       
                                <label for="validationCustom01" class="col-sm-4 col-form-label thandlabel">Restaurant Name</label>
                                <div class="col-sm-8">
                                <input type="text" class="form-control inputt" id="validationCustom01"style={{width:500}}  required></input></div>
                                    <div class="valid-feedback">
                                      Looks good!
                                     </div>
                                     <div class="invalid-feedback">
                                     Please add a name.
                                    </div>
                               </div>
                               
                               <div class="form-group row">
                                
                                <label for="validationCustom011" class="col-sm-4 col-form-label thandlabel">Image</label>
                                <div class="col-sm-8">
                                <input type="file" class="form-control " id="validationCustom011"style={{width:500}}  ></input></div>
                                   
                               </div>
                                <div class="form-group row">
                                <label for="validationCustom02" class="col-sm-4 col-form-label thandlabel">Restaurant Description</label>
                                <div class="col-sm-8">
                                <input  type="textarea" name="text" class="form-control inputtt" id="validationCustom02" style={{width:500}}  required/></div>
                                    <div class="valid-feedback">
                                      Looks good!
                                     </div>
                                     <div class="invalid-feedback">
                                     Please add a Description.
                                    </div>
                         </div>
                         <div class="form-group row">
                         <label for="validationCustom03" class="col-sm-4 col-form-label thandlabel">HotLine</label>
                                <div class="col-sm-8">
                                <input  type="number" class="form-control" id="validationCustom03" style={{width:500}}  required></input></div>
                                    <div class="valid-feedback">
                                      Looks good!
                                     </div>
                                     <div class="invalid-feedback">
                                     Please add a Description.
                                    </div>
                         </div>
                         <div class="form-group row">
                         <label for="validationCustom04" class="col-sm-4 col-form-label thandlabel">Website</label>
                                <div class="col-sm-8">
                                <input  type="text" class="form-control" id="validationCustom04" style={{width:500}}  required></input></div>
                                    <div class="valid-feedback">
                                      Looks good!
                                     </div>
                                     <div class="invalid-feedback">
                                     Please add a website.
                                    </div>
                         </div>

                         <div class="form-group row">
                         <label for="validationCustom05" class="col-sm-3 col-form-label thandlabel">Starting Work</label>
                                <div class="col-sm-3">
                                <input  type="number" class="form-control" id="validationCustom05" style={{width:200}}  required></input></div>
                                    <div class="valid-feedback">
                                      Looks good!
                                     </div>
                                     <div class="invalid-feedback">
                                     Please add a Starting Work.
                                    </div>
                                    <label for="validationCustom06" class="col-sm-3 col-form-label thandlabel">Ending Work</label>
                                <div class="col-sm-3">
                                <input  type="number" class="form-control" id="validationCustom06" style={{width:200}}  required></input></div>
                                    <div class="valid-feedback">
                                      Looks good!
                                     </div>
                                     <div class="invalid-feedback">
                                     Please add a Ending Work.
                                    </div>
                         </div>
                         <div class="form-group row">
                         <label for="validationCustom07" class="col-sm-4 col-form-label thandlabel">Date</label>
                                <div class="col-sm-8">
                                <input  type="date" class="form-control" id="validationCustom07" style={{width:500}}  required></input></div>
                                    <div class="valid-feedback">
                                      Looks good!
                                     </div>
                                     <div class="invalid-feedback">
                                     Please add a Date.
                                    </div>
                         </div>
                         <div class="form-group row">
                         <label for="validationCustom08" class="col-sm-4 col-form-label thandlabel">Max Delivery</label>
                                <div class="col-sm-8">
                                <input  type="number" class="form-control" id="validationCustom08" style={{width:500}}  required></input></div>
                                    <div class="valid-feedback">
                                      Looks good!
                                     </div>
                                     <div class="invalid-feedback">
                                     Please add a Max Delivery.
                                    </div>
                         </div>
                         
                         <input type="button"  class="btn btn-success inputtbtn" value="Save"></input>
                        </form>
                                            }
                       

                        
                    </div>
                </div>
            </div>
               </>
        )
    }

}

export default Rest;