import { View, Text, Image, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme'


const WelcomeScreen = ({navigation}) =>{
  return (
    <SafeAreaView className="flex-1" style={{backgroundColor: themeColors.bg}}>
        <View className="flex-1 flex justify-around my-4">
            <Text 
                className="text-white font-bold text-4xl text-center">
                
            </Text>
            <View className="flex-row justify-center">
                <Image source={require("../assets/images/logos.png") }
                     />
            </View>
            <View className="space-y-4">
                 <Text className="text-xs text-gray-900 dark:text-white text-center font-Poppins mb-4 font-size-20">
                        <Text className="text-center">By tapping ‘Sign in’ you agree to our <Text className=" underline">Terms.</Text></Text>
                <Text className=""> Learn how we process your data in our <Text className=" underline">Privacy Policy</Text> and 
                        <Text className=" underline"> Cookies Policy.</Text></Text>
                        </Text>
                <TouchableOpacity
                    onPress={()=> navigation.navigate('SignUp')}
                    className="py-3 bg-yellow-400 mx-7 rounded-xl">
                        <Text 
                            className="text-xl font-bold text-center text-gray-700"
                        >
                            Sign Up
                        </Text>
                </TouchableOpacity>
                <View className="flex-row justify-center">
                    <Text className="text-white font-semibold">Already have an account?</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                        <Text className="font-semibold text-yellow-400"> Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}
export default WelcomeScreen

const styles = StyleSheet.create({})
