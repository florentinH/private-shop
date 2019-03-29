import React from 'react'
import './TableShops.css'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

const TableShops = (props) => {
    const { shops, history } = props

    return (
        <div className="table-container">
            <div className="h2 text-center">Nos Magasins</div>
            <div className="row">
                <div className="col-md-12 pad-10">
                    <button onClick={() => history.push('/ajout')} type="submit" className="btn btn-primary">
                        Ajouter un magasin
                    </button>
                </div>
            </div>
            <br />
            <br />
            <table className="table table-striped">
                <thead className="Table-head">
                    <tr>
                        <th>Nom</th>
                        <th>Adresse</th>
                        <th>Mail</th>
                        <th>Téléphone</th>
                        <th>Ville</th>
                        <th>Pays</th>
                        <th>Code Postale</th>
                        <th>description</th>
                    </tr>
                </thead>
                <tbody>
                    {shops.map((shop) => (
                        <tr key={shop.id_shop}
                        >
                            <td>
                                <span>{shop.name}</span>
                            </td>
                            <td>
                                <span>{shop.address}</span>
                            </td>
                            <td>
                                <span>{shop.mail}</span>
                            </td>
                            <td>
                                <span>{shop.tel_number}</span>
                            </td>
                            <td>
                                <span>{shop.city}</span>
                            </td>
                            <td>
                                <span>{shop.country}</span>
                            </td>
                            <td>
                                <span>{shop.post_code}</span>
                            </td>
                            <td>
                                <span>{shop.description}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

TableShops.propTypes = {
    shops: PropTypes.array.isRequired
}

export default withRouter(TableShops)