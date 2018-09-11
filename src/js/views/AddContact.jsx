import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import ContactCard from '../components/ContactCard';
import ContactActions from '../actions/MyAction';
import MainStore from '../stores/MainStore';
export default class Contacts extends Flux.View {
    constructor(){
        super();
        this.bindStore(MainStore, () => {
            // console.log('the bind worked');
            
            this.props.history.push('/contacts');
        });
        this.state={
            contacts: [],
            full_name:'',
            email: '',
            phone: '',
            address: '',
            id: '',
            edit_mode: false
        };
    }
    
    componentDidMount(){
        this.setState({
            contacts: MainStore.getContacts()
        });
       if (this.props.match.params.id){
            let contacts =  MainStore.getContacts();
            for (let contact_edit = 0; contact_edit < contacts.length; contact_edit++) {
                if (contacts[contact_edit].id == this.props.match.params.id)
                    this.setState({
                        edit_mode: true,
                        full_name: contacts[contact_edit].full_name,
                        email: contacts[contact_edit].email,
                        phone: contacts[contact_edit].phone,
                        address: contacts[contact_edit].address,
                        id: contacts[contact_edit].id
                    });
            }
       } 
    }
           
    
        
    addContact(){
        let contact = {};
        contact.full_name = this.state.full_name;
        contact.email = this.state.email;
        contact.phone = this.state.phone;
        contact.address = this.state.address; 
        contact.id = this.state.id;
        
        ContactActions.addContact(contact);
    }
    
    editContact(){
        let contact = {};
        contact.full_name = this.state.full_name;
        contact.email = this.state.email;
        contact.phone = this.state.phone;
        contact.address = this.state.address; 
        contact.id = this.state.id;
        
        ContactActions.editContact(contact);
    }
    
    
   
    handleChange(propertyName, event) {
    const contact = this.state.contact;
    contact[propertyName] = event.target.value;
    this.setState({ contact: contact });
    }
    
    
    render() {
        return (
            <div className="container">
                <div>
                    <h1 className="text-center mt-5">{this.state.edit_mode ? "Edit Contact" : "Add a new contact"}</h1>
                    <form>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" className="form-control" placeholder="Full Name" onChange={(e) => this.setState({full_name:e.target.value})} value={this.state.name} />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => this.setState({email:e.target.value})} value={this.state.email}/>
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="phone" className="form-control" placeholder="Enter phone" onChange={(e) => this.setState({phone:e.target.value})} value={this.state.phone}  />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" className="form-control" placeholder="Enter address" onChange={(e) => this.setState({address:e.target.value})} value={this.state.address} />
                        </div>
                        <div className="form-group">
                            <label>Id</label>
                            <input type="text" className="form-control" placeholder="Enter Id" onChange={(e) => this.setState({id:e.target.value})} value={this.state.id} />
                        </div>
                        {
                            (this.state.edit_mode)?
                                <button onClick={() => this.editContact()} type="button" className="btn btn-primary form-control">edit</button>
                                :
                                <button onClick={() => this.addContact()} type="button" className="btn btn-primary form-control">save</button>
                        }
                        <Link className="mt-3 w-100 text-center" to="/">or get back to contacts</Link>
                    </form>
                </div>
            </div>
        );
    }
}