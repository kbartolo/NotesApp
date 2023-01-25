import {FC} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {FloatingItemProps} from './types';
const FloatingItem: FC<FloatingItemProps & TouchableOpacityProps> = ({
  option,
  setOption,
}) => {

  const handleClick = () => {
    setOption(option)
  };

  return (
    <TouchableOpacity  className="w-full" onPress={handleClick}>
      <View className="pl-4 py-2">
        <Text className="text-[#3c4048] capitalize">{option.item}</Text>
      </View>
    </TouchableOpacity>
  );
};

export {FloatingItem};
