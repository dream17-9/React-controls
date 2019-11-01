import React, { Component } from 'react';
import './style.css';

class BackTop extends Component {
    constructor(props){
        super(props)
    }
    scrollFunction() {
        if (document.querySelector('#myBtn').parentNode.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }
    topFunction() {
        let timer = setInterval(() => {
            let top = document.querySelector('#myBtn').parentNode.scrollTop;
            if (top == 0) {
                clearInterval(timer);
            } else {
                document.querySelector('#myBtn').parentNode.scrollTop = top -= 80;
            }
        }, 30);
    }
    componentDidMount() {
        const _this = this;
        document.querySelector('#myBtn').parentNode.onscroll = function () {
            _this.scrollFunction()
        };
    }
    render() {
        return (
            <div id='myBtn' onClick={this.topFunction.bind(this)}></div>
        )
    }
}
export default BackTop;