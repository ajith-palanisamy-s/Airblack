import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground, TextInput, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const App: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [whatsappNumber, setWhatsappNumber] = useState<string>('');
  const [profession, setProfession] = useState<string>('');
  const [goal, setGoal] = useState<string>('');
  const [city, setCity] = useState<string>('');

  const handleSubmit = () => {
    // Handle form submission
    console.log({
      name,
      whatsappNumber,
      profession,
      goal,
      city,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.Text}>
          <Image
            source={{
              uri: "data:image/png;base64,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" }}
            style={styles.logo}
          />
        </View>
        <ImageBackground
          source={{ uri: 'https://images.pexels.com/photos/21839291/pexels-photo-21839291/free-photo-of-the-sun-shines-through-a-window-in-a-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' }}
          style={styles.imageBackground}
          imageStyle={styles.imageStyle}
          blurRadius={3}
        >
          <Text style={styles.headerText}>PRESENTS</Text>
        </ImageBackground>
      </View>
      <Text style={styles.title}>Professional Online Makeup Course</Text>
      <View style={styles.certificationRow}>
        <Text style={styles.certification}>Certification Programme</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>⭐ Rated 4.85/5</Text>
        </View>
      </View>
      <View style={styles.bulletPoints}>
        <Text style={styles.bulletPoint}>-India’s No.1 Online Makeup Course</Text>
        <Text style={styles.bulletPoint}>-Learn by LIVE Do-it-Together Classes</Text>
        <Text style={styles.bulletPoint}>-Unlimited Practise Session to master skills</Text>
      </View>
    
     
      {/* New Form Section */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#888"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="WhatsApp Number"
          placeholderTextColor="#888"
          value={whatsappNumber}
          onChangeText={setWhatsappNumber}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Profession"
          placeholderTextColor="#888"
          value={profession}
          onChangeText={setProfession}
        />
        <TextInput
          style={styles.input}
          placeholder="Goal"
          placeholderTextColor="#888"
          value={goal}
          onChangeText={setGoal}
        />
        <TextInput
          style={styles.input}
          placeholder="City"
          placeholderTextColor="#888"
          value={city}
          onChangeText={setCity}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
      <ImageBackground
          source={{ uri: 'https://images.pexels.com/photos/1910051/pexels-photo-1910051.jpeg?auto=compress&cs=tinysrgb&w=400' }}
          style={styles.imageBackgroundd}
          imageStyle={styles.imageStyle}
          blurRadius={1}
        >
          <Text style={styles.headerText}>Why should you join Airblack?</Text>
          <Text style={styles.button}>
          <Text style={styles.buttonText}>Apply Now</Text>
        </Text>
        </ImageBackground>
      <View style={styles.containerr}>
      <Text style={styles.headerText}>Get Certified From</Text>
      <Text style={styles.headerText}>India's  Biggest Beauty Platform</Text>
      
    </View>
    <View style={styles.certificateContainer}>
        <Image
         source={{
          uri: "data:image/jpeg;base64,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" }}
        style={styles.certificateImage}
          resizeMode="contain"
        />
      </View>
<View>
  
      <ImageBackground
      source={{ uri: 'https://images.pexels.com/photos/1115128/pexels-photo-1115128.jpeg?auto=compress&cs=tinysrgb&w=400' }}
      style={styles.background}
      blurRadius={3}
    >
      <View style={styles.overlay}>
        <Text style={styles.titlee}>Join our growing community of</Text>
        <Text style={styles.titlee}>35,000+ alumni</Text>
        <Text style={styles.button}>
          <Text style={styles.buttonText}>Apply Now</Text>
        </Text>
        <View style={styles.iconContainer}>
          <FontAwesome name="instagram" size={40} color="white" style={styles.icon} />
          <FontAwesome name="facebook" size={40} color="white" style={styles.icon} />
          <FontAwesome name="linkedin" size={40} color="white" style={styles.icon} />
          <FontAwesome name="twitter" size={40} color="white" style={styles.icon} />
        </View>
      </View>
    </ImageBackground>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#000', // Background color
  },
  header: {
    marginBottom: 0,
  },
  imageBackground: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackgroundd:{
    width: 350,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    resizeMode: 'cover',
  },
  headerText: {
    color: '#fff',
    fontSize: 40,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  title: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  certificationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    color: '#FFFFFF',
  },
  certification: {
    fontSize: 16,
    color: '#FFFFFF',
    backgroundColor: '#444444',
    padding: 5,
    borderRadius: 5,
  },
  ratingContainer: {
    marginBottom: 10,
  },
  rating: {
    fontSize: 16,
    color: '#ffff00',
  },
  description: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  starIcon: {
    marginLeft: 20,
    width: 10,
    height: 10,
  },
  bulletPoints: {
    marginBottom: 20,
  },
  bulletPoint: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  imageGallery: {
    marginVertical: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  Text: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  galleryImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  formContainer: {
    marginBottom: 60,
    color: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 50,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#fff',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 30,
    marginTop:20,
    marginBottom:20,


    alignItems: 'center',
  },
  titlee: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#ff007f',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  icon: {
    marginHorizontal: 10,
  },
  containerr: {
    flex: 1,
    marginTop:40,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTextt: {
    color: '#000000',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subHeaderText: {
    color: '#0000000',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  certificateContainer: {
    marginTop:20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  certificateImage: {
    width: 300,
    height: 350,
  },

});

export default App;
