import React from 'react';
import { View } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';


const BottomeSheet = ({ height, refRBSheet, children, onClose, onOpen, stictOpen }) => {

    return (
        <RBSheet
            ref={refRBSheet}
            height={height}
            closeOnDragDown={stictOpen === false ? stictOpen : true}
            closeOnPressMask={stictOpen === false ? stictOpen : true}
            customStyles={{
                container: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20
                },
            }}
            onClose={onClose}
            onOpen={onOpen}>
            {children}
        </RBSheet>
    );
}


export default BottomeSheet;
