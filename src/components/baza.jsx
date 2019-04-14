import React from 'react'
import { CustomInput, Form, FormGroup, Label, Input, Table} from 'reactstrap';
import '../bootstrap.css';

class Baza extends Component {

    klik_potvrdi = () => {
        var mysql = require('mysql')
        var connection = mysql.createConnection({
        host     : 'remotemysql.com',
        user     : 'TYQcLL35gV',
        password : 'TYQcLL35gV',
        database : 'BLysSj9ZrP'
        });

        connection.connect()

        connection.query('INSERT INTO Zadaca VALUES...', function (err, result) {
        if (err) throw err

})

for(var i=0;i<brojzadataka;i++){
    connection.query('INSERT INTO Zadatak VALUES...', function (err, result){
        if (err) throw err

        })
    }
        connection.end()
    }
    klik_vrati_se_nazad = () => {
        
    }
        

    render(){
        return (
                <div>
                    <button type="button" className="btn btn-secondary ml-3 " onClick={this.klik_potvrdi}>POTVRDI</button>
                    <button type="button" className="btn btn-secondary ml-3 " onClick={this.klik_vrati_se_nazad}>VRATI NA KREIRANJE</button>
                </div>
                )
        }
    }
    export default Baza