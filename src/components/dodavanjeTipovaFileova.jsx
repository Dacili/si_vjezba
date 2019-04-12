import React from 'react'
import { CustomInput, Form, FormGroup, Label, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Table} from 'reactstrap';

class DodavanjeTipovaFileova extends React.Component {
    constructor(props){
        super(props)
    

        this.toggle = this.toggle.bind(this);
        this.state = {
        dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
        }));
    }


    render() {
        console.log(this.props.komponente.ime);
        var kk = this.props.komponente.ime;

        var kolone  = [];
        for(var i=1;i<=this.props.komponente.zadaci;i++){
            kolone.push("Zadatak " + i);
        }

        console.log(kolone)

        return(        
           <div>
            <Form>
            <h1>Tipovi fileova za svaki zadatak</h1>

                    <FormGroup tag="fieldset">
                        <legend>Da li svi zadaci imaju iste tipove fileova:</legend>
                        <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="DA" defaultChecked />
                    </FormGroup>

                    <FormGroup>

                        <Table className="table table-bordered text-center bg-active border-solid">
                            <thead>
                                <tr className="bg-primary text-light">
                                <th>Naziv zadaće</th>
                                {
                                 kolone.map(jedno => <th scope="col" key={jedno}>{jedno}</th>)
                                }
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <th scope="row">{kk}</th>

                                {
                                    kolone.map(jedno => <th scope="col" > 
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="checkbox" />{' '}
                                                    .PDF
                                                </Label>
                                            </FormGroup>

                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="checkbox" />{' '}
                                                    .zip
                                                </Label>
                                            </FormGroup>

                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="checkbox" />{' '}
                                                    .m
                                                </Label>
                                            </FormGroup>

                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="checkbox" />{' '}
                                                    .doc
                                                </Label>
                                            </FormGroup>
                                        
                                    </th>)
                                }


                                </tr>
                            </tbody>
                        </Table>

                    </FormGroup>


            </Form>      
           </div>
        )
    }
}

export default DodavanjeTipovaFileova
