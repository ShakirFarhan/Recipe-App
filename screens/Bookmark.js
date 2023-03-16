import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import MealsList from '../components/MealsList';
import { MEALS } from '../data/dummy-data';
function Bookmark() {
  const mealsIds = useSelector((state) => state.bookmark.ids);
  const booksmarks = MEALS.filter((e) => mealsIds.includes(e.id));
  if (booksmarks.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You Dont have any Bookmarks</Text>
      </View>
    );
  }
  return <MealsList items={booksmarks} />;
}
export default Bookmark;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 17,
    color: 'white',
  },
});
