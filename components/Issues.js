import React from "react-native";

const {
  View,
  Text,
  ScrollView,
  StyleSheet,
} = React;

import _ from 'lodash';

import IssueStore from '../stores/IssueStore';

export default React.createClass({
  render: function() {

    const issues = IssueStore.getIssues();

    let titles = _.mapValues(issues, (issue) =>
      <Text>
      {issue.title}
      </Text>
    );

    return (
      <ScrollView style={styles.container}>
        {titles}
      </ScrollView>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
});
