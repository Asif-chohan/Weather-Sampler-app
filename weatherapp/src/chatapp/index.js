import React, { Component } from "react";
import socket from "../socketConfig";
import { getData } from "../redux/actions/msgAction";
import { connect } from "react-redux";

class ChatApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "",
      getMsg: []
    };
  }
  componentDidMount() {
    this.props.getData();
  }
  sendMsg = e => {
    e.preventDefault();
    let msg = {
      msgBody: this.state.msg
    };
    socket.emit("chatmsg", msg);

    console.log(msg);
  };
  componentWillReceiveProps(nextProps) {
    this.setState({
      getMsg: nextProps.msg
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.sendMsg}>
          <input
            type="text"
            onChange={e => {
              this.setState({ msg: e.target.value });
            }}
          />
          <button type="submit">Send</button>
        </form>
        <div>
          {this.state.getMsg.map((item, index) => {
            console.log("item", item);
            return <p key={index}>{item.msgBody}</p>;
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    msg: state.msgReducer.msg,
    loader: state.msgReducer.loader
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(ChatApp);
