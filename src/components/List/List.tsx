import {FC} from 'react';
import {View, Text} from 'react-native';
import { isEmpty } from 'lodash';
import {Card} from '../Card';
import {ListProps} from './types';

const List: FC<ListProps> = ({notes,view,onDelete}) => {
  if (isEmpty(notes))
    return (
      <View className='flex items-center mt-10'>
        <Text className='text-xl text-black'>No notes here.</Text>
      </View>
    );

  return (
    <View className={view?.item !== 'List' ? 'flex flex-row flex-wrap items-start mt-2' : ''}>
      {notes && notes.map((item: any, index: number) => (
          <Card key={index} note={item} view={view} onDelete={onDelete}/>
        ))}
    </View>
  );
};

export {List};
