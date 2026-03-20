import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";

export default function HomeScreen({ navigation }) {

    const exploreItems = [
        {
            id: "1",
            image: require("../Ảnh/milk.png"),
            bg: "#f0f0f0",
        },
        {
            id: "2",
            image: require("../Ảnh/Mockup.png"),
            bg: "#e8f4e8",
        },
        {
            id: "3",
            image: require("../Ảnh/trasua.png"),
            bg: "#fff3e0",
        },
    ];

    return (
        <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
        >

            {/* Header */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.hello}>Hello 👋</Text>
                    <Text style={styles.name}>Christie Doe</Text>
                </View>
                <Image
                    source={require("../Ảnh/Mask Group.png")}
                    style={styles.avatar}
                />
            </View>

            {/* Title */}
            <Text style={styles.sectionTitle}>Your Insights</Text>

            {/* Cards Grid */}
            <View style={styles.grid}>

                {/* Scan new */}
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => navigation.navigate("Scan")}
                >
                    <View style={[styles.iconBox, { backgroundColor: "#fce4f5" }]}>
                        <View style={[styles.iconInner]}>
                            <Image
                                source={require("../Ảnh/Group 157.png")}
                                style={[styles.cardIcon,]}
                            />
                        </View>
                    </View>
                    <Text style={styles.cardTitle}>Scan new</Text>
                    <Text style={styles.cardSub}>Scanned 483</Text>
                </TouchableOpacity>

                {/* Counterfeits */}
                <TouchableOpacity style={styles.card}>
                    <View style={[styles.iconBox, { backgroundColor: "#fdeede" }]}>
                        <Image
                            source={require("../Ảnh/Frame.png")}
                            style={[styles.cardIcon,]}
                        />
                    </View>
                    <Text style={styles.cardTitle}>Counterfeits</Text>
                    <Text style={styles.cardSub}>Counterfeited 32</Text>
                </TouchableOpacity>

                {/* Success */}
                <TouchableOpacity style={styles.card}>
                    <View style={[styles.iconBox, { backgroundColor: "#d6f5ed" }]}>
                        <Image
                            source={require("../Ảnh/Group 158.png")}
                            style={[styles.cardIcon,]}
                        />
                    </View>
                    <Text style={styles.cardTitle}>Success</Text>
                    <Text style={styles.cardSub}>Checkouts 8</Text>
                </TouchableOpacity>

                {/* Directory */}
                <TouchableOpacity style={styles.card}>
                    <View style={[styles.iconBox, { backgroundColor: "#ddeeff" }]}>
                        <Image
                            source={require("../Ảnh/Group 151.png")}
                            style={[styles.cardIcon,]}
                        />
                    </View>
                    <Text style={styles.cardTitle}>Directory</Text>
                    <Text style={styles.cardSub}>History 26</Text>
                </TouchableOpacity>

            </View>

            {/* Explore More */}
            <View style={styles.exploreHeader}>
                <Text style={styles.sectionTitle}>Explore More</Text>
                <TouchableOpacity>
                    <Text style={styles.arrow}>→</Text>
                </TouchableOpacity>
            </View>

            {/* Explore Horizontal Scroll */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.exploreScroll}
            >
                {exploreItems.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={[styles.exploreCard, { backgroundColor: item.bg }]}
                    >
                        <Image
                            source={item.image}
                            style={styles.exploreImage}
                        />
                    </TouchableOpacity>
                ))}
            </ScrollView>

        </ScrollView>
    );
}

const styles = StyleSheet.create({

    scroll: {
        flex: 1,
        backgroundColor: "#f2f2f7",
    },

    container: {
        paddingHorizontal: 20,
        paddingBottom: 30,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 55,
        marginBottom: 28,
    },

    hello: {
        fontSize: 24,
        fontWeight: "700",
        color: "#111",
    },

    name: {
        fontSize: 14,
        color: "#888",
        marginTop: 2,
    },

    avatar: {
        width: 46,
        height: 46,
        borderRadius: 23,
    },

    sectionTitle: {
        fontSize: 17,
        fontWeight: "700",
        color: "#111",
        marginBottom: 14,
    },

    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginBottom: 28,
    },

    card: {
        width: "48%",
        backgroundColor: "#ffffff",
        borderRadius: 18,
        padding: 18,
        marginBottom: 14,
        shadowColor: "#000",
        shadowOpacity: 0.04,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },

    iconBox: {
        width: 52,
        height: 52,
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 14,
    },

    cardIcon: {
        width: 20,
        height: 20,
        resizeMode: "contain",
    },

    warningIcon: {
        fontSize: 24,
    },

    successIcon: {
        fontSize: 24,
    },

    directoryIcon: {
        fontSize: 24,
    },

    cardTitle: {
        fontSize: 15,
        fontWeight: "600",
        color: "#111",
    },

    cardSub: {
        fontSize: 12,
        color: "#aaa",
        marginTop: 3,
    },

    exploreHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 14,
    },

    arrow: {
        fontSize: 20,
        color: "#111",
        fontWeight: "300",
    },

    exploreScroll: {
        marginLeft: -2,
    },

    exploreCard: {
        width: 110,
        height: 130,
        borderRadius: 18,
        marginRight: 12,
        justifyContent: "flex-end",
        alignItems: "center",
        overflow: "hidden",
        paddingBottom: 8,
    },

    exploreImage: {
        width: "80%",
        height: "85%",
        resizeMode: "contain",
    },

});