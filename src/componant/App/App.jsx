import { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Navbar from "../Navbar/Navbar";
import Sales from "../Sales/Sales";
import Purchases from "../Purchases/Purchases"
import SalesReturns from "../SalesReturns/SalesReturns";
import ReturnedPurchases from "../Returned purchases/ReturnedPurchases";







export default class App extends Component {
    state = {


    }

    render() {
        return (
            <>
                <Navbar />
                <div className="container vh-100 bg-white shadow position-absolute end-0 w-100 col-10">
                    
                    <Switch>

                        <Route path="/login"> <Login /></Route>
                        <Route path="/sales"> <Sales /></Route>
                        <Route path="/purchases"> <Purchases /></Route>
                        <Route path="/returnedpurchases"> <ReturnedPurchases /></Route>
                        <Route path="/salesreturns"> <SalesReturns /></Route>
                        {/* <Route path="/"> <Login /></Route> */}
                        <Redirect from="/" exact to="/login" />

                    </Switch>

                </div>
                <Footer />
            </>


        )
    }

}