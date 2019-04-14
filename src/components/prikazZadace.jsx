import React from "react";
import { CustomInput, Form, FormGroup, Label, Input, Table } from "reactstrap";
import "../bootstrap.css";

class PrikazZadace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  render() {
    var kolone = [];
    // zadaciCelije prestavlja niz sačinjen od pojedinačnih elemenata u redu tabele koji se sastoji
    // od broja bodova za određeni zadatak te tipa podatka za slanje zadatka
    var zadaciCelije = [];
    var ukupnoBodova = 0; // Ukupan broj bodova na zadaći
    for (var i = 0; i < this.state.data.listaBodova.length; i++) {
      kolone.push("Zadatak " + (i + 1));
      zadaciCelije.push(
        this.state.data.listaBodova[i] + " " + this.state.data.listaTipova[i]
      );
      // Ukupan broj bodova na zadaći
      ukupnoBodova += parseInt(this.state.data.listaBodova[i]);
    }

    return (
      <div>
        <FormGroup>
          <Table className="table table-bordered text-center bg-active border-solid">
            <thead>
              <tr className="bg-primary text-light">
                <th>INFO</th>
                {kolone.map(zadatak => (
                  <th scope="col" key={zadatak}>
                    {zadatak}
                  </th>
                ))}
                <th>Datum i vrijeme</th>
                <th>Ukupan broj bodova</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{this.state.data.naziv}</th>
                {zadaciCelije.map(text => (
                  <th scope="col" key={text}>
                    {text}
                  </th>
                ))}
                <th>{this.state.data.datum + " " + this.state.data.vrijeme}</th>
                <th>{ukupnoBodova}</th>
              </tr>
            </tbody>
          </Table>
        </FormGroup>
      </div>
    );
  }
}

export default PrikazZadace;
