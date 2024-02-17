import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ApartmentDetailsPage = ({ route }) => {
  const { apartment } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://github.com/mariamheshamaly/Uploading-Image/blob/main/output-onlinepngtools.png?raw=true' }} style={styles.logo} />
      <Text style={styles.header}>{apartment.title}</Text>
      <View style={styles.imageContainer}>
        <Image source={{ uri: apartment.image }} style={styles.apartmentImage} />
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Location:</Text>
        <Text style={styles.detail}>{apartment.location}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Price:</Text>
        <Text style={styles.detail}>${apartment.price}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Bedrooms:</Text>
        <Text style={styles.detail}>{apartment.bedrooms}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Bathrooms:</Text>
        <Text style={styles.detail}>{apartment.bathrooms}</Text>
      </View>
      {/* Add more details as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#eeeeee', // Light beige color
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain', // Scale the image uniformly
    marginBottom: -20,
    marginTop: -40,
    marginLeft: -10
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#192841'
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  apartmentImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  detailContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    padding:10
  },
  label: {
    width: 100,
    textAlign: 'left',
    color:'#192841'
  },
  detail: {
    flex: 1,
    fontSize: 20,
    textAlign: 'left',
    color:'#192841'
  },
});

export default ApartmentDetailsPage;
