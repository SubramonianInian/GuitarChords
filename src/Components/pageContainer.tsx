import React from "react";
import "../Css/pageContainer.css";
import SongTile from "../Components/songTile";

//Declare the state interface
interface State {}

//Declare the prop interface
interface Props {}

export default class chordDisplayer extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state);
    this.state = {};
  }

  //Render Functions
  public render() {
    return (
      <div className="page-container">
        <SongTile />
      </div>
    );
  }
}
