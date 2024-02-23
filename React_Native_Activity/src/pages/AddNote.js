
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

class AddNoteScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    };
  }

  onSaveNote = () => {
    const newNote = { 
      id: Math.floor(Math.random() * 100) + 1, 
      title: this.state.title, 
      content: this.state.content 
    };
    this.props.route.params.addNewNoteHandler(newNote);
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Add New Note</Text>
        <TextInput
          style={styles.input}
          placeholder="Title"
          onChangeText={(text) => this.setState({ title: text })}
          value={this.state.title}
        />
        <TextInput
          style={[styles.input, styles.contentInput]}
          placeholder="Content"
          onChangeText={(text) => this.setState({ content: text })}
          value={this.state.content}
          multiline={true}
        />
        <TouchableOpacity style={styles.saveButton} onPress={this.onSaveNote}>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    fontSize: 20,
    marginBottom: 20,
    paddingVertical: 5
  },
  contentInput: {
    height: 200
  },
  saveButton: {
    backgroundColor: '#2196F3',
    borderRadius: 5,
    padding: 10,
    alignSelf: 'flex-end'
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default AddNoteScreen;
