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
    const newList = [{id: 1, text: 'a',url:'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwNDcyNzkyOV5BMl5BanBnXkFtZTgwNzI1NzkyNzE@._V1_SY1000_CR0,0,674,1000_AL_.jpg'}, {id: 2, text: 'b',url:'https://images-na.ssl-images-amazon.com/images/M/MV5BNjY3Mjg0OTc1OF5BMl5BanBnXkFtZTgwNDU0MzAyNDM@._V1_.jpg'},{id: 3, text: 'c',url:'https://images-na.ssl-images-amazon.com/images/M/MV5BNjY3Mjg0OTc1OF5BMl5BanBnXkFtZTgwNDU0MzAyNDM@._V1_.jpg'}]
    this.setState({ stories: newList, isFetching: false });
  }
  _renderItem = ({item}) => (
     <Image style={{width:120, height:180}} source={{uri:item.url}}/>
  )

  renderSeparator = () => {
    return (
      <View
        style={{
          width: 5
        }}
      />
    );
  }

  render() {
    return (
      
        <View style={styles.wrapper}>
        <View>
        <Text>Hello World!!!</Text>
          <FlatList
            horizontal
            ItemSeparatorComponent={this.renderSeparator}
            onRefresh={() => this.onRefresh()}
            refreshing={this.state.isFetching}
            data={this.state.stories}
            keyExtractor={(item) => item.id}
            renderItem={this._renderItem}
          />
          </View>
          <View>
          <Text>Hello World!!!</Text>
          <FlatList
            horizontal
            ItemSeparatorComponent={this.renderSeparator}
            onRefresh={() => this.onRefresh()}
            refreshing={this.state.isFetching}
            data={this.state.stories}
            keyExtractor={(item) => item.id}
            renderItem={this._renderItem}
          />
          </View>

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
