import React from "react";
import ChordDisplayer from "./chordDisplayer";
import { displayDataType } from "./Utility/enums";
import "../Css/songTile.css";

//Declare the state interface
interface State {
  isSongTabSelected: boolean;
  selectedSong: string;
}

//Declare the prop interface
interface Props {}

export default class songTile extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state);
    this.state = {
      isSongTabSelected: false,
      selectedSong: ""
    };
  }

  //Private variables
  private displayDataType: displayDataType = displayDataType.tileView;
  private imageLocations: string[] = [
    "https://i.ytimg.com/vi/_ZL-t8BAOm4/maxresdefault.jpg?key=Malarae_Mounamaa",
    "http://www.tamilkaraokefree.com/wp-content/uploads/2016/09/Vaaranam-Aayiram.png?key=Nenjukkul_Peidhidu",
    "http://www.tamilkaraokefree.com/wp-content/uploads/2016/09/Vaaranam-Aayiram.png?key=Nenjukkul_Peidhidm",
    "http://www.tamilkaraokefree.com/wp-content/uploads/2016/09/Vaaranam-Aayiram.png?key=Nenjukkul_Peidhdum",
    "http://www.tamilkaraokefree.com/wp-content/uploads/2016/09/Vaaranam-Aayiram.png?key=Nenjukkul_Peiidum",
    "http://www.tamilkaraokefree.com/wp-content/uploads/2016/09/Vaaranam-Aayiram.png?key=Nenjukkul_dhidum",
    "http://www.tamilkaraokefree.com/wp-content/uploads/2016/09/Vaaranam-Aayiram.png?key=NenjukkPeidhidum",
    "http://www.tamilkaraokefree.com/wp-content/uploads/2016/09/Vaaranam-Aayiram.png?key=Nenjuk_Peidhidum",
    "http://www.tamilkaraokefree.com/wp-content/uploads/2016/09/Vaaranam-Aayiram.png?key=Nenjkul_Peidhidum",
    "http://www.tamilkaraokefree.com/wp-content/uploads/2016/09/Vaaranam-Aayiram.png?key=Neukkul_Peidhidum",
    "http://www.tamilkaraokefree.com/wp-content/uploads/2016/09/Vaaranam-Aayiram.png?key=Nenjkkul_Peidhidum",
    "http://www.tamilkaraokefree.com/wp-content/uploads/2016/09/Vaaranam-Aayiram.png?key=Nenjukkul_PeiGHFSDYSWhidum",
    "http://www.tamilkaraokefree.com/wp-content/uploads/2016/09/Vaaranam-Aayiram.png?key=Nenjuk\\kul_Peidhidum",
    "http://www.tamilkaraokefree.com/wp-content/uploads/2016/09/Vaaranam-Aayiram.png?key=Nenjukkul_PASDFeidhidum",
    "http://www.tamilkaraokefree.com/wp-content/uploads/2016/09/Vaaranam-Aayiram.png?key=NenjuDAkkul_Peidhidum",
    "http://www.tamilkaraokefree.com/wp-content/uploads/2016/09/Vaaranam-Aayiram.png?key=NenjukkASFDul_Peidhidum",
    "http://www.tamilkaraokefree.com/wp-content/uploads/2016/09/Vaaranam-Aayiram.png?key=Nenjukkul_PeDidhidum",
    "http://www.tamilkaraokefree.com/wp-content/uploads/2016/09/Vaaranam-Aayiram.png?key=NenAjukkul_Peidhidum",
    "http://www.tamilkaraokefree.com/wp-content/uploads/2016/09/Vaaranam-Aayiram.png?key=NenjukkuDl_Peidhidum",
    "https://www.dtnext.in/uploads/4AAE8BA2-07CF-4F1A-B8D7-B09A8498887C_L_styvpf.gif?key=Parayuvan_Ithadyamayi"
  ];

  //Render Functions
  public render() {
    let classNames: string =
      this.displayDataType === displayDataType.chordView ? "container" : "";
    return (
      <div className={classNames}>
        {this.imageLocations.map(this.renderImageContent)}
      </div>
    );
  }

  //Private Functions
  private renderImageContent = (src: string): JSX.Element => {
    let key: string = this.getkey(src);
    let songTile: any = (
      <div onClick={() => this.onSongSelect(key)} key={key}>
        <img
          className="song-Tile"
          src={src}
          alt=""
          key={src.split("key=")[1]}
        />
      </div>
    );
    return this.state.isSongTabSelected && key === this.state.selectedSong ? (
      <ChordDisplayer key={key} selectedSong={this.state.selectedSong} />
    ) : this.state.isSongTabSelected ? null : (
      songTile
    );
  };

  //On click event on clicking a song tile
  private onSongSelect = (selectedSong: string): void => {
    this.displayDataType = displayDataType.chordView;
    this.setState({ isSongTabSelected: true, selectedSong: selectedSong });
  };

  //Get the selected song from the image URL
  private getkey = (src: string): string => {
    return src.split("key=")[1];
  };
}
