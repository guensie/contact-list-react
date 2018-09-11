import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";

import ContactCard from '../components/ContactCard';
import Modal from '../components/Modal';
import avatar1 from '../../img/user_1.jpg';
import ContactActions from '../actions/MyAction';
import MainStore from '../stores/MainStore';
import MyAction from '../actions/MyAction';

export default class Contacts extends Flux.View {
    constructor(){
        super();
        this.state = {
            showModal: false  ,
            contacts: [
                {id: '1', full_name: 'mario', phone: '123', email: 'mario@mario.com' , address: '242 west drive', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
                {id: '2', full_name: 'juan' , phone: '456', email:'juan@juan.com' , address: '555 Biscayne blvd', image: 'https://randomuser.me/api/portraits/women/2.jpg'},
                {id: '3', full_name: 'jane' , phone: '678' , email:'jane@jane.com', address:'234 N.E. 2nd street', image:'https://randomuser.me/api/portraits/men/3.jpg' }
                ]
        };
    }
    // fetch('https://jsonplaceholder.typicode.com/users')
    //     .then((resp) =>{
    //         return resp.json();
    // })
    // .then((contacts) =>{
    //         this.setState({contacts: contacts});

    // })
    // .catch((error) =>{ 
    //         console.log("There was an error:",error);
    // });
     
    // }
    
    componentDidMount(){
        this.setState({
            contacts: MainStore.getContacts()
        });
        
        this.bindStore(MainStore, () => {
            this.setState({
                contacts: MainStore.getContacts()
            });
            
        });
        let contacts = MainStore.getContacts();
        let contactToEdit = this.setState({
            full_name: contacts.full_name,
            age: contacts.age,
            gender: contacts.gender,
            occupation: contacts.occupation,
            education: contacts.education,
            income: contacts.income,
            likes: contacts.likes,
            dislikes: contacts.dislikes,
            image: contacts.image,
            maritalstatus: contacts.maritalstatus,
            bio: contacts.bio,
            goals: contacts.goals,
            id: contacts.id
            
        }
            );
    }

    deleteContact(id){
        MyAction.deleteContact(id);
    }
        
    editContact(id){
        MyAction.editContact(id);  
    }
    
    
    render() {
        const contactsInHTML = this.state.contacts.map((contact, i) =>{
            return <ContactCard key={i} 
                                id={contact.id}
                                full_name={contact.full_name} 
                                username={contact.username} 
                                age={contact.age} 
                                gender={contact.gender}
                                occupation={contact.occupation}
                                education={contact.education}
                                income={contact.income}
                                likes={contact.likes}
                                dislikes={contact.dislikes}
                                image={contact.image}
                                maritalstatus={contact.maritalstatus}
                                bio={contact.bio}
                                goals={contact.goals}
                                onDelete={(id) => this.deleteContact(id)}/>;
        });
        return (
            <div className="container">
                <div>
                    <p className="text-right my-3">
                        <Link className="btn btn-success" to="/add">Add new contact</Link>
                    </p>
                    <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                        <ul className="list-group pull-down" id="contact-list">
                            {contactsInHTML}
                        </ul>
                    </div>
                </div>
                <Modal show={this.state.showModal} onClose={() => this.setState({showModal: false})} />
            </div>
        );
    }
}