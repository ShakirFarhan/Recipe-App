import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';
function BookmarkBtn({ color, name, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressedBtn}
    >
      <Ionicons size={21} color={color} name={name} />
    </Pressable>
  );
}
export default BookmarkBtn;
const styles = StyleSheet.create({
  pressedBtn: {
    opacity: 0.7,
  },
});
