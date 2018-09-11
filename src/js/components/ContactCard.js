import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

class ContactCard extends React.Component{
    constructor(){
        super();
        this.state = {
            // in
        };
    }
    
    render(){
        return (
            <div>
                <li className="list-group-item">
                    <div className="row w-100">
                        <div className="col-12 col-sm-6 col-md-3 px-0">
                            <img src={this.props.image} className="rounded-circle mx-auto d-block img-fluid" />
                        </div>
                        <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                            <div className=" float-right">
                                <button className="btn" onClick={() => this.props.history.push('/edit/'+this.props.id)}><i className="fas fa-pencil-alt mr-3"></i></button>
                                <button className="btn" onClick={() => this.props.onDelete(this.props.id)}><i className="fas fa-trash-alt"></i></button>
                            </div>
                            <label className="name lead">{this.props.full_name}</label>
                            <br /> 
                            <i className="fas fa-map-marker-alt text-muted mr-3"></i>
                            <span className="text-muted">{this.props.age}</span>
                            <br />
                            <span className="fa fa-phone fa-fw text-muted mr-3" data-toggle="tooltip" title="" data-original-title="(870) 288-4149"></span>
                            <span className="text-muted small">{this.props.gender}</span>
                            <br />
                            <span className="fa fa-envelope fa-fw text-muted mr-3" data-toggle="tooltip" data-original-title="" title=""></span>
                            <span className="text-muted small text-truncate">{this.props.occupation}</span>
                        </div>
                    </div>
                </li>
                <div>
                    <ul className="secondColumn">
                        <li><label className="name lead">{this.props.education}</label></li> 
                        <li><label className="name lead">{this.props.income}</label></li> 
                        <li><label className="name lead">{this.props.likes}</label></li> 
                        <li><label className="name lead">{this.props.dislikes}</label></li> 
                        <li><label className="name lead">{this.props.bio}</label></li> 
                        <li><label className="name lead">{this.props.goals}</label></li> 
                    </ul>
                </div>
            </div>
            
        );
    }
    
}

/**
 * here is where you define the data-types for
 * your component propersties
**/
ContactCard.propTypes = {
    history: PropTypes.object,
    onDelete: PropTypes.func,
    full_name: PropTypes.string,
    age: PropTypes.string,
    gender: PropTypes.string,
    occupation: PropTypes.string,
    education: PropTypes.string,
    income: PropTypes.string,
    likes: PropTypes.string,
    dislikes: PropTypes.string,
    maritalstatus: PropTypes.string,
    bio: PropTypes.string,
    goals: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.string
    
};

/**
 * here is where you define the default values
 * for your component propersties
**/
ContactCard.defaultProps = {
  onDelete: null
};
export default withRouter(ContactCard);