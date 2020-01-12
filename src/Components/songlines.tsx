import React from "react";
import { lineType } from "./Utility/enums";
import { instrumentType } from "./Utility/enums";
import "../Css/songLine.css";
import ChordShapeDisplayer from "../Components/chordShapeDisplayer";

//Declare the state interface
interface State {}

//Declare the prop interface
interface Props {
  lyricAndChordlines: string;
  isLyricOrChord: lineType;
  tranponseLevel: number;
  hideChords: boolean;
}

export default class chordDisplayer extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state);
    this.state = {};
  }

  //Render Functions
  public render() {
    let lyricstyler: any =
      this.props.isLyricOrChord === lineType.lyric ? (
        <p className="song-line">{this.props.lyricAndChordlines}</p>
      ) : !this.props.hideChords ? (
        <ChordShapeDisplayer
          chord={this.props.lyricAndChordlines}
          tranponseLevel={this.props.tranponseLevel}
          instrument={instrumentType.guitar}
        />
      ) : null;
    //Calculate the whitespace
    return <div>{lyricstyler}</div>;
  }
}
