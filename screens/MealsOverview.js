import { useLayoutEffect } from 'react';
import { FlatList } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import MealCard from '../components/MealCard';
import { MEALS } from '../data/dummy-data';
import Meal from '../models/meal';
import { CATEGORIES } from '../data/dummy-data';
import { useNavigation } from '@react-navigation/native';
import MealsList from '../components/MealsList';
function MealsOverview({ route }) {
  const { categoryId } = route.params;
  const navigation = useNavigation();
  const displayedMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(categoryId) >= 0;
  });
  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find((e) => e.id == categoryId).title;
    navigation.setOptions({
      title: catTitle,
    });
  }, [categoryId, navigation]);
  return <MealsList items={displayedMeals} />;
}
export default MealsOverview;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
