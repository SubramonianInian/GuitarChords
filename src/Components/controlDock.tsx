import React from "react";
import "../Css/controlDock.css";
import { songInfo } from "../Components/Interfaces/songInfo";

//Declare the state interface
interface State {
  renderNow: number;
}

//Declare the prop interface
interface Props {
  key: number;
  songDetails: songInfo;
  transponseChords: Function;
  transponsValue: number;
  hideChords: Function;
  isChordVisible: boolean;
}

export default class controlDock extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state);
  }

  // Song Details

  private songInformation: JSX.Element = (
    <div className="songDetails">
      <h3 className="songName">{this.props.songDetails.songName}</h3>
      <h4 className="movieName">{this.props.songDetails.movieName}</h4>
    </div>
  );
  // Transponse Chord Element
  private transposeTool: JSX.Element = (
    <div className="dockActionTransponse">
      <h6 className="transponseHeading">Transponse</h6>
      <a
        href="javascript:void(0)"
        className="transponseButton"
        onClick={() => this.transposeChords(true)}
      >
        +
      </a>
      <input
        type="text"
        className="transponseValue"
        value={this.props.transponsValue}
        readOnly
      ></input>
      <a
        href="javascript:void(0)"
        className="transponseButton"
        onClick={() => this.transposeChords(false)}
      >
        -
      </a>
    </div>
  );

  // Hide Chords Element
  private showChords: JSX.Element = (
    <div className="dockActionHideChords">
      <h6 className="hideChordHeading">Hide Chords</h6>
      <input
        className="hideChordRadio"
        type="radio"
        name="Show Chords"
        checked={this.props.isChordVisible}
        onClick={() => this.hideChords(this.props.isChordVisible)}
      ></input>
    </div>
  );

  //Render Method
  public render() {
    return (
      <div key={this.props.key} className="controlDock">
        {this.songInformation}
        {this.transposeTool}
        {this.showChords}
      </div>
    );
  }

  //Transponse functionality
  private transposeChords = (increaseScale: boolean): void => {
    let transponseValue = increaseScale
      ? this.props.transponsValue + 1
      : this.props.transponsValue - 1;
    this.props.transponseChords(transponseValue);
  };

  //Hide chords functionality
  private hideChords = (showChords: boolean): void => {
    this.props.hideChords(!showChords);
  };
}
