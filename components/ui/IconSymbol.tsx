// This file is a fallback for using MaterialIcons and Ionicons on Android and web.

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SymbolWeight } from "expo-symbols";
import React from "react";
import { OpaqueColorValue, StyleProp, ViewStyle } from "react-native";

// Add your SFSymbol to MaterialIcons and Ionicons mappings here.
const MAPPING_MATERIALICONS = {
    // See MaterialIcons here: https://icons.expo.fyi
    "house.fill": "home",
    "paperplane.fill": "send",
    "chevron.left.forwardslash.chevron.right": "code",
    "chevron.right": "chevron-right",
} as Partial<
    Record<import("expo-symbols").SymbolViewProps["name"], React.ComponentProps<typeof MaterialIcons>["name"]>
>;

const MAPPING_IONICONS = {
    // Add Ionicons mappings here
    "people-circle": "people-circle",
    "people-circle-outline": "people-circle-outline",
} as Partial<Record<import("expo-symbols").SymbolViewProps["name"], React.ComponentProps<typeof Ionicons>["name"]>>;

export type IconSymbolName = keyof typeof MAPPING_MATERIALICONS | keyof typeof MAPPING_IONICONS;

/**
 * An icon component that uses native SFSymbols on iOS, and MaterialIcons or Ionicons on Android and web.
 * This ensures a consistent look across platforms and optimal resource usage.
 *
 * Icon `name`s are based on SFSymbols and require manual mapping to MaterialIcons or Ionicons.
 */
export function IconSymbol({
    name,
    size = 24,
    color,
    style,
    type = "materialicons", // Default type. You must explicity pass a type prop otherwise
}: {
    name: IconSymbolName;
    size?: number;
    color: string | OpaqueColorValue;
    style?: StyleProp<ViewStyle>;
    weight?: SymbolWeight;
    type?: "materialicons" | "ionicons"; // Add icon types as needed
}) {
    if (type === "ionicons" && MAPPING_IONICONS[name]) {
        return <Ionicons color={color} size={size} name={MAPPING_IONICONS[name]} style={style} />;
    }

    if (MAPPING_MATERIALICONS[name]) {
        return <MaterialIcons color={color} size={size} name={MAPPING_MATERIALICONS[name]} style={style} />;
    }

    // Optionally handle missing icon mappings
    console.warn(`Icon "${name}" not found in MAPPING for type "${type}"`);
    return null;
}
