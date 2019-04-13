import React from 'react'
import './mainContent.css'
import OsnovniPodaciKreiranjaZadace from '../osnovniPodaciKreiranjaZadace'

//import DateTimePicker from 'react-widgets/lib/DateTimePicker';
//import Globalize from 'globalize';
//import globalizeLocalizer from 'react-widgets-globalize';

class MainContent extends React.Component {

    constructor (props) {
        super(props) 
        this.state={
            on: true ,
            dugme: true
        }
        
    }

    clicked = () =>  {
        this.setState( { 
            on: !this.state.on ,
            dugme: !this.state.dugme
} ) 
    }
    klik = () => {
        this.setState( {
            on : true ,
            dugme:true
        })
    }   
    

    render() {
        return( 
            <div>
                {this.state.on && (
            <div className = "formaKreiranjaZadace" class="p-1 d-flex justify-content-center">
                <OsnovniPodaciKreiranjaZadace /> </div> 
                ) }
                
                {this.state.dugme && <button onClick= {this.clicked } id='dugme'>PovratakNaPredmet</button> }
                {!this.state.on && <button id='dugme' onClick={this.klik}>KreirajZadacu</button> }
            </div>
            
        )
    }
}

export default MainContent