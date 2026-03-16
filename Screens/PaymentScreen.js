import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

export default function PaymentScreen({ navigation }) {
    return (
        <View style={styles.container}>

            {/* Back + Title */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={34} color="#2ecc71" />
                </TouchableOpacity>

                <Text style={styles.title}>Checkout 💳</Text>

                <Text style={styles.price}>₹ 1,527</Text>
            </View>

            {/* Payment type */}
            <View style={styles.paymentTabs}>

                <TouchableOpacity style={styles.activeTab}>
                    <FontAwesome5 name="credit-card" size={18} color="white" />
                    <Text style={styles.activeText}> Credit card</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tab}>
                    <FontAwesome5 name="apple" size={20} color="black" />
                    <Text style={styles.tabText}> Apple Pay</Text>
                </TouchableOpacity>

            </View>

            {/* Card Number */}
            <Text style={styles.label}>Card number</Text>

            <View style={styles.inputBox}>
                <TextInput
                    placeholder="5261 4141 0151 8472"
                    style={styles.input}
                />
                <Image
                    source={require("../Ảnh/Master Card Logo.png")}
                    style={styles.cardIcon}
                />
                <Image
                    source={require("../Ảnh/Card Icon.png")}
                    style={styles.cardIcon}
                />

            </View>

            {/* Name */}
            <Text style={styles.label}>Cardholder name</Text>

            <TextInput
                placeholder="Christie Doe"
                style={styles.inputFull}
            />

            {/* Expiry + CVV */}
            <View style={styles.row}>

                <View style={{ flex: 1 }}>
                    <Text style={styles.label}>Expiry date</Text>
                    <TextInput
                        placeholder="06 / 2024"
                        style={styles.inputFull}
                    />
                </View>

                <View style={{ flex: 1 }}>
                    <Text style={styles.label}>CVV / CVC</Text>
                    <TextInput
                        placeholder="915"
                        style={styles.inputFull}
                    />
                </View>

            </View>

            <Text style={styles.note}>
                We will send you an order details to your email after the successful payment
            </Text>

            {/* Pay Button */}
            <TouchableOpacity
                style={styles.payBtn}
                onPress={() => navigation.navigate("Success")}
            >
                <Ionicons name="lock-closed" size={20} color="white" />
                <Text style={styles.payText}> Pay for the order</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#f4f4f4",
        padding: 25
    },

    header: {
        top: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 30
    },

    title: {
        top: 50,
        flex: 1,
        fontSize: 22,
        fontWeight: "bold",
        right: 30

    },

    price: {
        top: 50,
        color: "#2ecc71",
        fontSize: 20,
        fontWeight: "bold"
    },

    paymentTabs: {
        top: 30,
        flexDirection: "row",
        marginBottom: 25
    },

    activeTab: {
        flexDirection: "row",
        backgroundColor: "#2ecc71",
        padding: 14,
        borderRadius: 12,
        marginRight: 10
    },

    activeText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },

    tab: {
        flexDirection: "row",
        backgroundColor: "#eaeaea",
        padding: 14,
        borderRadius: 12
    },

    tabText: {
        fontSize: 16
    },

    label: {
        fontSize: 15,
        marginBottom: 6,
        marginTop: 10,
        color: "#555"
    },

    inputBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#eaeaea",
        borderRadius: 12,
        paddingHorizontal: 15
    },

    input: {
        flex: 1,
        height: 55,
        fontSize: 16
    },
    cardIcon: {
        margin: 10,
        width: 35,
        height: 22,
        resizeMode: "contain"
    },
    inputFull: {
        backgroundColor: "#eaeaea",
        borderRadius: 12,
        padding: 15,
        fontSize: 16,
        marginBottom: 10
    },

    row: {
        flexDirection: "row",
        gap: 10
    },

    note: {
        textAlign: "center",
        color: "#777",
        fontSize: 13,
        marginTop: 15
    },

    payBtn: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2ecc71",
        padding: 18,
        borderRadius: 12,
        marginTop: 25
    },

    payText: {
        color: "white",
        fontSize: 17,
        fontWeight: "bold",
        marginLeft: 6
    }

});