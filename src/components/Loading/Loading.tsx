import { FC } from "react";
import { View, Text } from "react-native";
import { LoadingProps } from "./types";
const Loading: FC<LoadingProps> = ({ text }) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

export { Loading };
