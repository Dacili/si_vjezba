import React from 'react'
import { Badge, Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';

import DodavanjeTipovaFileova from './components/dodavanjeTipovaFileova'
import BodoviZadaca from './components/bodovi_zadaca'

import './bootstrap.css'; 

class OsnovniPodaciKreiranjaZadace extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            brojZadataka: '1',
            naziv: 'Naziv'
        }
    }


    handleInputChange = (event) =>{
        event.preventDefault()
        this.setState({
            brojZadataka: event.target.value
        })
    }

    nazivChange = (event) =>{
        this.setState({
            naziv: event.target.value
        })
    }

    render() {

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
                        <Input type="text" name="naziv" id="naziv" placeholder="Upišite naziv" onChange = {this.nazivChange}/>
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
                        <Input defaultValue='1' type="number" pattern='[0-9]{0,5}' name="brojZadataka" id="brojZadataka" onChange = {this.handleInputChange}/>
                    </FormGroup>

                </Form>
                </div>

                <div class="col-lg-6 col-sm-12 right">
                    <DodavanjeTipovaFileova komponente = {komponente}/>
                </div>
             

            </div>
               <div>
             <BodoviZadaca broj_zad={komponente.zadaci} ></BodoviZadaca>
          </div>
          </div>  
        )
    }
}

export default OsnovniPodaciKreiranjaZadace