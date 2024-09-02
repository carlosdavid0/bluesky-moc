import React, { memo } from "react";
import { AntDesign, EvilIcons, Ionicons } from "@expo/vector-icons";
import { Image, Platform, Text, TouchableOpacity, View } from "react-native";
import { Embed, Feed } from "./types";

type PostProps = {
  author: {
    name: string;
    username: string;
    avatar: string;
  };
  postStatus: {
    likes: number;
    comments: number;
    retweets: number;
    isLiked: boolean;
    time: string;
  };
  content: {
    text: string;
    images?: Embed[];
  };
};

function PostComponent({ author, content, postStatus }: PostProps) {
  return (
    <View className="flex-row items-start gap-4 flex-1">
      <TouchableOpacity activeOpacity={0.7}>
        <Image
          className="w-14 h-14 rounded-full"
          source={{
            uri: author?.avatar,
          }}
        />
      </TouchableOpacity>
      <View className="flex-1">
        <TouchableOpacity activeOpacity={1}>
          <View className="flex-row gap-2 items-center justify-between flex-1">
            <View className="flex-row items-center gap-2">
              <Text className="text-white font-bold text-lg">
                {author?.name}
              </Text>
              <Text className="text-gray-400 text-lg truncate">
                @{author?.username}
              </Text>
            </View>
            <Text className="text-gray-400 text-lg">
              {new Date(postStatus.time).toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "numeric",
              })}
            </Text>
          </View>
          <Text className="text-white/90 font-normal">{content.text}</Text>
        </TouchableOpacity>
        <View className="flex-row items-center justify-between my-3">
          <TouchableOpacity
            activeOpacity={0.7}
            className="flex-row items-center gap-2"
          >
            {postStatus.isLiked ? (
              <AntDesign name="heart" size={16} color="red" />
            ) : (
              <AntDesign name="hearto" size={16} color="white" />
            )}
            <Text className="text-white/80 text-lg">
              {postStatus.likes > 0 ? postStatus.likes : ``}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            className="flex-row items-center gap-2"
          >
            <Ionicons name="chatbubble-outline" size={16} color="white" />
            {postStatus.comments > 0 && (
              <Text className="text-white/80 text-lg">
                {postStatus.comments}
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            className="flex-row items-center gap-2"
          >
            <Ionicons name="repeat" size={16} color="white" />
            {postStatus.retweets > 0 && (
              <Text className="text-white/80 text-lg">
                {postStatus.retweets}
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            className="flex-row items-center gap-2"
          >
            {Platform.OS === "ios" ? (
              <EvilIcons name="share-apple" size={22} color="white" />
            ) : (
              <EvilIcons name="share-google" size={22} color="white" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export const Post = memo(PostComponent);
