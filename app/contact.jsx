import { Fontisto } from "@expo/vector-icons";
import { StyleSheet, SafeAreaView, View, Text, Appearance } from "react-native";
import { Link } from "expo-router";

import { Colors } from "@/constants/Colors";

export default function ContactScreen() {
    const colorScheme = Appearance.getColorScheme();

    const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

    const imgColor = colorScheme === "dark" ? "papayawhip" : "#333";

    const styles = createStyles(theme, colorScheme);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imgContainer}>
                <Fontisto name="coffeescript" size={200} color={imgColor} />
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.title}>Haven Brews</Text>

                <View style={styles.textView}>
                    <Text style={styles.text}>
                        <Text>123 Mulberry Ave</Text>
                        {"\n"}
                        <Text>Hemlock Grove, ME 04730</Text>
                    </Text>
                </View>

                <View style={styles.textView}>
                    <Text style={styles.text}>
                        Phone:{"\n"}
                        <Link href="tel:5551234567" style={styles.link}>
                            555-123-4567
                        </Link>
                        {"\n"}
                        or{" "}
                        <Link href="sms:5551234567" style={styles.link}>
                            Click Here to Text!
                        </Link>
                    </Text>
                </View>

                <View style={styles.textView}>
                    <Text style={styles.text}>
                        Hours:{"\n"}
                        <Text>Open 6am to 4pm daily.</Text>
                        {"\n"}
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

function createStyles(theme, colorScheme) {
    return StyleSheet.create({
        container: {
            backgroundColor: theme.background,
            paddingTop: 0,
            flexGrow: 1,
        },
        imgContainer: {
            backgroundColor: colorScheme === "dark" ? "#353636" : "#ED9F15",
            height: 250,
            justifyContent: "center",
            alignItems: "center",
        },
        textContainer: {
            backgroundColor: theme.background,
            padding: 12,
        },
        title: {
            color: theme.text,
            fontSize: 24,
            fontWeight: "bold",
            lineHeight: 32,
            marginBottom: 10,
        },
        textView: {
            marginBottom: 20,
        },
        text: {
            color: theme.text,
            fontSize: 16,
            lineHeight: 24,
        },
        link: {
            textDecorationLine: "underline",
        },
    });
}
