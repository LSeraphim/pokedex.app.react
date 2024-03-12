import {Image, Text, View} from 'react-native'
import { styles } from './style'
import { pokemons } from '../../data/pokemons';
import { POKEMON_TYPE_COLORS } from '../../Utils/colors'

const imageSource = require('../../../assets/header.jpg');

export default function Card() {
    let pokemon = pokemons[0];
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={imageSource} style={styles.image}></Image>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    Pokédex
                </Text>
                <Text style={{ fontSize: 16 }}>
                    Encontre seu pokemon favorito pela aqui.
                </Text>
            </View>
        </View>
    )
}