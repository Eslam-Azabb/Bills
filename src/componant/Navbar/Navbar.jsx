import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'



export default class Navbar extends Component {
    render() {
        return (
            <>
                <div className=''>
                    <div>
                        <nav class=" navbar navbar-expand-sm navbar-dark bg-success position-absolute top-0 start-0 h-100 col-2">
                            <div>
                                <div >
                                    <span class="h2 navbar-brand m-3">SERVER SOFT</span>
                                </div>


                                <div class="collapse navbar-collapse" id="collapsibleNavId">
                                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                                        <li class="nav-item dropdown">
                                            <Link class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Main
                                            </Link>
                                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                <li><Link class="dropdown-item" to="login">Login</Link></li>
                                                <li><Link class="dropdown-item" to="sales">Sales</Link></li>
                                                <li><Link class="dropdown-item" to="purchases">Purchases</Link></li>
                                                <li><Link class="dropdown-item" to="salesreturns">SalesReturns</Link></li>
                                                <li><Link class="dropdown-item" to="returnedpurchases">Returned Purchases</Link></li>
                                            </ul>
                                        </li>
                                    </ul>

                                </div>

                            </div>



                        </nav>

                    </div>
                </div>
            </>
        )
    }
}
