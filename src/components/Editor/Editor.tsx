import {FC, SetStateAction, useRef, useState} from 'react';
import {ScrollView, StyleSheet, View, PermissionsAndroid} from 'react-native';
import {actions, RichEditor, RichToolbar} from 'react-native-pell-rich-editor';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {CameraIcon} from 'react-native-heroicons/outline';
import {EditorProps} from './types';

const Editor: FC<EditorProps> = ({setText,value}) => {
  const richText: any = useRef();
  const [, setDescHTML] = useState('');

  let options: any = {
    saveToPhotos: true,
    mediaType: 'photo',
    includeBase64: true,
  };


  const richTextHandle = (descriptionText: string) => {
    if (descriptionText) {
      setDescHTML(descriptionText);
      setText(descriptionText)
    } else {
      setDescHTML('');
    }
  };

  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result: any = await launchCamera(options);
      const base64Img = `data:${result.assets[0].type};base64,${result.assets[0].base64}`;
      richText.current.insertImage(base64Img);
    }
  };

  const openGallery = async () => {
    const result: any = await launchImageLibrary(options);
    const base64Img = `data:${result.assets[0].type};base64,${result.assets[0].base64}`;
    richText.current.insertImage(base64Img);
  };

  return (
    <ScrollView className="flex pb-48 bg-white">
      <View className="flex bg-white pb-12 flex-col-reverse">
        <RichEditor
          ref={richText}
          onChange={richTextHandle}
          placeholder="Write your cool content here :)"
          androidHardwareAccelerationDisabled={true}
          style={[styles.richTextEditorStyle]}
          containerStyle={{minHeight: 550}}
          initialHeight={500}
          initialContentHTML={value}
        />
        <RichToolbar
          editor={richText}
          selectedIconTint="#873c1e"
          iconTint="#312921"
          style={styles.richTextToolbarStyle}
          actions={[
            'insertCamera',
            actions.insertImage,
            actions.setBold,
            actions.setItalic,
            actions.insertBulletsList,
            actions.insertOrderedList,
            actions.setUnderline,
          ]}
          iconMap={{
            insertCamera: ({tintColor}) => (
              <View style={{marginRight: 10}}>
                <CameraIcon color={tintColor} size={24} />
              </View>
            ),
          }}
          onPressAddImage={() => {
            openGallery();
          }}
          insertCamera={() => {
            openCamera();
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  richTextEditorStyle: {
    fontSize: 20,
    paddingBottom: 100,
    elevation: 10,
  },
  richTextToolbarStyle: {
    backgroundColor: 'white',
    borderColor: '#c6c3b3',
    borderBottomWidth: 1,
  },
});

export {Editor};
