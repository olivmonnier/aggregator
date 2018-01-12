import { Layout, Content } from 'react-mdl';
import * as React from 'react';
import { connect } from 'react-redux';

import ErrorAlert from '../Components/ErrorAlert';
import TitleBar from '../Components/TitleBar';
import Menu from '../Components/Menu';
import Feed from '../Components/Feed';

import { IRootState, IStore } from '../Interfaces';
import actions from '../Actions/actions';

const mapStateToProps = (state: IRootState) => state;
const mapDispatchToProps = {
  ...actions
};

class App extends React.Component<IStore, {}> {
  componentDidMount() {
    this.props.fetchMenu();
  }
  
  render() {
    return (
      <div className="main-wrapper">
        <ErrorAlert store={this.props} />
        <Layout fixedHeader fixedDrawer>
          <TitleBar />
          <Menu store={this.props} />
          <Content>
            <Feed store={this.props}/>
          </Content>
        </Layout>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);