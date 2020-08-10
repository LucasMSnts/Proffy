import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem() {
  return (
    <View style={styles.container}> 
      <View style={styles.profile}>
        <Image 
          style={styles.avatar}
          source={{ uri: 'https://api.adorable.io/avatars/285/teste.png' }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Lucas</Text>
          <Text style={styles.subject}>Logica</Text>
        </View>
      </View>

      <Text style={styles.bio}>
      Duis tempor urna mi, et dictum nisl dictum ac. Mauris interdum. 
      {'\n'}
      Cras placerat pretium facilisis. Integer mattis nisi a purus faucibus, eget accumsan tellus sollicitudin.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {`   `}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;