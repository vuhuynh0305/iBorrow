import React from 'react'
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Image } from 'react-native'
import PropTypes from 'prop-types';
// import { Container, Header, Content,Title, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import Styles from '../styles/Styles';

// const options = [
//     {
//         label: 'Borrow',
//         value: 'borrow'
//     },
//     {
//         label: 'Lend',
//         value: 'lend'
//     }
// ]

const categories = [
    {
        label: 'Money',
        value: 'money',
        file: require('../../assets/img/money.png')
    },
    {
        label: 'Book',
        value: 'book',
        file: require('../../assets/img/book.png')
    }, {
        label: 'Machine',
        value: 'machine',
        file: require('../../assets/img/machine.png')
    }, {
        label: 'Furniture',
        value: 'furniture',
        file: require('../../assets/img/furniture.png')
    }, {
        label: 'Vehicle',
        value: 'vehicle',
        file: require('../../assets/img/vehicle.png')
    }, {
        label: 'Other',
        value: 'other',
        file: require('../../assets/img/other.png')
    },
]

class SegmentedControls extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: ''
        }
    }

    onChange = (selectedOption) => {
        this.props.onChange(selectedOption)
    }

    getConfig = () => {
        const { backgroundTint, activeBackgroundTint, tint, activeTint, borderTint, borderWidth, borderRadius, fontSize } = this.props
        const config = {
            backgroundTint: backgroundTint || DEFAULT.backgroundTint,
            activeBackgroundTint: activeBackgroundTint || DEFAULT.activeBackgroundTint,
            tint: tint || DEFAULT.tint,
            activeTint: activeTint || DEFAULT.activeTint,
            borderTint: borderTint || DEFAULT.borderTint,
            borderWidth: borderWidth || DEFAULT.borderWidth,
            borderRadius: borderRadius || DEFAULT.borderRadius,
            fontSize: fontSize || DEFAULT.fontSize
        }
        return config
    }

    renderOption = ({ value, label }, selectedOption, idx, lastIdx, config) => {
        const segmentOptionStyles = {
            backgroundColor: config.backgroundTint
        }
        const segmentTextStyles = { color: config.tint, fontSize: config.fontSize }
        const activeSegmentOptionStyles = {
            borderColor: config.borderTint,
            borderWidth: config.borderWidth,
            backgroundColor: config.activeBackgroundTint,
            borderRadius: config.borderRadius,
        }
        const activeSegmentTextStyles = { color: config.activeTint }
        const activeSegmentOption = value === selectedOption
        return (
            <TouchableOpacity activeOpacity={1} key={idx}
                style={[styles.segmentOption, segmentOptionStyles, idx === lastIdx ? styles.segmentLastOption : '', activeSegmentOption ? activeSegmentOptionStyles : '']}
                onPress={() => this.onChange(value)}>
                <Text style={[segmentTextStyles, activeSegmentOption ? activeSegmentTextStyles : '']}>{label}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        const { options, selectedOption } = this.props
        const config = this.getConfig()
        const lastIdx = options.length - 1
        const segmentContainerStyles = {
            borderRadius: config.borderRadius,
            borderWidth: config.borderWidth,
            borderColor: config.borderTint,
            backgroundColor: config.backgroundTint
        }
        return (
            <View style={[styles.segmentContainer, segmentContainerStyles]}>
                {options.length > 0 && options.map((option, idx) => {
                    return this.renderOption(option, selectedOption, idx, lastIdx, config)
                })}
            </View>
        )
    }


}

const orange = '#ef5f31';
const white = '#ffffff';

const DEFAULT = {
    tint: white,
    backgroundTint: orange,
    borderWidth: 1,
    borderTint: orange,
    borderRadius: 20,
    activeTint: orange,
    activeBackgroundTint: white,
    fontSize: 16
}

const styles = StyleSheet.create({
    segmentContainer: {
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        height: 45,
        padding: 2,
    },
    segmentOption: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    segmentLastOption: {
        borderRightWidth: 0
    }
})

SegmentedControls.defaultProps = {
    options: []
}

SegmentedControls.propTypes = {
    options: PropTypes.array.isRequired,
    selectedOption: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default SegmentedControls