import React from 'react';
import {connect} from 'react-redux';

import Modal from '../Modal';
import history from '../../history';
import {fetchStream, deleteStream} from '../../actions';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions = () => (
    <React.Fragment>
      <button className="ui button negative" onClick={() => this.props.deleteStream(this.props.match.params.id)}>Delete</button>
      <button className="ui button" onClick={() => history.push('/')}>Cancel</button>
    </React.Fragment>
  );

  renderTitle() {
    return this.props.stream ? `Delete Stream: ${this.props.stream.title}` : 'Delete Stream';
  }

  render() {
    return (
      <Modal 
        title={this.renderTitle()}
        content="Are you sure you want to delete this stream?"
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {stream: state.streams[ownProps.match.params.id]};
};

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);