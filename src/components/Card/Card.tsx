import {FC, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import RenderHtml from 'react-native-render-html';
import {isEmpty} from 'lodash';
import {CardProps} from './types';
import {useNavigation} from '@react-navigation/native';
import {TrashIcon} from 'react-native-heroicons/outline';
import {limitText} from '@helpers/utils';

const Card: FC<CardProps> = ({note, view, onDelete}) => {
  const navigation = useNavigation();
  const {width} = useWindowDimensions();

  const source = {
    html: note?.desc || '',
  };
  const tagsStyles: any = {
    img: {
      objectFit: 'fill',
      height: 100,
      width: width / 2 - width * 0.1,
    },
  };
  const goDetail = () => {
    navigation.navigate('Note', {note: note});
  };

  const onHandleDelete = () => {
    onDelete(note);
  };

  return (
    <TouchableOpacity
      className={view?.item !== 'List' ? 'w-[46%] m-[2%]' : ''}
      onPress={goDetail}>
      {view?.item === 'List' ? (
        <View className="mt-1 border-b border-gray-300 pb-3 relative">
          <View className="mx-3 flex flex-row justify-between items-center">
            <View className="flex flex-column items-center space-x-4">
              <Text className="text-black font-bold text-2xl mt-2">
                {note?.title}
              </Text>
              <Text className="text-gray-400 mt-2">
                {!isEmpty(note) &&
                  limitText(note.tags.map((x: any) => x.item).join(' '), 60)}
              </Text>
            </View>
            <View className="flex flex-row items-center space-x-4">
              <Text className="mt-2 font-bold">{note?.createdDate}</Text>
              <TouchableOpacity
                onPress={onHandleDelete}
                className="relative h-14 w-14 z-20 items-center justify-center">
                <TrashIcon size={26} color="#7b8fa1" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <View className="rounded-lg bg-white h-60 px-2 shadow-md shadow-black">
          <View>
            <Text className="text-black font-bold text-2xl mt-2">
              {note?.title}
            </Text>
          </View>

          <View className="overflow-hidden h-28">
            <RenderHtml
              contentWidth={width / 2}
              source={source}
              tagsStyles={tagsStyles}
            />
          </View>
          <Text className="text-gray-400 mt-2">
            {note?.tags.map((x: any) => x.item).join(' ')}
          </Text>
          <View className="flex flex-row justify-between">
            <Text className="mt-2 font-bold">{note?.createdDate}</Text>
            <TouchableOpacity
              onPress={onHandleDelete}
              className="relative h-8 w-10 z-20 items-center justify-center">
              <TrashIcon size={26} color="#7b8fa1" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  a: {
    fontWeight: 'bold',
    color: 'purple',
  },
  div: {
    fontFamily: 'monospace',
  },
  p: {
    fontSize: 30,
  },
  img: {
    width: '100%',
    height: 50,
  },
});

export {Card};
