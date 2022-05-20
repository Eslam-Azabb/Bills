import React, { Component } from 'react'
import style from '../Returned purchases/ReturnedPurchases.module.css'

var Bills = [];

export default class ReturnedPurchases extends Component {

 //-------------------------Open & Close Bell----------------------------------
 closeBell = () => {
  var lightboxContainer = document.getElementById("lightboxContainer")
  lightboxContainer.style.display = "none"
}
closeAction = () => {
  document.getElementById('sitdown').addEventListener('click', this.closeBell)
}
onButtonClick = () => {
  var lightboxContainer = document.getElementById("lightboxContainer")
  lightboxContainer.style.display = "flex"
};
//-------------------------End Of => Open & Close Bell----------------------------------
//-------------------------Table Sales----------------------------------
Submtion = () => {
  this.subAction();
  this.display()
  this.clearForm()
}

subAction = () => {
  var bellNumber = document.getElementById("bellNumber");
  var clientName = document.getElementById("cliantName");
  var Total = document.getElementById("Total");
  var Date = document.getElementById("Date");

  var Bill =
  {
    bellNumber: bellNumber.value,
    clientName: clientName.value,
    Total: Total.value,
    Date: Date.value,
  }
  Bills.push(Bill);
  localStorage.setItem("billsReturnedPurchasesList", JSON.stringify(Bills))
  
}

test = () => {
  if (JSON.parse(localStorage.getItem("billsReturnedPurchasesList")) != null) {
    Bills = JSON.parse(localStorage.getItem("billsReturnedPurchasesList"));
    this.display()
  }
}
display = () => {
  var Table = '';
  for (let i = 0; i < Bills.length; i++) {
    Table += `<tr className=' + 'p-0' + '>
    <td className=' + 'col-md-1 ' + '>${i + 1}</td>
    <td className=' + 'col-md-1' + '> ${Bills[i].bellNumber}</td>
    <td className=' + 'col-md-1' + '> ${Bills[i].clientName} </td>
    <td className=' + 'col-md-1' + '> ${Bills[i].Total} </td>
    <td className=' + 'col-md-1' + '></td>
    <td className=' + 'col-md-1' + '> ${Bills[i].Date} </td>
    <td className=' + 'col-md-1' + '></td>
    <td className=' + 'col-md-1' + '></td>
    <td className=' + 'col-md-1' + '><i class="fa-solid fa-pen-clip" aria-hidden="true"></i></td>
    <td className=' + 'col-md-1' + '><i class="fa-solid fa-print"></i></td>
    </tr>`;
  }
  document.getElementById("tableBody").innerHTML = Table
  //this.clearFormAfterSub()
}


subClick = () => {
  document.getElementById('subBtn').addEventListener('click', this.Submtion)
}

clearForm = () => {
  var inputs = document.getElementsByClassName('form-control')

  document.getElementById('restBtn').addEventListener('click', function () {

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
    }
  })
}
clearFormAfterSub = () => {
  var inputs = document.getElementsByClassName('form-control')

  document.getElementById('subBtn').addEventListener('click', function () {

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
    }
  })
}
//-------------------------End Of => Table Sales---------------------------------------
//-------------------------componentDidMount Function----------------------------------

componentDidMount() {
  document.getElementById('addBell').addEventListener('click', this.onButtonClick)
  this.closeAction()
  this.test()
  this.subClick()
}
//----------------------------------------------------------------------------------------


  render() {
    return (
      <>
      <div className=' '>
        <div className='pt-3'>
          <div className=' container rounded-3 shadow  mb-4 bg-body rounded'>
            <div className='d-flex justify-content-between '>
              <div class="d-flex justify-content-center align-items-center my-2">
                <span className='h4'>Returned Purchases</span>
              </div>
              <div className='d-flex justify-content-between my-2' >
                <div>
                  <form class="mx-3">
                    <input class="form-control  w-100" placeholder="Search" />
                  </form>
                </div>
                <div>
                  <button id='addBell' className='btn btn-dark rounded-3'>plus</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='rounded-3 shadow  mb-5 bg-body rounded' >
          <table class="table table-striped ">
            <thead className='text-center '>
              <th className='ps-2 pe-2'></th>
              <th className='ps-2 pe-2'>Invoice No.</th>
              <th className='ps-2 pe-2 col-md-2 text-center'>name</th>
              <th className='ps-2 pe-2'>Total</th>
              <th className='ps-2 pe-2'>Since</th>
              <th className='ps-2 pe-2'>Date</th>
              <th className='ps-2 pe-2'>collected</th>
              <th className='ps-2 pe-2'>remaining</th>
              <th className='ps-2 pe-2'>..</th>
              <th className='ps-2 pe-2'>..</th>
            </thead>
            <tbody className='text-center' id='tableBody'>

            </tbody>
          </table>
        </div>

        <i class="fa-solid fa-pen-line" ></i>
        <div>
          <div id='lightboxContainer' className={style.lightboxContainerReturnedPurchases}>
            <div id='lightboxItem' className='container rounded-3 w-100  bg-white'>
              <div className='position-relative'>
                <div className='position-absolute end-0 mt-2'>
                  <button id='sitdown' className='btn btn-dark rounded-3'><i class="fa fa-times-circle" aria-hidden="true"></i></button>
                </div>
                <div className='row d-flex justify-content-between'>
                  <div className='col-md-3 my-1'>
                    <label className='my-2 h6' >Bell Number</label>
                    <input id='bellNumber' className='w-75 form-control bg-secondary bg-opacity-10' type="number" />
                  </div>
                  <div className='col-md-3 my-1'>
                    <label className=' my-2 h6 ' >Date</label>
                    <input id='Date' className='w-75 form-control bg-secondary bg-opacity-10' type="date" />
                  </div >
                  <div className='col-md-3 my-1'>
                    <label className='my-2 h6' >Price type</label>
                    <select class="w-75 form-select bg-secondary bg-opacity-10" id="priceType">
                      <option value="1">Wholesale</option>
                      <option value="2">Sectoral</option>
                    </select>
                  </div>
                  <div className='col-md-3 my-1'>
                    <label className='my-2 h6' >Client pay</label>
                    <input id='cliebtPay' className='w-75 form-control bg-secondary bg-opacity-10' placeholder="Cash" />

                  </div>

                  <div className='d-flex justify-content-between'>
                    <div className='col-md-3 my-1 w-25'>
                      <label className='my-2 h6' >Stock</label>
                      <select class=" input-group mb-3 w-75 form-select bg-secondary bg-opacity-10" id="Stoke">
                        <option selected>Main Stoke</option>
                        <option value="1">Fisrt Branch</option>
                        <option value="2">Second Branch</option>
                        <option value="3">Third Branch</option>
                      </select>
                    </div>
                    <div className='col-md-3 my-1 w-50 ms-3'>
                      <label className='my-2 h6' >Bell Report</label>
                      <input id='bellReport' className='w-75 form-control bg-secondary bg-opacity-10' placeholder="...." />
                    </div>
                  </div>

                </div>
              </div>
              <div className='container bg-light bg-opacity-50 border   rounded-3 my-3 shadow p-3 mb-5 rounded my-3'>
                <h6 className='mt-2'>Add Product</h6>
                <div>
                  <div className='d-flex justify-content-between'>
                    <div className='col-md-2 my-1'>
                      <label className='my-2 h6' >Code</label>
                      <div class="input-group input-group-sm mb-3 w-75">
                        <input id='Code' type="text" class="w-75 form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                      </div>
                    </div>
                    <div className='col-md-4 my-1'>
                      <label className='my-2 text-white' >Product Name</label>
                      <div class="input-group input-group-sm mb-3 w-100">
                        <input type="text" class=" w-75 form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder='Product Name' />
                      </div>
                    </div>
                    <div className='col-md-2 my-1'>
                      <label className='my-2 h6' >Quantity</label>
                      <div class="input-group input-group-sm mb-3 w-75">
                        <input type="number" class="w-75 form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                      </div>
                    </div>
                    <div className='col-md-2 my-1'>
                      <label className='my-2 h6' >Unit</label>
                      <div class="input-group input-group-sm mb-3 w-75">
                        <input id='cliantName' type="text" class="w-75 form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                      </div>
                    </div>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <div className='col-md-2 my-1'>
                      <label className='my-2 h6' >Price</label>
                      <div class="input-group input-group-sm mb-3">
                        <input type="text" class="w-75 form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                      </div>
                    </div>
                    <div className='col-md-2 my-1'>
                      <label className='my-2 h6' >Discount</label>
                      <div class="input-group input-group-sm mb-3">
                        <input type="text" class="w-75 form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                      </div>
                    </div>
                    <div className='col-md-2 my-1'>
                      <label className='my-2 h6' >Discount %</label>
                      <div class="input-group input-group-sm mb-3">
                        <input type="text" class="w-75 form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                      </div>
                    </div>
                    <div className='col-md-2 my-1'>
                      <label className='my-2 h6' >Price After Discount</label>
                      <div class="input-group input-group-sm mb-3">
                        <input type="text" class="w-75 form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                      </div>
                    </div>
                    <div className='col-md-2 my-1'>
                      <label className='my-2 h6' >Total</label>
                      <div class="input-group input-group-sm mb-3">
                        <input id='Total' type="text" class="w-75 form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                      </div>
                    </div>
                  </div>
                  <div className='my-2 d-flex justify-content-end'>
                    <button id='subBtn' className='col-md-2 btn btn-light me-5 border border-2 border-danger' type="submit">Submit</button>
                    <button id='restBtn' className='col-md-2 btn btn-danger border border-2 border-light' type="reset">Rest</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    )
  }
}
