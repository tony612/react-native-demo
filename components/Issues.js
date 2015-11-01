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
      <Text style={styles.title}>
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
  title: {
    color: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    margin: 5
  },
  container: {
    flex: 1,
    alignSelf: 'stretch',

    backgroundColor: '#222358'
  },
});
