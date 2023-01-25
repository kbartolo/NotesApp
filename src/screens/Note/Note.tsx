import {FC, useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import uuid from 'react-native-uuid';
import {isEmpty} from 'lodash';
import {Item} from 'react-native-multi-selectbox-typescript';
import {ArrowLeftIcon, CheckIcon} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';
import {CustomSelect, Editor, NoteType} from '@components';
import {useAsyncStorage} from '@hooks';
import {NoteProps} from './types';

const Note: FC<NoteProps> = ({route}) => {
  const navigation = useNavigation();
  const {setStored, storedValue} = useAsyncStorage('notes', []);
  const {storedValue: tags} = useAsyncStorage('tags', []);
  const noteItem = route?.params?.note;
  const initNote = {id: '', title: '', desc: '', tags: [], createdDate: ''};
  const [note, setNote] = useState<any>(noteItem || initNote);

  const handleChange = (field: string, value: string | Item[]) => {
    setNote({...note, [field]: value});
  };

  const onSave = () => {
    if (isEmpty(note.title) || isEmpty(note.desc)) {
      Alert.alert('Notes', "The title and note shouldn't be empty.", [
        {
          text: 'Accept',
          onPress: () => console.log('Accept Pressed'),
          style: 'cancel',
        },
      ]);
      return;
    }

    let notes = !isEmpty(storedValue) ? storedValue : [];
    let newNote: NoteType = undefined;
    if (isEmpty(note.id)) {
      newNote = {
        ...note,
        id: uuid.v4().toString(),
        createdDate: new Date().toDateString(),
      };
      notes.push(newNote);
    } else {
      notes = notes.map((x: NoteType) => (x?.id === note.id ? note : x));
    }

    setStored(notes);
    navigation.goBack();
  };

  return (
    <SafeAreaView className="pb-2 bg-white flex">
      <View className="bg-[#1471d4] flex flex-row justify-between">
        <TouchableOpacity onPress={navigation.goBack} className="p-3">
          <ArrowLeftIcon size={26} color="#FFF" />
        </TouchableOpacity>
        <View className="flex-row space-x-1">
          <TouchableOpacity className="p-3" onPress={onSave}>
            <CheckIcon color="#FFF" size={26} />
          </TouchableOpacity>
        </View>
      </View>
      <View className="px-1 ">
        <TextInput
          placeholder="Title"
          className="bg-white h-10 w-full font-bold text-black text-lg mt-3 mb-1"
          onChangeText={value => handleChange('title', value)}
          value={note?.title}
        />
      </View>
      <CustomSelect
        options={tags}
        tags={note.tags}
        onSelected={tags => handleChange('tags', tags)}
      />
      <View className="border-b border-gray-300">
        <Text className="text-gray-400 text-md mx-3 mb-3">
          {note?.createdDate || new Date().toDateString()}
        </Text>
      </View>
      <Editor setText={text => handleChange('desc', text)} value={note?.desc} />
    </SafeAreaView>
  );
};

export {Note};
