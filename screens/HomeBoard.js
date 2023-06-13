import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

const HomeBoard = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [alertLevel, setAlertLevel] = useState('');
  const [location, setLocation] = useState('');

  const handlePostSubmit = () => {
    if (newPost && alertLevel && location) {
      setPosts([...posts, { content: newPost, alertLevel, location, comments: [] }]);
      setNewPost('');
      setAlertLevel('');
      setLocation('');
    }
  };

  const handlePostPress = post => {
    navigation.navigate('PostScreen', { post });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Escriba su alerta..."
        value={newPost}
        onChangeText={text => setNewPost(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nivel de Alerta (Alta, Medio, Baja, Información)"
        value={alertLevel}
        onChangeText={text => setAlertLevel(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Lugar"
        value={location}
        onChangeText={text => setLocation(text)}
      />
      <Button title="Post" onPress={handlePostSubmit} color="#FF6E40" />
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePostPress(item)} style={styles.postContainer}>
            <Text style={styles.postText}>{item.content}</Text>
            <Text style={styles.alertLevelText}>Alert Level: {item.alertLevel}</Text>
            <Text style={styles.locationText}>Location: {item.location}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const PostScreen = ({ navigation }) => {
  const [newComment, setNewComment] = useState('');
  const post = navigation.getParam('post');
  const { content, alertLevel, location, comments } = post;

  const handleCommentSubmit = () => {
    if (newComment) {
      post.comments.push(newComment);
      setNewComment('');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.postText}>{content}</Text>
      <Text style={styles.alertLevelText}>Alert Level: {alertLevel}</Text>
      <Text style={styles.locationText}>Location: {location}</Text>
      <TextInput
        style={styles.input}
        placeholder="Escriba un comentario..."
        value={newComment}
        onChangeText={text => setNewComment(text)}
      />
      <Button title="Comment" onPress={handleCommentSubmit} color="#FF6E40" />
      <FlatList
        data={comments}
        renderItem={({ item }) => <Comment content={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const Comment = ({ content }) => {
  return (
    <View style={styles.commentContainer}>
      <Text style={styles.commentText}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
  postContainer: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  postText: {
    fontSize: 16,
    marginBottom: 5,
  },
  alertLevelText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  locationText: {
    fontSize: 14,
  },
  backButton: {
    alignSelf: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FF6E40',
    marginBottom: 10,
    borderRadius: 5,
  },
  backButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  commentContainer: {
    backgroundColor: '#E0E0E0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  commentText: {
    fontSize: 14,
    color: '#333333',
  },
});

export { HomeBoard, PostScreen };
