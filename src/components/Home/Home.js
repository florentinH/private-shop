import React from 'react'
import { handleResponse } from '../../helpers'
import { API_URL } from '../../config'
import HomeTable from './HomeTable/HomeTable'
import Loading from '../shared/Loading/Loading'

class Home extends React.Component {
    constructor() {
        super()

        this.state = {
            loading: false,
            shopsProduct: [],
            error: null
        }
    }

    componentDidMount() {
        this.fetchHome();
    }

    fetchHome() {
        this.setState({ loading: true })
        fetch(`${API_URL}/shop`)
        //to decode the JSON data received from the BACK
        .then(handleResponse)
        .then((data) => {
            const shopsProduct = data.item

            this.setState({
                shopsProduct,
                loading: false
            })
        })
        .catch((error) => {
            this.setState({ error: error.errorMessage, loading: false})
        })
    }

    render() {
        const {loading, error, shopsProduct} = this.state
        if(loading) {
            return <div className="loading-container"><Loading /></div>
        }
        if(error) {
            return <div className="error">{error}</div>
        }
        return (
            <div>
                <HomeTable shopsProduct={shopsProduct} />
            </div>
        )
    }
}

export default Home