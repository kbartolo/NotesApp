import {FC, useState,useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {ToolBarProps} from './types';
import {ListBulletIcon} from 'react-native-heroicons/outline';
import {TagIcon} from 'react-native-heroicons/outline';
import {PlusCircleIcon} from 'react-native-heroicons/outline';
import {Floating} from '../Floating/Floating';
import {Item} from 'react-native-multi-selectbox-typescript';
import {useAsyncStorage} from '@hooks';
import {useMenu} from '@context';

const ToolBar: FC<ToolBarProps> = ({onView,onTag}) => {
  const [visible, setVisible] = useState<any>({tag:false,view:false});
  const {showMenuOptions, onShowMenuOptions} = useMenu();
  const {storedValue} = useAsyncStorage('tags', [
    {id: 'sdf', item: 'Aston Vila'},
    {id: 'vdf', item: 'Tomate'},
    {id: 'cvasa', item: 'Mass'},
  ]);

  const onShowTag = () => {
    setVisible({tag:true,view:false});
    onShowMenuOptions(true)
  };

  const onShowView = () => {
    setVisible({tag:false,view:true});
    onShowMenuOptions(true)
  };

  const onBlur = () => {
    setVisible({tag:false,view:false});
    onShowMenuOptions(false)
  };

  const onHandleTag= (option:Item)=>{
    onTag(option)
    onBlur()
  }

  const onHandleView= (option:Item)=>{
    onView(option)
    onBlur()
  }

  const list = [
    {id: 'v1', item: 'List'},
    {id: 'v2', item: 'Grid'},
  ];

  return (
    <TouchableWithoutFeedback onPress={onBlur}>
      <View className="flex bg-[#1471d4] z-20">
        <View className="flex flex-row justify-between mx-4 space-x-2">
          <Text className="text-2xl text-white p-2">Notes</Text>
          <View className="flex-row space-x-6 items-center">
            <TouchableOpacity className="py-2 px-3">
              <PlusCircleIcon size={26} color="#FFF" />
            </TouchableOpacity>
            <TouchableOpacity onPress={onShowTag} className="py-2 px-3">
              <TagIcon size={25} color="#FFF" />
              {showMenuOptions && visible["tag"] && (
                <View className="relative">
                  <View className="absolute z-30 right-0">
                    <Floating options={storedValue} setOption={onHandleTag} />
                  </View>
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={onShowView} className="py-2 px-3">
              <ListBulletIcon size={25} color="#FFF" />
              {showMenuOptions && visible["view"] && (
                <View className="relative">
                  <View className="absolute z-30 right-0">
                    <Floating options={list} setOption={onHandleView} />
                  </View>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export {ToolBar};
