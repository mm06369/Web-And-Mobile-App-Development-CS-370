
import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        { id: 1, title: 'Note 1', content: 'This is the first note.' },
        { id: 2, title: 'Note 2', content: 'This is the second note.' },
        { id: 3, title: 'Note 3', content: 'This is the third note.' },
      ]
    };
  }

  addNote = (note) => {
    this.setState((prevState) => ({
      notes: [...prevState.notes, note]
    }));
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.notes}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('NoteDetails', { note: item })}>
              <View style={styles.itemContainer}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemContent}>{item.content}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
        <TouchableOpacity style={styles.addButton} onPress={() => this.props.navigation.navigate('AddNote', { addNote: this.addNote })}>
          <Text style={styles.addButtonText}>+</Text>
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
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  itemContent: {
    fontSize: 16
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#2196F3',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addButtonText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default HomeScreen;
