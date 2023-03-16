import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryCard from '../components/CategoryCard';
function Categories({ navigation }) {
  function Category(itemData) {
    const pressHandler = () => {
      navigation.navigate('Meals Overview', { categoryId: itemData.item.id });
    };
    return (
      <CategoryCard
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={Category}
      numColumns={2}
    />
  );
}
export default Categories;
