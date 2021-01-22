import React, { useState } from 'react'

export default class Cart extends React.Component {
    render() {
        return (
            <div class="col-lg-3">

                <h1 class="my-4">Shop Name</h1>
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Cras justo odio
                        <button className="btn btn-primary btn-circle-sm" > X </button>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Dapibus ac facilisis in
    <button className="btn btn-primary btn-circle-sm" > X </button>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Morbi leo risus
    <button className="btn btn-primary btn-circle-sm" > X </button>
                    </li>
                </ul>

                <h1> Total 0 </h1>

            </div>

        )
    }
}