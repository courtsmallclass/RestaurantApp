import * as React from 'react';
import {useState} from 'react';
import { Button, Text, View, TextInput, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// uses a TextInput to collect an email address and another TextInput to collect any comments. Additionally, users are able to rate their experience using buttons. If rating is above a 3, message is displayed saying that the experience was good, else a message says "sorry for the bad experience"

function Survey() {
  const [feedback, setFeedback] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comments, setComs] = useState('')
  return (
    <View style={styles.input}>
      {!feedback ?
        <>
          <Text style={styles.message}> Thank you for ordering from the restaurant! </Text>
        
          <Text style={styles.message2}>We want to hear your feedback!</Text>
          <Text style={styles.labels}>Contact: </Text>
          <TextInput 
          title="name"
          style={styles.inputBoxes}
          placeholder="Your Name"
          value={name}
          onChangeText={(name => setName(name))}
          ></TextInput>
          <TextInput 
          title="email"
          style={styles.inputBoxes}
          placeholder="email address"
          value={email}
          onChangeText={(email => setEmail(email))}
          ></TextInput>
          <Text>Comments: </Text>
          <TextInput 
          title="comments"
          style={styles.commentBox}
          placeholder="type here..."
          value={comments}
          onChangeText={(comments => setComs(comments))}
          ></TextInput>
          <Button 
            title="Submit"
            onPress={() => setFeedback(true)}
          />
        </>
        :
        <>
          <Text style={styles.message}> Thank you, {name}! </Text>
        </>
      }
    </View>
  );
}

const styles= StyleSheet.create ({
    input: {
      marginBottom: "20px",
      marginTop: "20px",
      marginLeft: "5px",
      marginRight: "5px",
      border: "solid black 0.5px",
      padding: "5px",
    },
    message: {
      fontSize: "14px",
      fontWeight: "600",
    },
    message2: {
      fontSize: "13px",
      fontWeight: "450",
      marginLeft: "50px",
      padding: "5px",
    },
    inputBoxes: {
      marginBottom: "5px",
      border: "solid black 0.5px",
      padding: "5px",
    },
    labels: {
      marginBottom: "5px",
      marginTop: "5px",
    },
    commentBox: {
      marginBottom: "5px",
      height: "75px",
      border: "solid black 0.5px",
      padding: "5px", 
    },

});

export default Survey;
