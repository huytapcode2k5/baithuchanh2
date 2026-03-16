import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function YourCartScreen({ navigation }) {

    const [cart, setCart] = useState([
        {
            id: "1",
            name: "Orange Juice",
            brand: "Lauren's",
            price: 149,
            qty: 2,
            image: require("../Ảnh/Rectangle 31.png")
        },
        {
            id: "2",
            name: "Skimmed Milk",
            brand: "Baskin's",
            price: 129,
            qty: 2,
            image: require("../Ảnh/milk.png")
        },
        {
            id: "3",
            name: "Aloe Vera Lotion",
            brand: "Marley's",
            price: 1249,
            qty: 1,
            image: require("../Ảnh/Rectangle 45.png")
        }
    ]);

    // tăng số lượng
    const increaseQty = (id) => {
        setCart(
            cart.map(item =>
                item.id === id ? { ...item, qty: item.qty + 1 } : item
            )
        );
    };

    // giảm số lượng
    const decreaseQty = (id) => {
        setCart(
            cart.map(item =>
                item.id === id && item.qty > 1
                    ? { ...item, qty: item.qty - 1 }
                    : item
            )
        );
    };

    // tính tổng tiền
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    const renderItem = ({ item }) => (
        <View style={styles.card}>

            <Image source={item.image} style={styles.image} />

            <View style={styles.info}>
                <Text style={styles.brand}>{item.brand}</Text>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>₹ {item.price}</Text>
            </View>

            <View style={styles.qtyBox}>

                <TouchableOpacity onPress={() => decreaseQty(item.id)}>
                    <Text style={styles.qtyBtn}>-</Text>
                </TouchableOpacity>

                <Text style={styles.qty}>{item.qty}</Text>

                <TouchableOpacity onPress={() => increaseQty(item.id)}>
                    <Text style={styles.qtyBtn}>+</Text>
                </TouchableOpacity>

            </View>

        </View>
    );

    return (
        <View style={styles.container}>

            {/* Header */}
            <View style={styles.header}>

                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Ionicons name="arrow-back" size={28} color="green" />
                </TouchableOpacity>

                <Text style={styles.title}>Your Cart</Text>

            </View>

            {/* Cart List */}
            <FlatList
                data={cart}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />

            {/* Total */}
            <View style={styles.totalBox}>
                <Text style={styles.totalText}>Total</Text>
                <Text style={styles.totalPrice}>₹ {total}</Text>
            </View>

            {/* Checkout Button */}
            <TouchableOpacity
                style={styles.checkoutBtn}
                onPress={() => navigation.navigate("Payment")}
            >
                <Text style={styles.checkoutText}>Proceed to checkout</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        padding: 20
    },

    header: {
        top: 20,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20
    },

    title: {
        top: 50,
        fontSize: 24,
        fontWeight: "bold",
    },

    card: {
        top: 65,
        flexDirection: "row",
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 15,
        marginBottom: 15,
        alignItems: "center"
    },

    image: {
        width: 60,
        height: 60,
        marginRight: 15
    },

    info: {
        flex: 1
    },

    brand: {
        color: "#999",
        fontSize: 14
    },

    name: {
        fontWeight: "bold",
        fontSize: 16
    },

    price: {
        color: "#ff6b00",
        marginTop: 5,
        fontSize: 16
    },

    qtyBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f3f3f3",
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 6
    },

    qtyBtn: {
        fontSize: 22,
        paddingHorizontal: 10,
        color: "#ff6b00"
    },

    qty: {
        fontWeight: "bold",
        fontSize: 16
    },

    totalBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        marginBottom: 20
    },

    totalText: {
        fontSize: 20,
        fontWeight: "bold"
    },

    totalPrice: {
        fontSize: 20,
        color: "#ff6b00"
    },

    checkoutBtn: {
        backgroundColor: "#ff8a50",
        padding: 18,
        borderRadius: 12,
        alignItems: "center"
    },

    checkoutText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    }

});