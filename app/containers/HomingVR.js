/**
 * Created by s.aliakbari on 8/27/2017.
 */
import React from 'react';
import {View} from 'react-vr';
export default class HomingVR extends React.Component {
    render() {
        return(
        <View>
            {this.props.children}
        </View>
        )
    }
}