import React from 'react'
import './mainContent.css'
import OsnovniPodaciKreiranjaZadace from './osnovniPodaciKreiranjaZadaca'

//import DateTimePicker from 'react-widgets/lib/DateTimePicker';
//import Globalize from 'globalize';
//import globalizeLocalizer from 'react-widgets-globalize';

class MainContent extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(        
            <div className = "formaKreiranjaZadace" class="p-1 d-flex justify-content-center mb-3">
                <OsnovniPodaciKreiranjaZadace />
            </div>
        )
    }
}

export default MainContent