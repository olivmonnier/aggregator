import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Textfield } from 'react-mdl';
import * as React from 'react';
import { IStore } from '../Interfaces';

interface IProps {
  store: IStore;
}

export default class AddFeedDialog extends React.Component<IProps, {}> {
  private urlEl: Textfield;
  private formEl: HTMLFormElement;
  private onSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    const urlEl = this.urlEl as any;
    e.preventDefault();
    this.save(urlEl.inputRef.value);
  }
  async save(url: string) {
    const { addFeed, fetchMenu } = this.props.store;
    await addFeed(url);
    await fetchMenu();
    if (!this.props.store.state.feedError) {
      this.formEl.reset();
    }
  }
  private close = () => {
    this.props.store.toggleOpenAddFeed(false);
    this.formEl.reset();
  }

  render() {
    const { isOpenAddFeed } = this.props.store.state;

    return (
      <div>
        <Dialog open={ isOpenAddFeed }>
          <DialogTitle>New Feed</DialogTitle>
          <DialogContent>
            <form onSubmit={ this.onSubmit } ref={ (el: HTMLFormElement) => { this.formEl = el; }}>
              <Textfield
                label="URL"
                required
                floatingLabel
                ref={ (el: Textfield) =>{ this.urlEl = el; }}/>
            </form>
          </DialogContent>
          <DialogActions>
            <Button type="button" onClick={ this.onSubmit }>Save</Button>
            <Button type="button" onClick={ this.close }>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}