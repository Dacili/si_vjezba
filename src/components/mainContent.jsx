import React from 'react'
import './mainContent.css'
import OsnovniPodaciKreiranjaZadace from '../osnovniPodaciKreiranjaZadace'


//import DateTimePicker from 'react-widgets/lib/DateTimePicker';
//import Globalize from 'globalize';
//import globalizeLocalizer from 'react-widgets-globalize';

class MainContent extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(        
            <div className = "formaKreiranjaZadace" class="p-1 d-flex justify-content-center">
                <OsnovniPodaciKreiranjaZadace />
                
            </div>
        )
    }
}

export default MainContent