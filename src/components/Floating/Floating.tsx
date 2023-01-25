import {FC, useState} from 'react';
import {View} from 'react-native';
import {FloatingProps} from './types';
import {Item} from 'react-native-multi-selectbox-typescript';
import {FloatingItem} from './FloatingItem';
const Floating: FC<FloatingProps> = ({options, setOption}) => {
  console.log("options",options)

  const handleOption = (item: Item | string) => {
    setOption(item);
  };

  return (
    <View
      className={`bg-red-400 items-start rounded-md w-32  bg-[#eff5f5] shadow-lg shadow-black`}>
      {options &&
        options.map((option: Item, index: number) => (
          <FloatingItem key={index} option={option} setOption={handleOption} />
        ))}
    </View>
  );
};

export {Floating};
