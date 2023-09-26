import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '../common/Title'
import SmallCard from '../cards/SmallCard'



export default function HorizontalList({title,data}) {
  return (
    <>
   <Title size={20}>{title}</Title>
   <View style={styles.listStyle}>
   
   <FlatList data={data} keyExtractor={item=>item.id} horizontal showsHorizontalScrollIndicator={false}
   renderItem={({item})=><SmallCard item={item}/> } />

   </View>
  </>
  )
}

const styles = StyleSheet.create({
    listStyle:{
        marginVertical:15,
    }
})