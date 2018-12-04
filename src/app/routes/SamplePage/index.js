import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';
import { unboxapi } from 'unboxapi/unboxapi';

class SamplePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }
  componentDidMount() {
    unboxapi
      .get('/users')
      .then(res => {
        const users = res.data.resource;
        this.setState({ users });
      })
      .catch(function(error) {
        if (error.response) {
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log(error.message);
        }
      });
  }

  render() {
    return (
      <div className="app-wrapper">
        <ContainerHeader match={this.props.match} title={<IntlMessages id="pages.samplePage" />} />
        <div className="d-flex justify-content-center">
          <h1>
            <IntlMessages id="pages.samplePage.description" />
          </h1>
        </div>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>{user.id}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SamplePage;
