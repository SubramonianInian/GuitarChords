import React from "react";
import "../Css/songLine.css";
import { instrumentType } from "./Utility/enums";
//Declare the state interface
interface State {
  isHoverEvent: boolean;
  selectChordImgSrc: string;
}

//Declare the prop interface
interface Props {
  chord: string;
  tranponseLevel: number;
  instrument: instrumentType;
}

export default class chordShapeDisplayer extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state);
    this.state = {
      isHoverEvent: false,
      selectChordImgSrc: ""
    };
  }

  //Private variables
  private splitChords: string[] = [];
  private chordSpacer: any = [];
  private hoveredChord: string = "";

  //Render Method
  public render() {
    this.splitChords = this.props.chord.replace(/\s/g, "").split(";");
    if (this.props.tranponseLevel > 0) {
      this.getChordBasedOnTransposeLevel();
    }
    let chordSpacing = this.props.chord.split(" ");
    let space: string = "";
    chordSpacing.forEach((item, index) => {
      if (item === "") {
        space = space + " ";
      } else {
        this.chordSpacer.push(space);
        space = "";
      }
    });
    let chordStyler: any = [];

    this.splitChords.forEach((item, index) => {
      let chordSpacer = (
        <pre className="chord-spacer">{this.chordSpacer[index]}</pre>
      );
      chordStyler.push(
        <span>
          {chordSpacer}
          <span
            className="prefromat"
            onMouseOver={() => this.onMouseOver(item + index)}
            onMouseOut={this.onMouseOut}
            key={item + index}
          >
            {item}
          </span>
          {this.state.isHoverEvent && this.hoveredChord === item + index ? (
            <div className="tooltip">
              <img
                className="songTile"
                src={this.getChordImage(item, this.props.instrument)}
                alt=""
              />{" "}
            </div>
          ) : null}
        </span>
      );
    });
    return <div className="chordLine">{chordStyler}</div>;
  }

  //Returns the chord image urls
  private getChordImage = (
    chord: string,
    instrument: instrumentType
  ): string => {
    switch (chord) {
      case "C":
        return instrument === instrumentType.guitar
          ? "https://www.guitar-chords.org.uk/chord-images/c-major-1.gif"
          : "";
      case "C#":
        return "";
      case "Cm":
        return instrument === instrumentType.guitar
          ? "https://www.guitar-chords.org.uk/chord-images/c-minor-1.gif"
          : "";
      case "C#m":
        return "";
      case "D":
        return instrument === instrumentType.guitar
          ? "https://www.guitar-chords.org.uk/chord-images/d-major-1.gif"
          : "";
      case "D#":
        return "";
      case "Dm":
        return instrument === instrumentType.guitar
          ? "https://www.guitar-chords.org.uk/chord-images/d-minor-1.gif"
          : "";
      case "D#m":
        return "";
      case "E":
        return instrument === instrumentType.guitar
          ? "https://www.guitar-chords.org.uk/chord-images/e-major-1.gif"
          : "";
      case "Em":
        return instrument === instrumentType.guitar
          ? "https://www.guitar-chords.org.uk/chord-images/e-minor-1.gif"
          : "";
      case "F":
        return instrument === instrumentType.guitar
          ? "https://www.guitar-chords.org.uk/chord-images/f-major-1.gif"
          : "";
      case "F#":
        return "";
      case "Fm":
        return instrument === instrumentType.guitar
          ? "https://www.guitar-chords.org.uk/chord-images/f-minor-1.gif"
          : "";
      case "F#m":
        return "";
      case "G":
        return instrument === instrumentType.guitar
          ? "https://www.guitar-chords.org.uk/chord-images/g-major-1.gif"
          : "";
      case "G#":
        return "";
      case "Gm":
        return instrument === instrumentType.guitar
          ? "https://www.guitar-chords.org.uk/chord-images/g-minor-1.gif"
          : "";
      case "G#m":
        return "";
      case "A":
        return instrument === instrumentType.guitar
          ? "https://www.guitar-chords.org.uk/chord-images/a-major-1.gif"
          : "";
      case "A#":
        return "";
      case "Am":
        return instrument === instrumentType.guitar
          ? "https://www.guitar-chords.org.uk/chord-images/a-minor-1.gif"
          : "";
      case "A#m":
        return "";
      case "B":
        return instrument === instrumentType.guitar
          ? "https://www.guitar-chords.org.uk/chord-images/b-major-1.gif"
          : "";
      case "Bm":
        return instrument === instrumentType.guitar
          ? "https://www.guitar-chords.org.uk/chord-images/b-minor-1.gif"
          : "";
      default:
        return instrument === instrumentType.guitar
          ? "https://www.guitar-chords.org.uk/chord-images/d-major-1.gif"
          : "";
    }
  };

  //Transpose the chords based on the transpostion level
  private getChordBasedOnTransposeLevel = (): void => {
    let sharpScale: string[] = [
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B"
    ];

    let flatScale: string[] = [
      "C",
      "Db",
      "D",
      "Eb",
      "E",
      "F",
      "Gb",
      "G",
      "Ab",
      "A",
      "A#",
      "B"
    ];

    let scale: string[] = sharpScale;
    let transposedChords: string[] = [];
    let that = this;
    this.splitChords.map(function(item) {
      let currentPostion: number = scale.indexOf(item);
      transposedChords.push(scale[currentPostion + that.props.tranponseLevel]);
    });
    this.splitChords = [];
    this.splitChords = transposedChords;
  };

  //Mouse over function for displaying chord shape
  private onMouseOver = (selectedChord: string): void => {
    this.hoveredChord = selectedChord;
    this.setState({ isHoverEvent: true });
  };

  //Mouse out function for displaying chord shape
  private onMouseOut = () => {
    this.setState({ isHoverEvent: false });
  };
}
