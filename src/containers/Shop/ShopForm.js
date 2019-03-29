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
            address: '',
            mail: '',
            tel_number: '',
            city: '',
            country: '',
            post_code: '',
            description: ''
        }

        this.handleCreateShop = this.handleCreateShop.bind(this)
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeAddress = this.handleChangeAddress.bind(this)
        this.handleChangeMail = this.handleChangeMail.bind(this)
        this.handleChangeTelNumber = this.handleChangeTelNumber.bind(this)
        this.handleChangeCity = this.handleChangeCity.bind(this)
        this.handleChangeCountry = this.handleChangeCountry.bind(this)
        this.handleChangePostCode = this.handleChangePostCode.bind(this)
        this.handleChangeDescription = this.handleChangeDescription.bind(this)
    }

    notify = () => {
        toast.success("Succes !", {
            position: toast.POSITION.TOP_RIGHT,
        })
    }

    createShop() {
        let data = {
            "name": this.state.name,
            "address": this.state.address,
            "mail": this.state.mail,
            "tel_number": this.state.tel_number,
            "city": this.state.city,
            "country": this.state.country,
            "post_code": this.state.post_code,
            "description": this.state.description
        };

        fetch(`${API_URL}/shop`, {
            method: 'post',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', },
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
        this.setState({ name: event.target.value })
    }

    handleChangeAddress(event) {
        this.setState({ address: event.target.value })
    }

    handleChangeMail(event) {
        this.setState({ mail: event.target.value })
    }

    handleChangeTelNumber(event) {
        this.setState({ tel_number: event.target.value })
    }

    handleChangeCity(event) {
        this.setState({ city: event.target.value })
    }

    handleChangeCountry(event) {
        this.setState({ country: event.target.value })
    }

    handleChangePostCode(event) {
        this.setState({ post_code: event.target.value })
    }

    handleChangeDescription(event) {
        this.setState({ description: event.target.value })
    }

    render() {
        return (
            <div className="form-horizontal pad-10">
                <ToastContainer />
                <div className="h2 text-center">Ajouter Magasin</div>
                <br />
                <form className="row " onSubmit={this.handleCreateShop}>
                    <div className="row marg-10">
                        <div className="col-md-3 form-group">
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

                        <div className="col-md-3 form-group">
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

                        <div className="col-md-3 form-group">
                            <label htmlFor="mail" className="control-label">Mail</label>
                            <div className="col-md-12 no-padding">
                                <input value={this.state.mail}
                                    onChange={this.handleChangeMail}
                                    name="mail"
                                    id="mail"
                                    className="form-control"
                                    placeholder=""
                                    type="text" required />
                            </div>
                        </div>

                        <div className="col-md-3 form-group">
                            <label htmlFor="tel_number" className="control-label">Téléphone</label>
                            <div className="col-md-12 no-padding">
                                <input value={this.state.tel_number}
                                    onChange={this.handleChangeTelNumber}
                                    name="tel_number"
                                    id="tel_number"
                                    className="form-control"
                                    placeholder=""
                                    type="text" required />
                            </div>
                        </div>
                    </div>

                    <div className="row pad-10">
                        <div className="col-md-3 form-group">
                            <label htmlFor="city" className="control-label">Ville</label>
                            <div className="col-md-12 no-padding">
                                <input value={this.state.city}
                                    onChange={this.handleChangeCity}
                                    name="city"
                                    id="city"
                                    className="form-control"
                                    placeholder=""
                                    type="text" required />
                            </div>
                        </div>

                        <div className="col-md-3 form-group">
                            <label htmlFor="country" className="control-label">Pays</label>
                            <div className="col-md-12 no-padding">
                                <input value={this.state.country}
                                    onChange={this.handleChangeCountry}
                                    name="country"
                                    id="country"
                                    className="form-control"
                                    placeholder=""
                                    type="text" required />
                            </div>
                        </div>

                        <div className="col-md-3 form-group">
                            <label htmlFor="post_code" className="control-label">Code Postale</label>
                            <div className="col-md-12 no-padding">
                                <input value={this.state.post_code}
                                    onChange={this.handleChangePostCode}
                                    name="post_code"
                                    id="post_code"
                                    className="form-control"
                                    placeholder=""
                                    type="text" required />
                            </div>
                        </div>

                        <div className="col-md-3 form-group">
                            <label htmlFor="description" className="control-label">Déscription</label>
                            <div className="col-md-12 no-padding">
                                <input value={this.state.description}
                                    onChange={this.handleChangeDescription}
                                    name="description"
                                    id="description"
                                    className="form-control"
                                    placeholder=""
                                    type="text" required />
                            </div>
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