import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function PaymentSuccess({ navigation }) {
    return (
        <View style={styles.container}>

            {/* Back button */}
            <TouchableOpacity
                style={styles.backBtn}
                onPress={() => navigation.navigate("Home")}
            >
                <Ionicons name="arrow-back-circle" size={40} color="#5567e9" />
            </TouchableOpacity>

            {/* Image */}
            <Image
                source={require("../Ảnh/Group 167.png")}
                style={styles.image}
            />

            {/* Title */}
            <Text style={styles.title}>Payment Success, Yayy!</Text>

            {/* Description */}
            <Text style={styles.description}>
                we will send order details and invoice in your contact no. and registered email
            </Text>

            {/* Check Details */}
            <TouchableOpacity>
                <Text style={styles.checkDetails}>Check Details →</Text>
            </TouchableOpacity>

            {/* Download Button */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Download Invoice</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 25,
        backgroundColor: "#f5f5f5"
    },

    backBtn: {
        position: "absolute",
        top: 50,
        left: 20
    },

    image: {
        width: 220,
        height: 220,
        resizeMode: "contain",
        marginBottom: 30
    },

    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10
    },

    description: {
        textAlign: "center",
        color: "#777",
        marginBottom: 20
    },

    checkDetails: {
        color: "#4a6cf7",
        fontWeight: "bold",
        marginBottom: 30
    },

    button: {
        backgroundColor: "#5567e9",
        padding: 16,
        borderRadius: 12,
        width: "90%",
        alignItems: "center"
    },

    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    }

});