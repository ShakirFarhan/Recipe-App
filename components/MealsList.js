import MealCard from './MealCard';
import { StyleSheet, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
function MealsList({ items }) {
  const navigation = useNavigation();

  const MealItem = (item) => {
    const mealsProps = {
      id: item.item.id,
      title: item.item.title,
      imageUrl: item.item.imageUrl,
      affordability: item.item.affordability,
      complexity: item.item.complexity,
      duration: item.item.duration,
    };
    return (
      <MealCard
        onPress={() =>
          navigation.navigate('Meals Details', { id: mealsProps.id })
        }
        {...mealsProps}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={MealItem}
      />
    </View>
  );
}
export default MealsList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
