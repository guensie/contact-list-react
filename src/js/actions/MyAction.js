import Flux from '@4geeksacademy/react-flux-dash';
import MainStore from '../stores/MainStore';

class ContactActions extends Flux.Action{
    
    addContact(contact){
      
       
       fetch("https://assets.breatheco.de/apis/fake/contact/", {
        method: 'PUT', // or 'PUT'
        body: JSON.stringify(contact), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
        }
        })
            .then(res => res.json());
        
        let contacts = MainStore.getContacts();
        contacts.push(contact);
        this.dispatch('MainStore.setContacts',contacts);
    }


    deleteContact(id){
        var data= {
        id: "18",
        agenda_slug: "guensie",
        full_name: "Alejandro S.",
        email: "alejandro570@gmail.com",
        phone: "7864445566",
        address: "47568 NW 34ST, 33434 FL, USA",
        created_at: "2018-06-13 18:07:58"
       };    // console.log('deleted contact');
        
        fetch("https://assets.breatheco.de/apis/fake/contact/", {
        method: 'DELETE', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
        }
        })
            .then(res => res.json());
        
        
            let contacts = MainStore.getContacts();
            let newArray = contacts.filter((cont) => {
                return id != cont.id;
            });
            this.dispatch('MainStore.setContacts',newArray);
    }
    


    editContact(editedContact){
    
    
    fetch("https://assets.breatheco.de/apis/fake/contact/" +editedContact.id, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(editedContact), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
        }
        })
            .then(res => res.json())
            .then(data => {
               let contacts = MainStore.getContacts();
 
                for (let i =0; i< contacts.length; i++){
            
                    if (contacts[i].id === editedContact.id){
                        contacts[i] = editedContact;
                    }
                    
                }
                this.dispatch('MainStore.setContacts',contacts);
           });

        
}
        
        
 
 
    allContacts() {
     fetch('https://assets.breatheco.de/apis/fake/contact/agenda/guensie')
        .then((resp) =>{
            return resp.json();
        })
        .then((contacts) =>{
            this.dispatch('MainStore.setContacts',contacts);
        })
        .catch((error) =>{ 
                console.log("There was an error:",error);
        });
        
 }
}
 
    





export default new ContactActions();