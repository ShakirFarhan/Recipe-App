import { Platform } from 'react-native';
import { View, Pressable, Text, StyleSheet } from 'react-native';

function CategoryCard({ title, color, onPress }) {
  return (
    <View style={[styles.gridItem]}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: '#ccc' }}
        onPress={onPress}
      >
        <View style={[styles.textContainer, , { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default CategoryCard;
const styles = StyleSheet.create({
  gridItem: {
    marginTop: 20,
    flex: 1,
    height: 150,
    margin: 16,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    overflow: Platform.OS == 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
