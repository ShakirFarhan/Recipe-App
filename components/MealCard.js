import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';

function MealCard({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress,
  navigation,
}) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        android_ripple={{ color: '#ccc' }}
        onPress={onPress}
      >
        <View style={{ borderRadius: 8, overflow: 'hidden' }}>
          <Image style={styles.image} source={{ uri: imageUrl }} />

          <Text style={styles.title}>{title}</Text>
          <View style={styles.detailBlock}>
            <Text style={styles.detailItem}>{duration}</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealCard;
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    marginBottom: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    overflow: Platform.OS == 'android' ? 'hidden' : 'visible',
  },

  title: {
    fontSize: 19,
    fontWeight: 'bold',
    letterSpacing: 0.3,
    textAlign: 'center',
    marginTop: 5,
  },
  image: {
    width: '100%',
    height: 180,
  },
  detailItem: {
    fontSize: 12,
    marginTop: 5,
  },
  detailBlock: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonPressed: {
    opacity: 0.4,
  },
});
