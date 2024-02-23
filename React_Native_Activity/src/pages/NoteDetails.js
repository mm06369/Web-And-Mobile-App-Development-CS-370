import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

class NoteDetailsScreen extends Component {
  constructor(props) {
    super(props);
    const note = this.props.route.params.note;
    this.state = {
      id: note.id,
      title: note.title,
      content: note.content
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.titleInput}
          placeholder="Note Title"
          value={this.state.title}
          onChangeText={(text) => this.setState({ title: text })}
        />
        <TextInput
          style={styles.contentInput}
          placeholder="Note Content"
          multiline={true}
          value={this.state.content}
          onChangeText={(text) => this.setState({ content: text })}
        />
        <TouchableOpacity style={styles.deleteButton} onPress={() => this.props.navigation.goBack()}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} onPress={() => this.props.route.params.onUpdate(this.state)}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
  titleInput: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  contentInput: {
    fontSize: 16,
    marginBottom: 20,
    textAlignVertical: 'top',
    height: 200,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5
  },
  deleteButton: {
    backgroundColor: '#ff0000',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  deleteButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  },
  saveButton: {
    backgroundColor: '#2196F3',
    borderRadius: 5,
    padding: 10
  },
  saveButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default NoteDetailsScreen;
