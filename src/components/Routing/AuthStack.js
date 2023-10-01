import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routing from "./Routing";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import AppStack from "./AppStack";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const isLoading = useSelector((state) => state.auth.isLoading);

  useEffect(() => {
    {
      isLoading ? (
        <View>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text
            style={{
              fontSize: 16,
              color: "red",
              textAlign: "center",
              marginTop: 20,
              fontFamily: "Roboto-Medium",
              fontWeight: "bold",
            }}
          >
            Please Wait App is Loading
          </Text>
        </View>
      ) : (
        ""
      );
    }
  }, [isLoading]);

  return (
    <>
      <NavigationContainer>
        {!isLogin ? <Routing /> : <AppStack />}
      </NavigationContainer>
    </>
  );
};

export default AuthStack;
