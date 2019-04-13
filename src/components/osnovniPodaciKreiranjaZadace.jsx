import React from 'react'
import { Badge, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import DodavanjeTipovaFileova from './dodavanjeTipovaFileova'
import BodoviZadaca from './bodovi_zadaca'

import './../bootstrap.css'; 

class OsnovniPodaciKreiranjaZadace extends React.Component {
    constructor(props){
        super(props)

        //Trebao je naziv i broj zadataka za Edinin i Medinin dio pa se ovdje čuva
        this.state = {
            brojZadataka: '1',
            naziv: 'Naziv'
        }
    }

//Ovim se postavlja broj zadataka iz state na onaj iz inputa  i ovaj dio pozivam na onChange tog inputa
    handleInputChange = (event) =>{
        event.preventDefault()
        this.setState({
            brojZadataka: event.target.value
        })
    }

    //Ovim se postavlja naziv iz state na onaj iz inputa i ovaj dio pozivam na onChange tog inputa
    nazivChange = (event) =>{
        this.setState({
            naziv: event.target.value
        })
    }

    render() {

        //Ovu komponentu sam napravila da bih je proslijedila kao props svojoj komponenti
        var komponente = {
            ime: this.state.naziv,
            zadaci: this.state.brojZadataka
        };

        return(      
            <div>
                <div class="p-1 d-flex justify-content-center mb-3">
                    <div className = "formaKreiranjaZadace" class="col-lg-6 col-sm-12 left">
                        <Form>
                            <h1>Kreiraj zadaću <Badge color="primary">:)</Badge></h1>
                            <FormGroup>
                                <Label for="naziv">Naziv:</Label>
                                {/*Tu ispod se nalazi onChange za spremanje naziva */}
                                <Input type="text" name="naziv" id="naziv" placeholder="Upišite naziv" onChange = {this.nazivChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="datum">Datum roka predaje:</Label>
                                <Input type="date" name="datum" id="datum"/>
                            </FormGroup>
                    
                            <FormGroup>
                                <Label for="vrijeme">Vrijeme roka predaje:</Label>
                                <Input type="time" name="vrijeme" id="vrijeme" placeholder="time placeholder" defaultValue='23:59' />
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
                                {/*Tu ispod se nalazi onChange za spremanje brojaZadataka */}
                                <Input defaultValue='1' type="number" pattern='[0-9]{0,5}' name="brojZadataka" id="brojZadataka" onChange = {this.handleInputChange}/>
                            </FormGroup>
                        </Form>
                    </div>
                    <div class="col-lg-6 col-sm-12 right">
                    {/* Tu proslijeđujem pomoću props one komponente koje mi trebaju u Edininu komponentu - kasnije se pomoću props pristupa*/}
                        <DodavanjeTipovaFileova komponente = {komponente}/>
                    </div>
                </div>
                <div>
                     {/* Tu proslijeđujem pomoću one komponente koje mi trebaju u Medininu  komponentu*/}
                    <BodoviZadaca broj_zad={komponente.zadaci} ></BodoviZadaca>
                </div>
            </div>  
        )
    }
}

export default OsnovniPodaciKreiranjaZadace