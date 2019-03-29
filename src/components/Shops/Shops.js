import React from 'react'
import { handleResponse } from '../../helpers'
import { API_URL } from '../../config'
import TableShops from './TableShops/TableShops.js'
import Loading from '../shared/Loading/Loading'

class Shops extends React.Component {
    constructor() {
        super()

        this.state = {
            loading: false,
            shops: [],
            error: null
        }
    }


    componentDidMount() {
        this.fetchShops();
    }

    fetchShops() {
        this.setState({ loading: true })
        fetch(`${API_URL}/shop`)
            //to decode the JSON data received from the BACK
            .then(handleResponse)
            .then((data) => {
                const shops = data.item

                this.setState({
                    shops,
                    loading: false
                })
            })
            .catch((error) => {
                this.setState({ error: error.errorMessage, loading: false })
            })
    }

    render() {
        const { loading, error, shops } = this.state
        if (loading) {
            return <div className="loading-container"><Loading /></div>
        }
        if (error) {
            return <div className="error">{error}</div>
        }
        return (
            <div>
                <TableShops shops={shops} />
            </div>
        )
    }
}

export default Shops
