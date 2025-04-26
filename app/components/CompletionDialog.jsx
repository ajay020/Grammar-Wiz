import React from 'react';
import { Modal, Text, StyleSheet } from 'react-native';
import { AppButton, ThemedCardView, ThemedText, ThemedTouchableOpacity, ThemedView } from '../themedComponents/ThemedText';

const CompletionDialog = ({ visible, onClose, onNext }) => {
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}
        >
            <ThemedView style={styles.dialogOverlay}>
                <ThemedCardView style={styles.dialogBox}>
                    <ThemedText style={styles.dialogText}>🎉 Well done! You completed the game!</ThemedText>
                    <AppButton onPress={onNext} style={styles.dialogButton}>
                        <ThemedText style={styles.dialogButtonText}>Next</ThemedText>
                    </AppButton>
                </ThemedCardView>
            </ThemedView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    dialogOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dialogBox: {
        width: '80%',
        padding: 26,
        borderRadius: 10,
        alignItems: 'center',
    },
    dialogText: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
    dialogButton: {
        // backgroundColor: '#2196F3',
        paddingVertical: 12,
        marginTop: 10,
        paddingHorizontal: 25,
        borderRadius: 5,
    },
    dialogButtonText: {
        // color: '#fff',
        fontSize: 16,
    },
});

export default CompletionDialog;
