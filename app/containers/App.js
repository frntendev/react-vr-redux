/**
 * Created by S.Aliakbari on 7/30/2017.
 */
import React from 'react';
import * as Actions from '../actions/index';
import {connect} from 'react-redux';
import query from 'query-string';
import {NativeModules} from 'react-vr';
import {
    asset,
    Pano,
    Text,
    View,
    StyleSheet,
    Plane,
    VrButton,
    Animated,
    Image,
    CylindricalPanel
} from 'react-vr';
import Menu from '../components/Menu';
class App extends React.Component {

    componentDidMount() {
        // this.props.getImages();
        const LinkingManager = NativeModules.LinkingManager;
        let url = LinkingManager.getInitialURL().then((url) => {
            if (url) {
                let estateId = url.substring(url.indexOf('estateId=') + 9, url.length);
                this.props.getImages(estateId);
            }
        }).catch(err => console.error('An error occurred', err));

    }


    onMenuEnter() {
        this.props.changeMenuVisibility()
    }

    renderPhoto() {
        let imageData = this.props.vrImages.readyState;
        if (imageData === Actions.IMAGES_FETCHED) {
            return (
                <View>
                    <Pano source={
                        {
                            uri: this.props.background + '_main.jpg',
                            method: 'GET',
                            headers: {
                                Pragma: 'no-cache',
                            },
                        }
                    }>
                        <Menu
                            items={this.props.vrImages.result}
                            menuVisibility={this.props.menuVisibility}
                            changeMenuVisibility={this.props.changeMenuVisibility}
                            changeBackground={this.props.changeBackground}
                        />
                        <Image style={{
                            height: 1,
                            width: 1,
                            transform: [
                                {rotateX: -90},
                                {translate: [0, 0, -1]},
                            ],
                            layoutOrigin: [0.5, 0.5],
                        }} source={asset('/floor.png')}/>
                    </Pano>
                </View>
            )
        }
    }

    render() {
        return (
            <View>
                {this.renderPhoto()}
            </View>
        );
    }
}
const mapStateToProps = state => {
    return {
        vrImages: state.vrImages,
        menuVisibility: state.menuVisibility,
        background: state.background
    }
};
const mapDispatchToProps = dispatch => {
    return {
        getImages(req){
            dispatch(Actions.getImages(req))
        },
        changeMenuVisibility(){
            dispatch(Actions.changeMenuVisibility())
        },
        changeBackground(req){
            dispatch(Actions.changeBackground(req))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
