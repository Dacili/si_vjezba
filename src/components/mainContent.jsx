import React from "react";
import "./mainContent.css";
import OsnovniPodaciKreiranjaZadace from "./osnovniPodaciKreiranjaZadace";
import PrikazZadace from "./prikazZadace";

//import DateTimePicker from 'react-widgets/lib/DateTimePicker';
//import Globalize from 'globalize';
//import globalizeLocalizer from 'react-widgets-globalize';

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      predmetView: false,
      zadacaCreate: true,
      zadacaPreview: false,
      zadacaPreviewData: {
        naziv: "",
        datum: "",
        vrijeme: "",
        listaBodova: [],
        listaTipova: []
      }
    };
  }

  predmetViewClick = () => {
    this.setState({
      predmetView: true,
      zadacaCreate: false,
      zadacaPreview: false
    });
  };
  zadacaCreateClick = () => {
    this.setState({
      predmetView: false,
      zadacaCreate: true,
      zadacaPreview: false
    });
  };

  zadacaPreviewClick = data => {
    this.setState({
      predmetView: false,
      zadacaCreate: false,
      zadacaPreview: true,
      zadacaPreviewData: data
    });
  };

  render() {
    return (
      <div>
        {this.state.zadacaCreate && (
          <div
            className="formaKreiranjaZadace"
            class="p-1 d-flex justify-content-center"
          >
            <OsnovniPodaciKreiranjaZadace
              onZadacaPreviewDataSet={this.zadacaPreviewClick}
              onZadacaCreateDataSet={this.zadacaCreateClick}
            />
          </div>
        )}

        {this.state.zadacaPreview && (
          <PrikazZadace data={this.state.zadacaPreviewData} />
        )}

        {this.state.zadacaCreate && (
          <button onClick={this.predmetViewClick} id="dugme">
            PovratakNaPredmet
          </button>
        )}
        {this.state.predmetView && (
          <button
            type="button"
            className="btn btn-secondary ml-3 "
            onClick={this.zadacaCreateClick}
          >
            Preview zadace
          </button>
        )}
      </div>
    );
  }
}

export default MainContent;
