import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CompletionDialog = ({ visible, onClose, onNext }) => {
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.dialogOverlay}>
                <View style={styles.dialogBox}>
                    <Text style={styles.dialogText}>🎉 Well done! You completed the game!</Text>
                    <TouchableOpacity onPress={onNext} style={styles.dialogButton}>
                        <Text style={styles.dialogButtonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    dialogText: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
    dialogButton: {
        backgroundColor: '#2196F3',
        paddingVertical: 12,
        marginTop: 10,
        paddingHorizontal: 25,
        borderRadius: 5,
    },
    dialogButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default CompletionDialog;
