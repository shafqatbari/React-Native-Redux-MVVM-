import React, { Component } from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import colors from '../helper/colors';
import { ArrowsIcon, CloseIcon, LogSymptomIcon, PlaySVG } from '../helper/CommonImagesPath';
import SvgImage from '../helper/SvgImage';
import { screenWidth } from '../helper/Util';
import ButtonTouchable from './ButtonTouchable';
import TextTouchable from './TextTouchable';


const PopUpModalView = ({
  isShow,
  onPressClose,
  selectedIndex,
  description,
  onPressStartWorkout,
  onPressRepeatInstructions,
}) => {




  const { container, insideViewIOS, insideViewAndroid, commonInsideView } = styles;

  const deatilsView = () => {

    return (
      <View style={[container, {
        marginHorizontal: 30, borderTopStartRadius: 50,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        paddingVertical: 30
      }]}>
        <View style={{ position: 'absolute', top: -18, right: -12, backgroundColor: colors.White, borderRadius: 100 }}

        >
          <TouchableOpacity
            onPress={onPressClose}
          >
            <SvgImage
              source={CloseIcon}
              style={{ height: 55, width: 55 }}
            />
          </TouchableOpacity>
        </View>
        {
          selectedIndex === 1 ?
            <View style={{
              height: 100, width: '100%', backgroundColor: colors.White,
              justifyContent: 'center', alignItems: 'center', marginTop: 30, flexDirection: 'row'
            }} >
              <SvgImage
                source={PlaySVG}
                style={{ height: 60, width: 60 }}
              />
              <Text style={{ fontFamily: 'CenturyGothicPro-Bold', fontSize: 36, color: colors.BaseBlue, textAlign: 'center', marginStart: 10, }} >
                15:00
              </Text>
            </View>
            :
            selectedIndex === 2 ?
              <View style={{
                width: '100%',
                justifyContent: 'center', alignItems: 'center', marginTop: 30, flexDirection: 'row'
              }} >
                <SvgImage
                  source={ArrowsIcon}
                  style={{ height: 120, width: 242 }}
                />
              </View>
              :
              selectedIndex === 3 ?
                <View>
                  <View style={{
                    backgroundColor: '#626F9A', padding: 20,
                    justifyContent: 'center', alignItems: 'center', marginTop: 30, flexDirection: 'row'
                  }} >
                    <SvgImage
                      source={LogSymptomIcon}
                      style={{ height: 120, width: 100 }}
                    />
                  </View>
                </View>
                :
                null
        }

        <Text style={{ fontFamily: 'Century Gothic', fontSize: 26, color: colors.BaseBlue, textAlign: 'center', marginHorizontal: 30, marginTop: 10 }} >
          {description}
        </Text>
      </View>)
  }
  return (
    <Modal
      transparent={true}
      visible={isShow}
      animationType="none"
      deviceWidth={1}
      deviceHeight={1}
    // style={{ flex: 1, backgroundColor: '#626F9A' }}
    >
      <View style={{
        flex: 1,
        //backgroundColor: 'transparent',
        backgroundColor: 'rgba(15, 28, 76,0.7)',
        alignItems: 'center',
        justifyContent: 'center',
      }} >



        {
          selectedIndex === 4 ?
            <View style={{ marginBottom: 30, marginTop: 20 }} >
              <ButtonTouchable
                Title={'Start Workout'}
                StyleOpacity={{ width: screenWidth * 0.60 }}
                onPress={onPressStartWorkout}

              />

              <View style={{ marginVertical: 10, marginTop: 20 }} >
                <TextTouchable
                  Title={'Repeat instructions'}
                  onPress={onPressRepeatInstructions}
                />
              </View>


            </View>
            :
            deatilsView()
        }
      </View>
    </Modal >
  );

}

export default PopUpModalView;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.Blue50,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  insideViewIOS: {
    height: 80,
    width: 80,
    borderRadius: 5,
  },
  insideViewAndroid: {
    height: 55,
    width: 55,
    borderRadius: 25,
  },
  commonInsideView: {
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
