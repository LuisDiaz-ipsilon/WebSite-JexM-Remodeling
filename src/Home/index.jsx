import React from 'react';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';
import Header from './Header';
import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Footer from './Footer';
import './static/style';
import WorkDetail from './WorkDetail';


let isMobile = false;
enquireScreen((b) => {
  isMobile = b;
});

class Home extends React.PureComponent {
  state = {
    isFirstScreen: true,
    isMobile,
    selectedWork: null
  };

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }

  handleSelectWork = (work) => {
    this.setState({ selectedWork: work });
  };

  handleBack = () => {
    this.setState({ selectedWork: null });
  };

  onEnterChange = (mode) => {
    this.setState({
      isFirstScreen: mode === 'enter',
    });
  }
  render() {
    const { selectedWork } = this.state;

    return (
      [
        !selectedWork ? (
          [
            <Header key="header" isFirstScreen={this.state.isFirstScreen} isMobile={this.state.isMobile} />,
            <Banner key="banner" onEnterChange={this.onEnterChange} />,
            <Page1 key="page1" onSelectWork={this.handleSelectWork} />,
            <Footer key="footer" />,
          ]
        ) : (
          <WorkDetail key="workdetail" work={selectedWork} onBack={this.handleBack} />
        ),
        <DocumentTitle title="JexM Remodeling" key="title" />,
      ]
    );
  }
}
export default Home;
