export const IMAGES_FETCHED = "IMAGES_FETCHED";
export const IMAGES_FETCHING = "IMAGES_FETCHING";
export const IMAGES_FETCH_FAILD = "IMAGES_FETCH_FAILD";
export const IMAGES_FETCH_INVALID = "IMAGES_FETCH_INVALID";
export const CHANGE_BACKGROUND = "CHANGE_BACKGROUND";
export const MENU_VISIBILIY = "MENU_VISIBILIY";
import * as WebApi from '../config/WebApi';
import fetch from 'isomorphic-fetch';

export const getImages = request => dispatch => {
    dispatch({
        type: IMAGES_FETCHING
    });
    if (typeof request != 'undefined')
        fetch(WebApi.getVRImages.toLowerCase() + request)
            .then(res => res.json())
            .then(res => {
                if (res.IsSuccess) {
                    dispatch({
                        type: IMAGES_FETCHED,
                        payload: res.Value.Result
                    });
                    dispatch(changeBackground(res.Value.Result[0].PhotoPath.toLowerCase()));
                }
                else {
                    dispatch({
                        type: IMAGES_FETCH_FAILD,
                        payload: res.Messages[0].Content
                    })
                }

            });
    // dispatch({
    //     type: IMAGES_FETCHED,
    //     payload: [
    //         {
    //             title: "Entrance",
    //             url: "1.jpg"
    //         },
    //         {
    //             title: "Lobby",
    //             url: "2.jpg"
    //         },
    //         {
    //             title: "Parking",
    //             url: "3.jpg"
    //         },
    //         {
    //             title: "Saloon",
    //             url: "4.jpg"
    //         },
    //         {
    //             title: "Kitchen",
    //             url: "5.jpg"
    //         },
    //         {
    //             title: "Hall",
    //             url: "6.jpg"
    //         },
    //         {
    //             title: "Room",
    //             url: "8.jpg"
    //         },
    //         {
    //             title: "Balcony",
    //             url: "9.jpg"
    //         },
    //         {
    //             title: "Toilet",
    //             url: "10.jpg"
    //         },
    //         {
    //             title: "New Camera",
    //             url: "11.jpg"
    //         },
    //         {
    //             title: "Saloon",
    //             url: "12.jpg"
    //         },
    //     ]
    // });

};
export const changeBackground = (url) => dispatch => {
    dispatch({
        type: CHANGE_BACKGROUND,
        payload: url
    })
};
export const changeMenuVisibility = () => dispatch => {
    dispatch({
        type: MENU_VISIBILIY,
    })
};