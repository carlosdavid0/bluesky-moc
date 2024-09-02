import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import "./global.css";
import { Post } from "./src/components/post";
import { useEffect, useState } from "react";
import { Feed, Posts } from "./src/components/post/types";

export default function App() {
  const [posts, setPosts] = useState<Posts>();
  const [refreshing, setRefreshing] = useState(false);

  async function fetchPosts() {
    setRefreshing(true);
    const response = await fetch(
      "https://api.bsky.app/xrpc/app.bsky.feed.getFeed?feed=at://did:plc:z72i7hdynmk6r22z27h6tvur/app.bsky.feed.generator/whats-hot&cursor=eyJvIjoiMjAyNC0wOS0wMlQwNzo1NDoxMS4zMTM2NTA5ODVaIiwibiI6IjIwMjQtMDktMDJUMTk6NTQ6MTEuMzEzNjUwOTg1WiIsImYiOjAsImMiOjAsInAiOjAsInRzIjowLCJwZyI6MCwicyI6WzczNjk3NDYxMSw3MzY3Njg0MTIsNzM3MjU1MTk2LDczNjg4NDM2Niw3MzY5NzY5OTIsNzM2MTY4MDE4LDczNTU3MTc0MCw3MzcwNjA4NjcsNzM3MDU4OTczLDczNzQwNTcwMyw3MzQ0NTE2NTcsNzM2MjE3MDY0LDczNDc3OTMxOSw3MzczNDg2MDMsNzM2ODY5OTc1LDczNjI2Mjg5OSw3MzY0MDM2NzYsNzM1MTIxMDk5LDczNzAxNDQ4MSw3MzY5MTA0MjQsNzM2ODQ0NDQ5LDczNTkxNTIwNyw3MzczNTE1MjgsNzM3NDQ2MDQyLDczNjQyNjA5NCw3MzY1NjM2NzIsNzM2MDg2MDg4LDczNDMxMjE4Myw3MzU0NzEzOTUsNzM3MTg0NjQ0XX0=&limit=30&lang=pt,en,as"
    );

    const data = await response.json();

    setPosts(data);
    setRefreshing(false);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <SafeAreaView className="bg-slate-900 flex-1">
      <View className="px-5 py-2 flex-1">
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={fetchPosts}
              colors={["#fff", "#fff", "#fff"]}
              tintColor={"#fff"}
            />
          }
          showsVerticalScrollIndicator={false}
          className="flex-1"
          initialNumToRender={7}
          contentContainerClassName="py-5"
          ListEmptyComponent={() => (
            <Text className="text-white/80 text-center">No posts to show</Text>
          )}
          ItemSeparatorComponent={() => (
            <View className="h-5 border-t border-slate-700" />
          )}
          data={posts?.feed.filter((e) => {
            return !e.post.record.embed;
          })}
          renderItem={render}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const render = ({ item, index }: { item: Feed; index: number }) => (
  <Post
    key={index}
    postStatus={{
      likes: item.post.likeCount,
      comments: item.post.replyCount,
      retweets: item.post.repostCount,
      isLiked: false,
      time: item.post.record.createdAt,
    }}
    content={{
      text: item.post.record.text,
    }}
    author={{
      name: item.post.author.displayName,
      username: item.post.author.handle,
      avatar: item.post.author.avatar,
    }}
  />
);
