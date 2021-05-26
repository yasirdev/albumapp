import * as React from 'react';
import {
    Image,
    ImageProps,
    View,
    StyleSheet,
    ImageBackground,
} from 'react-native';

interface ImageCompProps extends ImageProps {
    containerStyle?: any;
    placeholderImage?: string;
}

const ImageComp = (props: ImageCompProps) => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [isError, setError] = React.useState(false);
    return (
        <>
            <ImageBackground
                onError={() => {
                    setError(true);
                }}
                onLoadEnd={() => {
                    setIsLoaded(true);
                }}
                source={props.source}
                resizeMode={props.resizeMode}
                style={[props.containerStyle, { position: 'relative' }]}>
                {!isLoaded || (isLoaded && isError) ? (
                    <>
                        <Image
                            style={[
                                styles.image,
                                props.style,
                                { resizeMode: 'cover', position: 'absolute', zIndex: 9 },
                            ]}
                            source={require('../../assets/placeholder.png')}
                        />
                    </>
                ) : null}
            </ImageBackground>
        </>
    );
};
ImageComp.defaulProps = {
    resizeMode: 'cover',
    placeholderImage: '',
    style: {
        width: 0,
        height: 0,
    },
};

export { ImageComp };

const styles = StyleSheet.create({
    image: {
        backgroundColor: 'rgba(0,0,0,0.1)',
    },
});
