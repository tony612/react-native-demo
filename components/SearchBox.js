import React from "react-native";

const {
  View,
  Text,
  StyleSheet,
  TextInput,
} = React;

import IssueStore from '../stores/IssueStore';

export default React.createClass({
  searchIssues: function(query) {
    IssueStore.searchIssues(query);
  },

  render: function() {

    return (
      <View style={styles.container}>
        <TextInput style={styles.searchInput}
          placeholder="Search..."
          onChangeText={this.searchIssues}
        />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  searchInput: {
    height: 40,
    backgroundColor: '#fff',
    padding: 10,
    margin: 5
  },
  container: {
    // flex: 1,
    // alignSelf: 'stretch',

    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#442358',
  },
});
