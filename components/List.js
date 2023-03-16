import { View, Text, StyleSheet } from 'react-native';
function List({ data }) {
  return (
    <View style={styles.container}>
      {data.map((e) => (
        <Text style={styles.listItem} key={e}>
          {e}
        </Text>
      ))}
    </View>
  );
}
export default List;
const styles = StyleSheet.create({
  container: {
    rowGap: 10,
    marginHorizontal: 20,
  },
  listItem: {
    textAlign: 'center',
    backgroundColor: '#e2b497',
    padding: 5,
    borderRadius: 8,
  },
});
