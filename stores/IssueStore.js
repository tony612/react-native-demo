let _issues = {};
let _filteredIssues = {};
let _isLoading = false;
let _links = {};

import EventEmitter from "react-native/Libraries/vendor/emitter/EventEmitter";

import _ from 'lodash';

const emitter = new EventEmitter;

function emitChange() {
  emitter.emit("change");
}

module.exports = {
  getIssues() {
    console.log(_filteredIssues.length)
    return _filteredIssues;
  },

  getLoading() {
    return _isLoading;
  },

  addChangeListener(callback) {
    emitter.addListener("change", callback);
  },

  searchIssues(query) {
    if (query === '') {
      _filteredIssues = _issues;
      return;
    }

    _filteredIssues = _.filter(_issues, function(val, key) {
      return val.title.toLowerCase().indexOf(query) != -1
    });
    emitChange();
  },

  getNextLink() {
    return _links.next;
  },

  loadIssues
}

function loadIssues(next = false) {
  let issues = _issues;
  _isLoading = true;
  emitChange();

  let url = "https://api.github.com/repos/facebook/react-native/issues";
  if (next) {
    url = _links.next;
  }
  // https://facebook.github.io/react-native/docs/network.html
  fetch(url)
    .then((response) => {
      let links = response.headers.get("Link").split(',');
      let newLinks = {}
      links.forEach(link => {
        let found = link.match(/<(.+)>; rel="(.+)"/);
        if (found) {
          newLinks[found[2]] = found[1];
        }
      });
      _links = newLinks;

      return response.json();
    })
    .then((data) => {
      console.log(data);
      data.forEach(rawIssue => {
        issues[`#${rawIssue.id}`] = rawIssue
      });
      _filteredIssues = _issues = issues;
      _isLoading = false;
      emitChange();
    })
    .catch((error) => {
      console.warn(error);
      _isLoading = false;
      emitChange();
    });
}

loadIssues();
