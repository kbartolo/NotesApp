import {FC, useState} from 'react';
import SelectBox, {Item} from 'react-native-multi-selectbox-typescript';
import {xorBy} from 'lodash';
import {CustomSelectProps} from './types';

const CustomSelect: FC<CustomSelectProps> = ({onSelected, options, tags}) => {
  const [selectedTags, setSelectedTags] = useState<Item[] | undefined>(tags);
  const onMultiChange = () => {
    return (item: any) => {
      const sortTags = xorBy(selectedTags, [item], 'id');
      setSelectedTags(sortTags);
      onSelected(sortTags);
    };
  };

  return (
    <SelectBox
      label=""
      options={options}
      inputPlaceholder="Tags"
      selectedValues={selectedTags}
      containerStyle={{
        marginBottom: 10,
        borderWidth: 0,
        marginTop: -30,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      multiOptionContainerStyle={{
        backgroundColor: 'black',
        borderWidth: 1,
        marginHorizontal: 5,
      }}
      multiOptionsLabelStyle={{
        fontSize: 15,
        textAlign: 'center',
        padding: 5,
        borderWidth: 0,
      }}
      optionsLabelStyle={{marginHorizontal: 10}}
      onMultiSelect={onMultiChange()}
      onTapClose={onMultiChange()}
      hideInputFilter={true}
      arrowIconColor={'gray'}
      isMulti
    />
  );
};

export {CustomSelect};
