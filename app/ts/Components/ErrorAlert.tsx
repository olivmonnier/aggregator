import * as React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from 'react-mdl';
import { IStore } from '../Interfaces';

interface IProps {
  store: IStore;
}

export default class ErrorAlert extends React.Component<IProps, {}> {
  private onClose = () => {
    this.props.store.setFeedError('')
  }

  render() {
    const { feedError } = this.props.store.state;

    return (
      <Dialog open={ Boolean(feedError) }>
        <DialogTitle>Houston, we have a problem</DialogTitle>
        <DialogContent>
          <p>{ feedError }</p>
        </DialogContent>
        <DialogActions>
          <Button type="button" onClick={ this.onClose }>Close</Button>
        </DialogActions>
      </Dialog>
    )
  }
}