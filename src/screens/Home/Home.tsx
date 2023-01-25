import {FC, useState, useEffect, useCallback} from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {HomeProps} from './types';
import {useNavigation} from '@react-navigation/native';
import {useIsFocused} from '@react-navigation/core';
import {Item} from 'react-native-multi-selectbox-typescript';
import {
  Search,
  ToolBar,
  List,
  CircleButton,
  Loading,
  NoteType,
} from '@components';
import {useAsyncStorage} from '@hooks';
import {useMenu} from '@context';

const Home: FC<HomeProps> = () => {
  const navigation = useNavigation();
  const {storedValue, getStored, setStored} = useAsyncStorage('notes', {});
  const [view, setView] = useState<Item | undefined>();
  const [tag, setTag] = useState<Item | string>('');
  const [isDeleted, setIsDeleted] = useState<boolean>(false);
  const {showMenuOptions, onShowMenuOptions} = useMenu();
  const isFocused = useIsFocused();

  console.log('view', view);
  const goDetail = () => {
    onShowMenuOptions(false);
    navigation.navigate('Note');
  };

  const onFocus = () => {
    onShowMenuOptions(false);
  };

  const onHandleDelete = useCallback(
    (item: NoteType) => {
      setStored(storedValue.filter((x: NoteType) => x?.id !== item?.id));
      setIsDeleted(true);
    },
    [storedValue],
  );

  useEffect(() => {
    getStored('notes');
  }, [isFocused, isDeleted]);

  if (!storedValue) return <Loading text={'Loading...'} />;

  return (
    <SafeAreaView className={`bg-white pb-2 ${showMenuOptions}`}>
      <ToolBar onView={setView} onTag={setTag} />
      <TouchableWithoutFeedback onPress={onFocus}>
        <View className="relative">
          <Search text="" />
          <ScrollView
            className="h-full pb-2"
            contentContainerStyle={{paddingBottom: 100}}>
            <List notes={storedValue} view={view} onDelete={onHandleDelete} />
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
      <View className="flex absolute bottom-36 right-6">
        <CircleButton handleClick={goDetail} />
      </View>
    </SafeAreaView>
  );
};

export {Home};
