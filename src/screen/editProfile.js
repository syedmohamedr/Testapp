import { View, Text ,TextInput,TouchableOpacity,Image} from 'react-native'
import React from 'react'

const editProfile = () => {
  return (
    <View>
      <View style={{flex: 1, backgroundColor: 'white', height: 10}}>
            <View style={{height: 100}}>
              {/* <Image
                source={require('../assets/images/dna.png')}
                style={{borderRadius: 30, left: 100}}
              /> */}
              <TextInput
                placeholder="Edgaryaan"
                style={{borderWidth: 0.3, borderColor: 'black'}}
              />
              <TextInput
                placeholder="Edgaryaan@gmail.com"
                style={{borderWidth: 0.3, borderColor: 'black'}}
              />
              <TextInput
                placeholder="+91-9656523364"
                style={{borderWidth: 0.3, borderColor: 'black'}}
              />
            </View>
            <TouchableOpacity onPress={toggleModal}>
              <Icon
                name="checkcircle"
                size={22}
                style={{
                  marginTop: 210,
                  marginLeft: 320,
                }}
              />
            </TouchableOpacity>
          </View>
    </View>
  )
}

export default editProfile