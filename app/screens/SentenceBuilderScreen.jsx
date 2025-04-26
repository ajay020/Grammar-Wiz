import React, { useEffect, useState } from "react";
import {
    View,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    Alert,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import colors from "../utility/colors";
import Text from "../components/Text";
import gameData from "../database/gameData";
import cache from "../utility/cache";
import { ThemedText, ThemedTouchableOpacity, ThemedView } from "../themedComponents/ThemedText";

const SentenceBuilder = ({ navigation }) => {
    const [beginnerCount, setBeginnerCount] = useState(0);
    const [intermediateCount, setIntermediateCount] = useState(0);
    const [expertCount, setExpertCount] = useState(0);

    const [completedCounts, setCompletedCounts] = useState({
        1: { total: 0, compltedQuizIds: [] },
        2: { total: 0, compltedQuizIds: [] },
        3: { total: 0, compltedQuizIds: [] },
    });

    const [beginnerCompleteCount, setBeginnerCompleteCount] = useState(0);
    const [intermediateCompleteCount, setIntermediateCompleteCount] = useState(0);
    const [expertCompleteCount, setExpertCompleteCount] = useState(0);

    // Fetch and set the completed counts from cache
    const fetchCompletedCounts = async () => {
        try {
            const data = await cache.getData("sentenceBuilder");

            setBeginnerCompleteCount(data[1]?.compltedQuizIds.length || 0);
            setIntermediateCompleteCount(data[2]?.compltedQuizIds.length || 0);
            setExpertCompleteCount(data[3]?.compltedQuizIds.length || 0);
        } catch (error) {
            console.log("Error fetching sentence builder data", error);
        }
    };

    // Calculate count each type of sentence quizzes
    const calculateCountOfSentences = async () => {
        let beginner = 0;
        let intermediate = 0;
        let expert = 0;

        beginner = gameData.getQuizzesByDifficulty(1)?.length || 0;
        intermediate = gameData.getQuizzesByDifficulty(2)?.length || 0;
        expert = gameData.getQuizzesByDifficulty(3)?.length || 0;

        setBeginnerCount(beginner);
        setIntermediateCount(intermediate);
        setExpertCount(expert);

        // Calculate completed counts and update the state
        const completedCountsCopy = { ...completedCounts };
        completedCountsCopy[1].total = beginner;
        completedCountsCopy[2].total = intermediate;
        completedCountsCopy[3].total = expert;
        setCompletedCounts(completedCountsCopy);

        // Save counts into cache
        await saveCountsIntoCache(completedCountsCopy);
    };

    const saveCountsIntoCache = async (counts) => {
        try {
            const existingData = await cache.getData("sentenceBuilder");

            if (existingData) {
                cache.storeData("sentenceBuilder", {
                    1: { ...existingData["1"], total: counts[1].total },
                    2: { ...existingData["2"], total: counts[2].total },
                    3: { ...existingData["3"], total: counts[3].total },
                });
            } else {
                cache.storeData("sentenceBuilder", counts);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            //   console.log("GamseScreen focused");
            fetchCompletedCounts();
            return () => {
                // console.log("GameScreen unfocused");
            };
        }, [])
    );

    useEffect(() => {
        calculateCountOfSentences();
        fetchCompletedCounts();

        const test = async () => {
            try {
                const x = await cache.getData("sentenceBuilder");
                // await cache.removeItem("sentenceBuilder");
                let b = x[1].compltedQuizIds;
                let i = x[2].compltedQuizIds;
                let e = x[3].compltedQuizIds;
                // console.log({ b, i, e });
            } catch (error) {
                console.log(error);
            }
        };
        test();
    }, []);

    const sendDataToSentenceMaster = (level) => {
        const message =
            "Congratulations! 🎉 You've successfully completed all the quizzes.";
        if (
            (level === 1 && beginnerCount === beginnerCompleteCount) ||
            (level === 2 && intermediateCount === intermediateCompleteCount) ||
            (level === 3 && expertCount === expertCompleteCount)
        ) {
            Alert.alert(message);
            return;
        }

        const data = {
            level,
        };
        // Navigate to SentenceMaster and pass the data
        navigation.navigate("SentenceMaster", { data: data });
    };

    return (
        <ThemedView style={styles.container}>
            <ThemedTouchableOpacity
                style={styles.tile}
                onPress={() => sendDataToSentenceMaster(1)}
            >
                <ThemedText style={styles.title}>
                    Level1 ({beginnerCompleteCount}/{beginnerCount})
                </ThemedText>
            </ThemedTouchableOpacity>
            <ThemedTouchableOpacity
                style={styles.tile}
                onPress={() => sendDataToSentenceMaster(2)}
            >
                <ThemedText style={styles.title}>
                    Level2 ({intermediateCompleteCount}/{intermediateCount})
                </ThemedText>
            </ThemedTouchableOpacity>
            <ThemedTouchableOpacity
                style={styles.tile}
                onPress={() => sendDataToSentenceMaster(3)}
            >
                <ThemedText style={styles.title}>
                    Level3 ({expertCompleteCount}/{expertCount})
                </ThemedText>
            </ThemedTouchableOpacity>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        padding: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    tile: {
        paddingVertical: 20,
        borderRadius: 10,
        elevation: 5,
        marginVertical: 6,
        width: "90%",
    },
    title: {
        textAlign: "center",
        fontSize: 24,
    },
});

export default SentenceBuilder;
