import { View, Text, StyleSheet } from 'react-native';
function SubTitle({ children }) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}
export default SubTitle;
const styles = StyleSheet.create({
  subTitleContainer: {
    marginHorizontal: 22,
    marginVertical: 10,
    padding: 6,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
  },
  subTitle: {
    fontSize: 18,
    color: '#e2b497',
    letterSpacing: 0.8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
