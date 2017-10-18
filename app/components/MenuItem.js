import React from 'react';
import {
    Text,
    VrButton,
    View,
    Animated,
    Image,
    asset,
    CylindricalPanel
} from 'react-vr';
import rahro from '../../static_assets/rahro.png';
import MenuStyle from '../styles/menu';
export default class MenuItem extends React.Component {
    state = {
        menuBackground: 'rgba(255,255,255,0.4)',
        isShow: false
    };

    renderImage(url) {
        return (
            <Image
                style={{
                    height: 0.18,
                    width: 0.36,
                    zIndex: 99,
                    left: 0,
                    top: 0,
                    marginTop: 0.001

                }}
                source={
                    {
                        uri: url + '_720px.jpg',
                        method: 'GET',
                        headers: {
                            Pragma: 'no-cache',

                        },
                    }
                }
            />

        )
    }

    onMouseClick(e) {
        this.props.changeBackground(this.props.url)
    }
    renderTitle(title){
        return
        switch (title){
            default:
                return 1;
        }
    }
    render() {
        return (

            <VrButton
                onClick={this.onMouseClick.bind(this)}
                style={
                    {
                        borderRadius: 0.01,
                        margin: 0.05,
                    }
                }
            >
                {this.renderImage(this.props.url)}
                <Image style={{
                    width:0.35,
                    height:0.07,
                    marginTop:0.03
                }} source={asset(`title/${this.props.title}.png`)}/>
                {/*<Text style={MenuStyle.title}>*/}
                    {/*{this.props.title}*/}
                {/*</Text>*/}
            </VrButton>

        )
    }
}
