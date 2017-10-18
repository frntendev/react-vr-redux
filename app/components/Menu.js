/**
 * Created by S.Aliakbari on 8/3/2017.
 */
import React from 'react';
import {View, Animated, VrHeadModel,CylindricalPanel} from 'react-vr';
import MenuItem from "./MenuItem";
export default class Menu extends React.Component {
    state = {
        opacity: new Animated.Value(0.9),
    };

    onMenuEnter(e) {
        Animated.timing(
            this.state.opacity,
            {
                toValue: 0.9,
            }
        ).start();
    }

    onMenuExit(e) {
        Animated.timing(
            this.state.opacity,
            {
                toValue: 0.9,
            }
        ).start();
    }

    renderMenuItems() {
        let items = this.props.items;
        let itemsArray = [];
        items.map((item, index) => {
            itemsArray.push(
                <MenuItem
                    key={index}
                    url={item.PhotoPath}
                    title={item.Title}
                    changeBackground={this.props.changeBackground}
                />
            )
        });
        return itemsArray;
    }

    ShouldRenderMenuItems() {
        return (
                <Animated.View
                    onEnter={this.onMenuEnter.bind(this)}
                    onExit={this.onMenuExit.bind(this)}
                    style={{
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        transform: [
                            {translate: [0, -.75, -2]}
                        ],
                        flexDirection: 'row',
                        position: 'relative',
                        layoutOrigin: [0.5, 0.5],
                        justifyContent: 'center',
                        overflow: 'hidden',
                        opacity: this.state.opacity,
                    }}
                >
                    {this.renderMenuItems().reverse()}
                </Animated.View>
        )

    }

    render() {

        return (
            <View>
                {this.ShouldRenderMenuItems()}
            </View>
        )
    }
}
