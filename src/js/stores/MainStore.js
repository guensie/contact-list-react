import React from 'react';
import Flux from '@4geeksacademy/react-flux-dash';

class MainStore extends Flux.Store{
    
    constructor(){
        super();
        this.state = {
    
            contacts: [] ,
            edit_mode: false
        };
    
    }
    
    _setContacts(updatedContacts){
        // console.log('setContacts on the store');
        
        this.setStoreState({
            contacts: updatedContacts
        }). emit('change');
    }
    getContacts(){
        return this.state.contacts;
    }
}
    
    
export default new MainStore();