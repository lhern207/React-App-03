import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import '../css/App.css';

class Fade extends Component{

    state = {
        show:true
    }

    toggleDiv = () => {
        this.setState({
            show: this.state.show ? false : true
        })
    }

    render(){
        return(
            <div>

                {/*CSSTransition covered in course is outdated.
                   New version is slightly different and provides additional
                   classNames for animation when done. Something that the version
                   covered in the course didn't have.
                */}
                
                <CSSTransition
                    in={this.state.show}
                    timeout= {2000}
                    classNames="square"
                    onEntered= { (node) => {
                        node.classList.add("active")
                    }}
                >
                    <div className={`square ${this.state.show}`}>
                        Hello
                    </div>
                </CSSTransition>
                <div className="toggleDiv" onClick={this.toggleDiv}>
                    Toggle banner
                </div>
            </div>
        )
    }
}


export default Fade;