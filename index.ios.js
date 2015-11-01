/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

import Issues from './components/Issues';
import SearchBox from './components/SearchBox';

var AwesomeProject = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Issues />
        <SearchBox />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 20,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
