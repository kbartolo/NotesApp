import { FC } from "react";
import { TouchableOpacity, Text } from "react-native";
import { CircleButtonProps } from "./types";
import {PlusIcon} from 'react-native-heroicons/outline';

const CircleButton: FC<CircleButtonProps> = ({ handleClick }) => {
  return (
    <TouchableOpacity
      className="bg-[#1471d4] rounded-full h-20 w-20 items-center justify-center shadow-lg shadow-black"
      onPress={handleClick}>
      <PlusIcon color="#FFF" size={36}/>
    </TouchableOpacity>
  );
};

export { CircleButton };
