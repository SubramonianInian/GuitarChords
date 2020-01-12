import React from "react";
import "../Css/controlDock.css";
import { runInThisContext } from "vm";
//Declare the state interface
interface State {renderNow: number}

//Declare the prop interface
interface Props {
  transponseChords: Function,
  transponsValue: number,
  hideChords:Function;
  isChordVisible: boolean

}

export default class controlDock extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state);
  }
  // Transponse Chord Element
  private transposeTool: JSX.Element = (
    <div>
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
  private showChords: JSX.Element = <input type="radio" name='Show Chords' checked={this.props.isChordVisible} onChange ={() => this.hideChords(this.props.isChordVisible)}></input>;

  //Render Method
  public render() {
    return (
      <div className="controlDock">
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

  private hideChords = (showChords: boolean): void =>{
      this.props.hideChords(!showChords)
  }
}
