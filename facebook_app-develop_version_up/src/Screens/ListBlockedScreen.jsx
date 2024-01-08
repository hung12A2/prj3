import React, { useEffect, useState, memo } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  View,
  Image,
  Dimensions,
  ScrollView,
  ToastAndroid,
  RefreshControl,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { delay, _getCache, _setCache } from "../Services/Helper/common";
import styles from "./style/profile";
import userService from "../Services/Api/userService";
import MyBlocked from "../Components/MyBlocked";

function ListBlockedScreen({ navigation, route }) {
  const [listBlocked, setListBlocked] = useState([]);

  const user = useSelector((state) => state.user);

  const handleGetListBlocked = async () => {
    try {
      const result = await userService.getBlock(user.id, 0, 10);
      setListBlocked(result.data);
    } catch (error) {
      setListBlocked ([])
      console.log (error)
    }
  };
  useEffect(() => {
    handleGetListBlocked();
  }, []);

  const updateListBlocked = () => {
    handleGetListBlocked();
  }


  return (
    <>
      <View style={{ marginHorizontal: 10 }}>
        {listBlocked?.map((item, index) => {
          return (
            <View key={index}>
              <MyBlocked
                navigation={navigation}
                data={item}
                updateListBlocked={() => updateListBlocked()}
              />
            </View>
          );
        })}
      </View>
    </>
  );
}

export default memo(ListBlockedScreen);
