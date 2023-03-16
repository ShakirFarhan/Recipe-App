import { View, Text, StyleSheet } from 'react-native';
function MealDetail({
  duration,
  complexity,
  affordibility,
  styleContainer,
  styleText,
}) {
  return (
    <View style={[styles.container, styleContainer]}>
      <Text style={[styles.detail, styleText]}>{duration}</Text>
      <Text style={[styles.detail, styleText]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detail, styleText]}>
        {affordibility.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealDetail;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 7,
  },
  detail: {
    fontSize: 12,
    letterSpacing: 0.75,
  },
});
