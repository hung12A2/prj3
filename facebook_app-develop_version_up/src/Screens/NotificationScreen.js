import React, { useEffect, useState, memo } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View, Image, FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from "react-redux";
import {
    _getCache,
    _setCache
} from '../Services/Helper/common';
import { Entypo, FontAwesome } from '@expo/vector-icons';
function NotificationScreen() {
    const { userList, isLoading } = useSelector(
        (state) => state.user
    );
    const data = [
        {
            avatar: "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/116583180_988842198209094_2197631390780475232_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeGZGNi3RSiaqXSJgSal64gOMUgUA6xjOloxSBQDrGM6Wu4kcBIawpI6TwKN732J8nTI_ZqZXjfg7u0a3YaJGGai&_nc_ohc=hnjCd7XveCcAX8QyqGm&_nc_ht=scontent.fhan2-4.fna&oh=00_AfBhYZdIMrPOXe2blHISeZVq97utgxgm9_tikeNJISczLg&oe=65C347A6",
            name: "Hưng Nguyễn",
            text: "đã bày tỏ cảm xúc về bài viết của bạn: Hello =))",
            time: "7 thg 1 lúc 22:27",
            backgroundColor: 'rgb(231,243,255)',
            index: 0
        },
        {
            avatar: "https://th.bing.com/th/id/R.a03223b558def14e6fa06e310a56ad2c?rik=LGOOHUcSMHzvYw&riu=http%3a%2f%2fcoyotechronicle.net%2fwp-content%2fuploads%2f2014%2f05%2freal-madrid-logos-0424182101.jpg&ehk=xrRqjEWPy16k2rQ3IK5T97iV4Ka0WPuZERgkMi3gtzI%3d&risl=&pid=ImgRaw&r=0",
            name: "Official Real Madrid Fan Club in Vietnam",
            text: "đã bày tỏ cảm xúc về bài viết của bạn: Siuuuuuuuu",
            time: "6 thg 1 lúc 20:35",
            backgroundColor: 'white',
            index: 1
        },
        {
            avatar: "https://th.bing.com/th/id/OIP.-HTIANm2Yn7sJ3AgrAZuSgHaHa?rs=1&pid=ImgDetMain",
            name: "Troll Bóng Đá",
            text: "đã bày tỏ cảm xúc về bài viết của bạn: Fan cứng",
            time: "1 thg 1 lúc 21:27",
            backgroundColor: 'white',
            index: 2
        },
        {
            avatar: "https://psgtalk.com/wp-content/uploads/2016/10/Paris-Saint-Germain-logo.jpg",
            name: "PSG Việt Nam",
            text: "đã bày tỏ cảm xúc về bài viết của bạn: Hello =))",
            time: "7 thg 1 lúc 22:27",
            backgroundColor: 'rgb(231,243,255)',
            index: 3
        },
        {
            avatar: "https://th.bing.com/th/id/OIP.o4vGOdrpx9Gu8SczoxiLAAHaF7?rs=1&pid=ImgDetMain",
            name: "Barca Việt Nam",
            text: "đã bày tỏ cảm xúc về bài viết của bạn: Hello =))",
            time: "7 thg 1 lúc 22:27",
            backgroundColor: 'white',
            index: 4
        },
        {
            avatar: "https://th.bing.com/th/id/OIP.LuwVov1IvULi2aVvX_2WswHaEo?rs=1&pid=ImgDetMain",
            name: "Manchester City Việt Nam",
            text: "đã bày tỏ cảm xúc về bài viết của bạn: Hello =))",
            time: "20 thg 12 lúc 22:27",
            backgroundColor: 'rgb(231,243,255)',
            index: 5
        },
        {
            avatar: "https://th.bing.com/th/id/OIP.BsdITRZ27lsEKThxkmzxyQAAAA?rs=1&pid=ImgDetMain",
            name: "Trung tâm Tin tức VTV24",
            text: "đã bày tỏ cảm xúc về bài viết của bạn: Hello =))",
            time: "30 thg 12 lúc 22:27",
            backgroundColor: 'white',
            index: 6
        },
        {
            avatar: "https://th.bing.com/th/id/R.2763b1e61dd37a62c6a0c65579e4e638?rik=esqTy%2fDv%2b4%2fEsQ&pid=ImgRaw&r=0",
            name: "Leo Messi",
            text: "đã bày tỏ cảm xúc về bài viết của bạn: Hello =))",
            time: "7 thg 1 lúc 22:27",
            backgroundColor: 'rgb(231,243,255)',
            index: 7
        },
        {
            avatar: "https://th.bing.com/th/id/R.42f38b7c4f03b1136ab4b708385aeea9?rik=TMtDLBPBfjTTvQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fArt-Images-Manchester-United-Logo-Wallpapers.jpg&ehk=PX3bogfN01QpLbt73TkG3%2b%2fAcJJWFNLi8AkncjWmowU%3d&risl=&pid=ImgRaw&r=0",
            name: "Huy Ngô",
            text: "đã bày tỏ cảm xúc về bài viết của bạn: Hello =))",
            time: "7 thg 1 lúc 22:27",
            backgroundColor: 'white',
            index: 8
        },
        {
            avatar: "https://th.bing.com/th/id/R.42f38b7c4f03b1136ab4b708385aeea9?rik=TMtDLBPBfjTTvQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fArt-Images-Manchester-United-Logo-Wallpapers.jpg&ehk=PX3bogfN01QpLbt73TkG3%2b%2fAcJJWFNLi8AkncjWmowU%3d&risl=&pid=ImgRaw&r=0",
            name: "Huy Ngô",
            text: "đã bày tỏ cảm xúc về bài viết của bạn: Hello =))",
            time: "7 thg 1 lúc 22:27",
            backgroundColor: 'rgb(231,243,255)',
            index: 9
        },
    ];
    useEffect(() => {
    }, []);
    return (
        <View>
            <FlatList data={data}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    if (item.index === 0) {
                        return (
                            <>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', height: 90, padding: 20}}>
                                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Thông báo</Text>
                                <View style={{backgroundColor: '#DCDCDC', borderRadius: 30, width: 30, height: 30, alignItems: 'center', justifyContent: 'center'}}>
                                <FontAwesome name="search" size={22} color="black" />
                                </View>
                            </View>
                                <TouchableOpacity>
                                <View style={{ flexDirection: 'row', height: 90, justifyContent: 'space-between', backgroundColor: item.backgroundColor }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                                        <Image source={{ uri: item.avatar }} style={{ width: 50, height: 50, borderRadius: 50 }}></Image>
                                        <View style={{ flexDirection: 'column', width: 270, marginLeft: 10 }}>
                                            <Text>
                                                <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                                                <Text>{" " + item.text}</Text>
                                            </Text>
                                            <Text style={{ color: 'gray' }}>{item.time}</Text>
                                        </View>

                                    </View>
                                    <Entypo name="dots-three-horizontal" size={18} color="black" style={{ marginRight: 15, marginTop: 17 }} />
                                </View>
                                </TouchableOpacity>
                            </>
                        );
                    }
                    return (
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', height: 90, justifyContent: 'space-between', backgroundColor: item.backgroundColor }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                                <Image source={{ uri: item.avatar }} style={{ width: 50, height: 50, borderRadius: 50 }}></Image>
                                <View style={{ flexDirection: 'column', width: 270, marginLeft: 10 }}>
                                    <Text>
                                        <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                                        <Text>{" " + item.text}</Text>
                                    </Text>
                                    <Text style={{ color: 'gray' }}>{item.time}</Text>
                                </View>

                            </View>
                            <Entypo name="dots-three-horizontal" size={18} color="black" style={{ marginRight: 15, marginTop: 17 }} />
                        </View>
                        </TouchableOpacity>
                    );
                }}>

            </FlatList>
        </View>
    );
}


export default memo(NotificationScreen);
