import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({ color = "gray", name, size = 35 }) => {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};

export default Icon;
