import React from 'react'
import { CustomInput, Form, FormGroup, Label, Input, Table} from 'reactstrap';
import '../bootstrap.css';


class DodavanjeTipovaFileova extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            oznaceno : false,
            eksten : "pdf"
        }

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

    istiTipoviFileova = () =>{
        var jeLoznaceno = document.getElementById("switchTip");
        
        if(jeLoznaceno.checked === true){
            this.setState({oznaceno:true});

            var niz = ["pdf","doc","m","zip","txt"];

            for(var j=0;j<niz.length;j++){
                var s = document.getElementById("Zadatak 1" + niz[j]);
                s.checked=false;
            }

            for(var i = 1; i<this.props.komponente.zadaci; i++){
                    
                var k=i+1;

                for( j=0;j<niz.length;j++){
                     s = document.getElementById("Zadatak " + k + niz[j]);
                    s.disabled = true;
                    s.checked=false;
                }
            }
        }
        else{
            this.setState({oznaceno:false});

            niz = ["pdf","doc","m","zip","txt"];

            for( j=0;j<niz.length;j++){
                s = document.getElementById("Zadatak 1" + niz[j]);
                s.checked=false;
            }

            for( i = 1; i<this.props.komponente.zadaci; i++){
                    
                 k=i+1;

                for(j=0;j<niz.length;j++){
                     s = document.getElementById("Zadatak " + k + niz[j]);
                    s.disabled = false;
                    s.checked=false;
                }
            }
        }
    }

    oznaciStaTreba = () => {

        if(this.state.oznaceno===true){

            var p = document.getElementById("Zadatak 1" + this.state.eksten);
            console.log("da,ne" + this.state.eksten);
            if(p.checked===true){
                for(var i = 1; i<this.props.komponente.zadaci; i++){
                    
                    var k=i+1;
                    var s = document.getElementById("Zadatak " + k + this.state.eksten);
                    s.checked = true;
                }
            }else{
                for( i = 1; i<this.props.komponente.zadaci; i++){
                    
                    k=i+1;
                    s = document.getElementById("Zadatak " + k + this.state.eksten);
                    s.checked = false;
                }
            }
        }
    }

    render() {
        //console.log(this.props.komponente.ime);
        var kk = this.props.komponente.ime;

        var kolone  = [];
        for(var i=1;i<=this.props.komponente.zadaci;i++){
            kolone.push("Zadatak " + i);
        }

        //console.log(kolone)

        return(        
            <div>
                <Form>
                    <h1>Tipovi fileova za svaki zadatak</h1>
                    <FormGroup tag="fieldset">
                        <legend>Da li svi zadaci imaju iste tipove fileova:</legend>
                        <CustomInput type="switch" id="switchTip" name="customSwitch" label="DA"  onChange={this.istiTipoviFileova} />
                    </FormGroup>
                    <FormGroup>
                        <Table className="table table-bordered text-center bg-active border-solid">
                            <thead>
                                <tr className="bg-primary text-light">
                                    <th>Naziv zadaće</th>
                                    {kolone.map(jedno => <th scope="col" key={jedno}>{jedno}</th>)}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">{kk}</th>

                                {   
                                    kolone.map(jedno => <th scope="col" > 
                                        <td>
                                            <FormGroup check  >
                                            <Input type="checkbox" id={jedno + "pdf"} onChange = { (e) => { this.state.eksten="pdf"; this.oznaciStaTreba();  } }/>{' '}
                                                <Label check className="ml-4">
                                                    .pdf
                                                </Label>
                                            </FormGroup>

                                            <FormGroup check>
                                                <Input type="checkbox" id={jedno + "zip"} onChange = { (e) => { this.state.eksten="zip"; this.oznaciStaTreba();  }}/>{' '}
                                                <Label check className="ml-4">
                                                    .zip
                                                </Label>
                                            </FormGroup>

                                            <FormGroup check>
                                                <Input type="checkbox" id={jedno + "m"} onChange = { (e) => {this.state.eksten="m"; this.oznaciStaTreba();  }}/>{' '}
                                                <Label check className="ml-4">
                                                    .m
                                                </Label>
                                            </FormGroup>

                                            <FormGroup check>
                                                <Input type="checkbox" id={jedno + "doc"} onChange = { (e) => { this.state.eksten="doc"; this.oznaciStaTreba();  }}/>{' '}
                                                <Label check className="ml-4">
                                                    .doc
                                                </Label>
                                            </FormGroup>

                                            <FormGroup check>
                                                <Input type="checkbox" id={jedno + "txt"} onChange = { (e) => { this.state.eksten="txt"; this.oznaciStaTreba(); }}/>{' '}
                                                <Label check className="ml-4">
                                                    .txt
                                                </Label>
                                            </FormGroup>
                                        </td>    
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
