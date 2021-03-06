/* @flow */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import type { Dispatch, User } from '../types';
import { Screen } from '../common';
import { doNarrow, navigateBack } from '../actions';
import { groupNarrow } from '../utils/narrow';
import UserPickerCard from '../user-picker/UserPickerCard';

type Props = {
  dispatch: Dispatch,
};

type State = {
  filter: string,
};

class GroupScreen extends PureComponent<Props, State> {
  props: Props;
  state: State = {
    filter: '',
  };

  handleFilterChange = (filter: string) => this.setState({ filter });

  handleCreateGroup = (selected: User[]) => {
    const { dispatch } = this.props;

    const recipients = selected.map(user => user.email);
    dispatch(navigateBack());
    dispatch(doNarrow(groupNarrow(recipients)));
  };

  render() {
    const { filter } = this.state;
    return (
      <Screen search searchBarOnChange={this.handleFilterChange}>
        <UserPickerCard filter={filter} onComplete={this.handleCreateGroup} />
      </Screen>
    );
  }
}

export default connect()(GroupScreen);
