import React from 'react';
import '../Css/navBar.css';


//Declare the state interface
interface State {
}

//Declare the prop interface
interface Props {

}

export default class chordDisplayer extends React.Component<Props, State>{
    constructor(props: Props, state: State) {
        super(props, state);
        this.state = {

        }
    }

    //Render Functions
    public render() {

        return (
            <div className='custom-padding'>
                <nav>
                    <div className='logo'>Chords</div>

                    <ul className='menu-area'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        );
    }

}