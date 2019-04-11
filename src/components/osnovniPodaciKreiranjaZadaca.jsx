import React from 'react'
import { Badge, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class OsnovniPodaciKreiranjaZadace extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(        
            <div className = "formaKreiranjaZadace" class="p-1 d-flex justify-content-center mb-3">
                <Form>
                    <h1>Kreiraj zadaću <Badge color="primary">:)</Badge></h1>
                    <FormGroup>
                        <Label for="naziv">Naziv:</Label>
                        <Input type="text" name="naziv" id="naziv" placeholder="Upišite naziv" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="datum">Datum roka predaje:</Label>
                        <Input type="date" name="datum" id="datum"/>
                    </FormGroup>
            
                    <FormGroup>
                        <Label for="vrijeme">Vrijeme roka predaje:</Label>
                        <Input type="time" name="vrijeme" id="vrijeme" placeholder="time placeholder"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="file">Postavka:</Label>
                        <Input type="file" name="file" id="file" />
                        <FormText color="muted">
                            Ovo je opcionalna mogućnost
                        </FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="brojZadataka">Broj zadataka:</Label>
                        <Input type="number" pattern='[0-9]{0,5}' name="brojZadataka" id="brojZadataka"/>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default OsnovniPodaciKreiranjaZadace