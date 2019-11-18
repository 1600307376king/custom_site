import React from 'react';
import '../../assets/css/base.css'


class Base extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isVResize : false,
            vNum : 500,
            vNumLimit: 30,
            msg : '',
            x : '',
            y : '',
        };
    }

    listenMouseXY(e){
        this.setState({
            x : e.clientX,
            y : e.clientY,

        })
    }

    render() {
        return (
            <div id="allScreen" className="allScreen" onMouseMove={this.listenMouseXY.bind(this)}>
                <div id="topNav" className="topNav">
                    x : {this.state.x}
                    <br/>
                    y : {this.state.y}
                </div>
                <div id="topNavLine" className="topNavLine" />
                <div id="middleContent" className="middleContent" >
                    <div id="leftBelt" className="leftBelt">

                    </div>
                    <div id="rightBelt" className="rightBelt">

                    </div>
                </div>
                <div id="footerNav" className="footerNav" />
            </div>
        )
    }
}

export default Base