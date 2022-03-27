import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import PhoneInput from "react-native-phone-number-input";
const Login = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [number, setNumber] = useState('+91718786729');
  const [Email, setEmail] = useState('edgaryaan@gmail.com');
  const [name, setName] = useState('Edgaryaan');
  const [value, setValue] = useState("");

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row', marginTop: 10,}}>
        <Icon
          name="arrowleft"
          size={22}
          style={{marginLeft: 10}}
          color="green"
        />
        <Text style={{fontWeight: 'bold', marginLeft: 20}}>Profile</Text>
        <TouchableOpacity onPress={toggleModal}>
          <Icon name="edit" size={22} style={{marginLeft: 250}} color="green" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 50,
          justifyContent: 'center',
          // borderBottomWidth: 1,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          }}
          style={{borderRadius: 50, alignSelf:"center", height: 100, width: 100}}
        />
        <View style={{justifyContent: 'center', marginRight: 10}}>
          <Text style={{alignSelf:"center",fontWeight:"bold"}}>{name}</Text>
          <Text style={styles.text}>{Email}</Text>
          <Text style={styles.text}>{number}</Text>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 100}}>
          <TouchableOpacity style={styles.touchable}>
            <Feather
              name="shopping-bag"
              size={22}
              color="#4a4f51"
              style={{marginRight: '5%'}}
            />
            <Text style={styles.pressabletext}>Orders</Text>
            <Icon
              name="right"
              size={22}
              color="#4a4f51"
              style={{position: 'absolute', right: 0}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable}>
            <EvilIcons
              name="lock"
              size={22}
              color="#4a4f51"
              style={{marginRight: '5%'}}
            />
            <Text style={styles.pressabletext}>Change password</Text>
            <Icon
              name="right"
              size={22}
              color="#4a4f51"
              style={{position: 'absolute', right: 0}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable}>
            <Icon
              name="contacts"
              size={22}
              color="#4a4f51"
              style={{marginRight: '5%'}}
            />
            <Text style={styles.pressabletext}>Manage Address</Text>
            <Icon
              name="right"
              size={22}
              color="#4a4f51"
              style={{position: 'absolute', right: 0}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable}>
            <Feather
              name="help-circle"
              size={22}
              color="#4a4f51"
              style={{marginRight: '5%'}}
            />
            <Text style={styles.pressabletext}>Help</Text>
            <Icon
              name="right"
              size={22}
              color="#4a4f51"
              style={{position: 'absolute', right: 0}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable}>
            <Feather
              name="log-out"
              size={22}
              color="#4a4f51"
              style={{marginRight: '5%'}}
            />
            <Text style={styles.pressabletext}>Logout</Text>
            <Icon
              name="right"
              size={22}
              color="#4a4f51"
              style={{position: 'absolute', right: 0}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Modal isVisible={isModalVisible} transparent={true}>
          <View
            style={{
              backgroundColor: 'white',
              height: '60%',
              padding: 20,
              position: 'absolute',
              top: 0,
            }}>
            <View>
              <Image
                source={{
                  uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                }}
                style={{borderRadius: 30, left: 100, height: 100, width: 100}}
              />
              <TextInput
                placeholder="Edgaryaan"
                style={styles.textInput}
                onChangeText={(e) => setName(e)}
              />
              {console.log('enter name',name)}
              <TextInput
                placeholder="Edgaryaan@gmail.com"
                style={styles.textInput}
                onChangeText={(e) => setEmail(e)}
              />
              {console.log('enter email',Email)}
              <PhoneInput
                placeholder="9656523364"
                style={styles.textInput}
                onChangeText={(e) => setNumber(e)}
                
              />
            {console.log('enter number',number)}
            </View>
            <TouchableOpacity onPress={toggleModal}>
              <Icon
                name="checkcircle"
                size={22}
                style={{
                  marginTop: 20,
                  marginLeft: 290,
                }}
                color="green"
              />
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
 
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  pressabletext: {
    fontWeight: 'bold',
    
  },
  text:{
    alignSelf:"center",
    
  },
  textInput:{
    borderWidth: 0.3,
     borderColor: 'black',
     margin:5
  },
});
export default Login;
