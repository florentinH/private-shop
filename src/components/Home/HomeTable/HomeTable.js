import React from 'react'
import './HomeTable.css'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

const HomeTable = (props) => {
    const {shopsProduct} = props

    return(
        <div className="table-container">
            <table className="table table-striped">
                <tbody>
                    {shopsProduct.map((shop) => (
                        <tr key={shop.id_shop}>
                            <td>
                                <span>{shop.name}</span>
                            </td>
                            <td>
                                <span>{shop.address}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

HomeTable.PropType = {
    home: PropTypes.array.isRequired
}

export default withRouter(HomeTable)