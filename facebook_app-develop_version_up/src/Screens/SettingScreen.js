import {
  View,
  Button,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState, memo } from "react";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import CommentModal from "../Components/modal/CommentModal";
import Icon from "react-native-vector-icons/Ionicons";
import { MaterialIcons } from "react-native-vector-icons";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import {
  FontAwesome5,
  Feather,
  AntDesign,
  EvilIcons,
} from "react-native-vector-icons";
import styles from "./style/setting";
import { Alert } from "react-native";
import userService from "../Services/Api/userService";

function SettingScreen({ navigation, route }) {
  const userId = route?.params?.targetUserId;

  const { userInfor } = useSelector((state) => state.user);
  const [userInfors, setUserInfors] = useState (userInfor);

  useEffect (() => {
    const getUserInfors = async () => {
        try {
            const data = await userService.getUserInfor (userId);
            setUserInfors (data.data)
        } catch (error) {
            console.log (error)
        }
    }

    getUserInfors();
  }, [])

  console.log (userInfors);


  if (userInfor.id === userId)
    return (
      <ScrollView style={styles.container}>
        <View style={styles.firstList}>
          <TouchableOpacity onPress={() => navigation.navigate("editProfile")}>
            <View style={styles.item}>
              <Feather name="edit-2" size={25} />
              <Text style={styles.text}>Chỉnh sửa trang cá nhân</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.item}>
            <AntDesign name="clockcircleo" size={25} />
            <Text style={styles.text}>Kho lưu trữ tin</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingVertical: 12,
              paddingHorizontal: 15,
            }}
          >
            <Icon name="ios-bookmark-outline" size={25} />
            <Text style={styles.text}>Mục đã Lưu</Text>
          </View>
        </View>

        <View style={styles.secondList}>
          <View style={styles.item}>
            <FontAwesome5 name="eye" size={25} />
            <Text style={styles.text}>Chế độ xem</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingVertical: 12,
              paddingHorizontal: 15,
              borderBottomWidth: 0.5,
            }}
          >
            <FontAwesome5 name="list" size={25} />
            <Text style={styles.text}>Nhật ký hoạt động</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingVertical: 12,
              paddingHorizontal: 15,
              borderBottomWidth: 0.5,
            }}
          >
            <Icon name="lock-closed-outline" size={25} />
            <Text style={styles.text}>Xem lối tắt quyền riêng tư</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingVertical: 12,
              paddingHorizontal: 15,
            }}
          >
            <AntDesign name="search1" size={25} />
            <Text style={styles.text}>Tìm kiếm trên trang cá nhân</Text>
          </View>
        </View>
        <View style={styles.thirdList}>
          <View
            style={{
              paddingVertical: 20,
              borderBottomWidth: 0.5,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              Liên kết đến trang cá nhân của bạn
            </Text>
            <Text
              style={{
                fontSize: 18,
                marginTop: 9,
              }}
            >
              Liên kết của riêng bạn trên Facebook
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                marginTop: 10,
              }}
            >
              https://www.facebook.com/mangekyou.hungnguyen
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
              marginBottom: 20,
              backgroundColor: "#E4E6EB",
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: "#000000",
                paddingStart: 10,
                fontWeight: "500",
              }}
            >
              Sao chép liên kết
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  else
    return (
      <ScrollView style={styles.container}>
        <View style={styles.firstList}>
          <TouchableOpacity>
            <View style={styles.item}>
              <Feather name="phone" size={25} />
              <Text style={styles.text}>Gọi thoại</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.item}>
            <Feather name="video" size={25} />
            <Text style={styles.text}>Gọi Video</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingVertical: 12,
              paddingHorizontal: 15,
            }}
          >
            <FontAwesome5 name="users" size={25} />
            <Text style={styles.text}>Xem quan hệ bạn bè</Text>
          </View>
        </View>

        <View style={styles.secondList}>
          <View style={styles.item}>
            <FontAwesome5 name="bug" size={25} />
            <Text style={styles.text}>Báo cáo trang cá nhân </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingVertical: 12,
              paddingHorizontal: 15,
              borderBottomWidth: 0.5,
            }}
          >
            <FontAwesome5 name="heart" size={25} />
            <Text style={styles.text}>Giúp {userInfors.username}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                `Nếu bạn chặn ${userInfors.username} ?`,
                `Những người bạn chặn sẽ không thể gắn thẻ hay mời bạn tham gia nhóm hoặc sự kiện, cũng không thể bắt đầu trò chuyện, thêm bạn vào danh sách bạn bè hoặc xem nội dung bạn đăng trên dòng thời gian của mình nữa Nếu bạn chặn ai đó khi hai người đang là bạn bè thì hành động này cũng sẽ hủy kết bạn với họ.`,
                [
                  { text: "Hủy", onPress: () => null },
                  {
                    text: "Chặn",
                    onPress: () => {
                      userService
                        .setBlock(userInfors.id, 0)
                        .then((result) => {
                          console.log(result);
                        })
                        .catch((e) => {
                          //console.log(e.response.data);
                          Alert.alert(
                            "Có lỗi xảy ra",
                            "Vui lòng thử lại sau.",
                            [{ text: "OK", onPress: () => null }]
                          );
                        });
                    },
                  },
                ]
              );
            }}
          >
            <View
              style={{
                flexDirection: "row",
                paddingVertical: 12,
                paddingHorizontal: 15,
                borderBottomWidth: 0.5,
              }}
            >
              <Icon name="lock-closed-outline" size={25} />
              <Text style={styles.text}>Chặn</Text>
            </View>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              paddingVertical: 12,
              paddingHorizontal: 15,
            }}
          >
            <AntDesign name="search1" size={25} />
            <Text style={styles.text}>Tìm kiếm trên trang cá nhân</Text>
          </View>
        </View>
        <View style={styles.thirdList}>
          <View
            style={{
              paddingVertical: 20,
              borderBottomWidth: 0.5,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              Liên kết đến trang cá nhân của {userInfor.username}
            </Text>
            <Text
              style={{
                fontSize: 18,
                marginTop: 9,
              }}
            >
              Liên kết của {userInfor.username} trên Facebook
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                marginTop: 10,
              }}
            >
              https://www.facebook.com/mangekyou.hungnguyen
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
              marginBottom: 20,
              backgroundColor: "#E4E6EB",
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: "#000000",
                paddingStart: 10,
                fontWeight: "500",
              }}
            >
              Sao chép liên kết
            </Text>
          </View>
        </View>
      </ScrollView>
    );
}

export default SettingScreen;
