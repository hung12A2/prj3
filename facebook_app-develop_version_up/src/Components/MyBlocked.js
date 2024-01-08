import { useEffect, useState, useRef } from "react";
import { View, Image, Text, TouchableOpacity, Alert } from "react-native";
import { COMMON_COLOR } from "../Services/Helper/constant";
import { useSelector } from "react-redux";
import userService from "../Services/Api/userService";

export default function MyBLocked({ navigation, data, updateListBlocked }) {
  const [friendData, setFriendData] = useState(data);
  const [isShowModalExpand, setIsShowModalExpand] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const toggleModal = () => {
    setIsShowModalExpand(!isShowModalExpand);
  };

  useEffect(() => {
    setFriendData(data);
  }, [data]);
  console.log("friendData", friendData);
  return (
    <View style={{ width: "100%", paddingTop: 25, flexDirection: "row" }}>
      <TouchableOpacity>
        <Image
          source={
            !friendData?.avatar
              ? require("../../assets/images/default_avatar.jpg")
              : { uri: friendData?.avatar }
          }
          style={{
            width: 50,
            height: 50,
            borderRadius: 40,
            borderColor: COMMON_COLOR.GRAY_COLOR_BACKGROUND,
            borderWidth: 0,
          }}
        />
      </TouchableOpacity>
      <View style={{ justifyContent: "center", marginLeft: 10, flex: 1 }}>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <View
            style={{
              flexDirection: "column",
              flex: 2,
              marginRight: 0,
              marginTop: 4,
              marginStart: 2,
            }}
          >
            <Text style={{ fontSize: 17, fontWeight: "600" }}>
              {friendData?.username}
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                Alert.alert(
                  `Nếu bạn bỏ chặn ${friendData.username} ?`,
                  `Nếu bạn bỏ chặn ${friendData.username}, họ có thể xem Dòng thời gian của bạn hoặc liên hệ với bạn, tùy thuộc vào cài đặt của bạn`,
                  [
                    { text: "Hủy", onPress: () => null },
                    {
                      text: "Bỏ Chặn", onPress: () => {
                        userService.setBlock(friendData.id, 1).then((result) => {
                            console.log(result);
                            updateListBlocked();
                        }).catch(e => {
                            //console.log(e.response.data);
                            Alert.alert("Có lỗi xảy ra", "Vui lòng thử lại sau.", [
                                { text: "OK", onPress: () => null }
                            ]);
                        })
                      }
                    },
                  ]
                );
              }}
              style={{
                backgroundColor: COMMON_COLOR.BLUE_COLOR,
                padding: 10,
                marginRight: 3,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "600",
                  fontSize: 15,
                }}
              >
                Bỏ chặn
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
