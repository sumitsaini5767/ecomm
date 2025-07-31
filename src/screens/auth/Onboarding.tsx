import { View, Text, Image } from 'react-native'
import React from 'react'
import ImagePath from '../../constants/ImagePath'

const OnBoarding = () => {
  return (
    <View className='flex-1 px-5'>
      <View className='flex-1'>
        <View className='bg-cyan-50 h-3/6 p-5 rounded-3xl'>
          <View className='flex-row justify-between'>
            <Image source={ImagePath.Logo_themeLight} className='w-28 h-8' resizeMode='contain' />
            <Text className='text-2xl font-bold text-cyan-500'>Skip for now</Text>
          </View>
          <View className=' flex-1 justify-center items-center'>
            <Image source={ImagePath.OnlineShopping} className='h-60 w-60' resizeMode='contain' />
          </View>
        </View>
      </View>
    </View>
  )
}

export default OnBoarding