import React from "react-native";

const {
  View,
  Text,
  ScrollView,
  StyleSheet,
} = React;

import _ from 'lodash';

import IssueStore from '../stores/IssueStore';
let Button = require('react-native-button');

export default React.createClass({
  componentDidMount() {
    IssueStore.addChangeListener(()=> this.forceUpdate());
  },

  _loadNext() {
    IssueStore.loadIssues(true);
  },

  render: function() {

    const issues = IssueStore.getIssues();

    let titles = _.mapValues(issues, (issue) =>
      <Text style={styles.title}>
        {issue.title}
      </Text>
    );
    let loading;
    let next;
    if (IssueStore.getLoading()) {
      loading = <Text style={styles.loading}>Loading...</Text>;
    }
    if (!loading && IssueStore.getNextLink()) {
      next = <Button style={styles.loadNext} onPress={this._loadNext}>
        Next
      </Button>
    }

    return (
      <ScrollView style={styles.container}>
        {titles}
        {loading}
        {next}
      </ScrollView>
    );
  }
});

const styles = StyleSheet.create({
  loadNext: {
    color: '#fff',
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#fff',
    width: 60,
    height: 60,
    paddingTop: 20,
    paddingBottom: 10,
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius: 30,
  },
  loading: {
    color: '#fff',
    flex: 1,
    fontSize: 25,
    textAlign: 'center'
  },
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
    marginTop: 50,

    backgroundColor: '#442358'
  },
});
