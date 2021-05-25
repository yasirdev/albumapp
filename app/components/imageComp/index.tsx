import * as React from 'react';
import { Image as ImageRN, ImageProps as ImageRNProps, Text, View, StyleSheet } from 'react-native';

interface ImageProps extends ImageRNProps { }

const ImageComp = (props: ImageProps) => {
    return (
        <ImageRN {...props} />
    );
};

export { ImageComp };

const styles = StyleSheet.create({
    container: {}
});
