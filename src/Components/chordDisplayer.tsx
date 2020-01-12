import React from "react";
import LyricAndChordsFormatter from "./songlines";
import ControlDock from "./controlDock";
import songData from "../Json/en.json";
import { lineType } from "../Components/Utility/enums";
import "../Css/chordDisplayer.css";
let chordfinder = require("counterpart");

//Declare the state interface
interface State {
  renderedOn: number;
}

//Declare the prop interface
interface Props {
  selectedSong: string;
}

export default class chordDisplayer extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state);
    this.state = {
      renderedOn: 0
    };
    let selectedFile = "songdata";
    chordfinder.registerTranslations("songdata", songData);
    chordfinder.setLocale(selectedFile);
  }

  private transponseValue: number = 0;
  private showChords: boolean = true;
  //Render Functions
  public render() {
    let movieName: string = chordfinder.translate(
      "song." + this.props.selectedSong + ".movie-name"
    );
    let songName: string = chordfinder.translate(
      "song." + this.props.selectedSong + ".song-name"
    );
    let chord: string = chordfinder.translate(
      "song." + this.props.selectedSong + ".chords"
    );
    let chordFormatter: string[] = chord.split(",");
    let lyricsAndChords: any = [];

    //Pass the lyrics and chords to the lyric and chord formatter to convert the single line text to multiline format
    chordFormatter.forEach((item, index) => {
      lyricsAndChords.push(
        <LyricAndChordsFormatter
          key={item}
          lyricAndChordlines={item}
          isLyricOrChord={this.isLyricOrChord(index)}
          tranponseLevel={this.transponseValue}
          hideChords={this.showChords}
        />
      );
    });
    return songName === this.props.selectedSong.replace("_", " ") ? (
      <div>
        <ControlDock
          transponseChords={this.transposeChords}
          transponsValue={this.transponseValue}
          hideChords={this.hideChords}
          isChordVisible={this.showChords}
        />
        <h3 className="songName">{songName}</h3>
        <h4 className="movieName">{movieName}</h4>
        <div className="lyricsAndChords">{lyricsAndChords}</div>
      </div>
    ) : null;
  }

  //Private function to check if a chord line or lyric line is being rendered
  private isLyricOrChord = (index: number): lineType => {
    return index % 2 === 0 ? lineType.chord : lineType.lyric;
  };

  //Transponse functionality
  private transposeChords = (transponseValue: number): void => {
    this.transponseValue = transponseValue;
    this.renderNow();
  };

  //Hide chords functionality
  private hideChords = (showChords: boolean): void => {
    this.showChords = showChords;
    this.renderNow();
  };

  //Render Now
  private renderNow = (): void => {
    this.setState({ renderedOn: Date.now() });
  };
}
