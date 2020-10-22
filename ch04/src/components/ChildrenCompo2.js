import React, { Component } from 'react';

class ChildrenCompo2 extends Component {
    render() {
        return (
            <div className="ChildrenCompo2">
                <em>ChildrenCompo2</em>
                <p>
                    내용 : {this.props.children}
                </p>
            </div>
        );
    }
}

export default ChildrenCompo2;