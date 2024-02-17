import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const ApartmentListingPage = ({ navigation }) => {
  const apartments = [
    { id: 1, 
      title: 'The Metropolitan Manor',
      location: "Located in the heart of the city, close to shopping centers, restaurants, and entertainment venues.",
      bedrooms: "3 bedrooms, each with spacious closets.",
      bathrooms: "2 full bathrooms and 1 half bathroom.",
      floorArea: "The total floor area of the apartment is 1,200 square feet.",
      utilitiesIncluded: "Rent includes water, electricity, and high-speed internet.",
      PetFriendly: "Pets are welcome in the apartment",
      price: 1000, 
      image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/AIMCO_apartment_interior.jpg"},
   
     { id: 2,
       title: 'The Urban Retreat',
       location: "Surrounded by lush greenery and countryside scenery, offering a peaceful retreat from the city.",
       bedrooms: "2 bedrooms, each with spacious closets.",
       bathrooms: "2 full bathrooms and 1 half bathroom in the apartment.",
       floorArea: "The total floor area of the apartment is 1,500 square feet.",
       utilitiesIncluded: "Rent includes water, electricity, and high-speed internet.",
       PetFriendly: "Pets are welcome in the apartment.",
       price: 1500,
       image: "https://github.com/mariamheshamaly/Uploading-Image/blob/main/Screenshot%20(64).png?raw=true" },
       
     { id: 3,
        title: 'The Luxe Loft', 
        price: 3000, 
        location: " Within a secure gated community featuring amenities such as tennis courts, swimming pools, and walking trails.",
        bedrooms: "4 bedrooms, each with spacious closets.",
        bathrooms: "3 full bathrooms and 1 half bathroom in the apartment.",
        floorArea: "The total floor area of the apartment is 2,000 square feet.",
        utilitiesIncluded: "Rent includes water, electricity, and high-speed internet.",
        PetFriendly: "Pets are welcome in the apartment",
        image: "https://github.com/mariamheshamaly/Uploading-Image/blob/main/Screenshot%20(66).png?raw=true"},
    
  ];

  const handleViewDetails = (apartment) => {
    navigation.navigate('ApartmentDetails', { apartment });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <Image source={{ uri: 'https://github.com/mariamheshamaly/Uploading-Image/blob/main/output-onlinepngtools.png?raw=true' }} style={styles.logo} />
      <Text style={styles.header}>Apartments</Text>
      {apartments.map((apartment) => (
        <TouchableOpacity key={apartment.id} style={styles.apartmentContainer} onPress={() => handleViewDetails(apartment)}>
          <Image source={{ uri: apartment.image }} style={styles.apartmentImage} />
          <TouchableOpacity style={styles.buttonContainer} onPress={() => handleViewDetails(apartment)}>
            <Text style={styles.buttonText}>View Details</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    color:'#eeeeee'
  },
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#192841'
  },
  apartmentContainer: {
    marginBottom: 20,
  },
  apartmentImage: {
    width: 250,
    height: 160,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  buttonContainer: {
    backgroundColor: '#a3967e',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain', // Scale the image uniformly
    marginBottom: -20,
    marginTop: -20,
    marginLeft: -300,
   
  },
});

export default ApartmentListingPage;
