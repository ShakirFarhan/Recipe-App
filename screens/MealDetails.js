import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetail from '../components/MealDetail';
import SubTitle from '../components/SubTitle';
import List from '../components/List';
import { useLayoutEffect } from 'react';
import BookmarkBtn from '../components/BookmarkBtn';
import { useSelector, useDispatch } from 'react-redux';
import { addBookmark } from '../store/reducers/Bookmark';
import { removeBookmark } from '../store/reducers/Bookmark';
const MealDetails = ({ route, navigation }) => {
  const mealsIds = useSelector((state) => state.bookmark.ids);
  const dispatch = useDispatch();
  const id = route.params.id;
  const meal = MEALS.find((e) => e.id == id);
  const alreadyBookmarked = mealsIds.includes(id);
  const bookmarkPressHandler = () => {
    if (alreadyBookmarked) {
      dispatch(removeBookmark({ id: id }));
    } else {
      dispatch(addBookmark({ id: id }));
    }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <BookmarkBtn
            color="white"
            name={alreadyBookmarked ? 'star' : 'star-outline'}
            onPress={bookmarkPressHandler}
          />
        );
      },
      title: meal.title + ' Details',
    });
  }, [navigation, mealsIds]);
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetail
        duration={meal.duration}
        affordibility={meal.affordability}
        complexity={meal.complexity}
        styleContainer={null}
        styleText={styles.detailsText}
      />
      <View style={styles.innerContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={meal.ingredients} />
          <SubTitle>Steps</SubTitle>
          <List data={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};
export default MealDetails;
const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  image: {
    height: 300,
    width: '100%',
  },
  innerContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },

  title: {
    fontSize: 24,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
    marginTop: 5,
  },
  detailsText: {
    color: 'white',
  },
});
