import { FC } from "react";
import { View, TextInput } from "react-native";
import { SearchProps } from "./types";
const Search: FC<SearchProps> = ({ text }) => {
  return (
    <View className="flex text-center pt-2 px-2">
        <TextInput className="bg-gray-300 p-2 text-gray-800 text-center rounded-lg h-8" placeholder="Search" keyboardType="default" />
      </View>
  );
};

export { Search };
