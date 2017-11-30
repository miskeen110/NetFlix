import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet, FlatList,Image} from 'react-native';


export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [{id: 1, text: 'option1',url:'https://www.w3schools.com/images/w3schools_green.jpg'}, {id: 2, text: 'option2',url:'https://www.w3schools.com/images/w3schools_green.jpg'}, {id: 3, text: 'option3',url:'https://www.w3schools.com/images/w3schools_green.jpg'}],
      isFetching: false,
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  onRefresh() {
    console.log('refreshing')
    this.setState({ isFetching: true }, function() {
      this.fetchData()
    });
  }
  fetchData() {
    alert('test');
    const newList = [{id: 1, text: 'a',url:'https://www.w3schools.com/images/w3schools_green.jpg'}, {id: 2, text: 'b',url:'https://www.w3schools.com/images/w3schools_green.jpg'}, {id: 3, text: 'c',url:'https://www.w3schools.com/images/w3schools_green.jpg'}]
    this.setState({ stories: newList, isFetching: false });
  }
  _renderItem = ({item}) => (
     <Image style={{width:120, height:180}} source={{uri:item.url}}/>
  )
  render() {
    return (
      
        <View style={styles.wrapper}>
        <Text>Hello World!!!</Text>
          <FlatList
          horizontal
            onRefresh={() => this.onRefresh()}
            refreshing={this.state.isFetching}
            data={this.state.stories}
            keyExtractor={(item) => item.id}
            renderItem={this._renderItem}
          />
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  }
});
