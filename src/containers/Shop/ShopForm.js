import React from 'react'
import './ShopForm.css'
import { API_URL } from '../../config'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

class shopForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            address: ''
        }
        
        this.handleCreateShop = this.handleCreateShop.bind(this)
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeAddress = this.handleChangeAddress.bind(this)
    }

    notify = () => {
        toast.success("Succes !", {
            position: toast.POSITION.TOP_RIGHT,
        })
    }

    createShop() {
        let data = {
            "name": this.state.name,
            "address": this.state.address
        };

        fetch(`${API_URL}/shop`, {
            method: 'post',
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json',},
            body: JSON.stringify(data)
        }).then((result) => {
            console.log(result);

            this.notify();

            this.props.history.push('/');


        }).catch((err) => {
            console.log(err);
        });
    }

    handleCreateShop = (event) => {
        event.preventDefault()
        confirmAlert({
            title: 'Confirmation',
            message: 'Êtes-vous sûr ?',
            buttons: [
                {
                    label: 'oui',
                    onClick: () => this.createShop()
                },
                {
                    label: 'non',
                    onClick: () => console.log('click no')
                }
            ]
        })
    };

    handleChangeName(event) {
        this.setState({name: event.target.value})
    }

    handleChangeAddress(event) {
        this.setState({address: event.target.value})
    }

    render() {
        return (
            <div className="form-horizontal pad-10">
                <ToastContainer />
                <div className="h2 text-center">Ajouter Magasin</div>
                <br />
                <form className="row pad-10" onSubmit={this.handleCreateShop}>
                    <div className="col-md-6 form-group">
                        <label htmlFor="name" className="control-label">Nom</label>
                        <div className="col-md-12 no-padding">
                            <input value={this.state.name}
                                onChange={this.handleChangeName}
                                name="name"
                                id="name"
                                className="form-control"
                                placeholder=""
                                type="text" required />
                        </div>
                    </div>

                    <div className="col-md-6 form-group">
                        <label htmlFor="address" className="control-label">Adresse</label>
                        <div className="col-md-12 no-padding">
                            <input value={this.state.address}
                                onChange={this.handleChangeAddress}
                                name="address"
                                id="address"
                                className="form-control"
                                placeholder=""
                                type="text" required />
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div>
                            <button type="submit" className="btn btn-save btn-primary">Sauvegarder</button>
                        </div>                    
                    </div>
                </form>
            </div>
        )
    }
}

export default shopForm;