import React from 'react'
import { Button } from 'reactstrap';

class MainContent extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
        <div> 
            <Button color="danger">danger</Button>
        </div>)
    }
}

export default MainContent