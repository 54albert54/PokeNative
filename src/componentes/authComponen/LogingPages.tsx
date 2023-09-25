import { Button, Text, View ,StyleSheet ,Image , TextInput ,Keyboard} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

import {USER ,USER_DECTAIL } from "../../util/const"
import useAuth from '../../hooks/useAuth';
const initialValue = ()=>(
  {
    // Define las propiedades iniciales del formulario
    userName: '',
    password: '',
  }
)
const ValidationSchema = ()=>{

  return{
  userName:Yup.string().required("Se nececita un usuario."),
  password:Yup.string().required("Se nececita una contraseña.")}
}



const LogingPages = ():JSX.Element => {
  const [error , setError] = useState('')
  const { loging }= useAuth()
  //Validacion
  const formik = useFormik({
    initialValues:initialValue(),
    validationSchema: Yup.object(ValidationSchema()),
    validateOnChange:false,
    onSubmit: (values) => {
      const { password , userName }  = values;

      if ( password != USER.password || userName != USER.username){
        setError('los datos no concuerdan')
        }else{
        
        loging(USER_DECTAIL)
      }
    },
  });

return(         
<View>              
    <Text style={styles.title}>Login Page</Text>
    <TextInput placeholder='userName'
    autoCapitalize="none"
    style={styles.input}
    value={formik.values.userName}
    onChangeText={(text)=>formik.setFieldValue('userName',text)}/>
    <TextInput placeholder='password'
    autoCapitalize="none"
    secureTextEntry={true}
    style={styles.input}
    value={formik.values.password}
    onChangeText={(text)=>formik.setFieldValue('password',text)}
    />
    <Button title='Entrar' onPress={formik.handleSubmit}/>
    <View style={styles.errorContiner}>
  <Text style={styles.errors}>{formik.errors.userName}</Text>
  <Text style={styles.errors}>{formik.errors.password}</Text>
  <Text style={styles.errors}>{error}</Text>

    </View>
    <Text>user : admin - password :123456</Text>
</View>

)}           

export default LogingPages ;



const styles = StyleSheet.create({
  title:{
    width:"100%",
    textAlign:"center",
    fontSize:28,
    fontWeight:"bold",
    marginTop:50,
    marginBottom:15,
    
  },
  input:{
    margin:12,
    borderWidth:1,
    padding:10,
    borderRadius:10
  },
  errorContiner:{
    display:"flex",
    alignItems:"center",
    marginTop:30
   
    
  },
  errors:{
    marginVertical:"auto",
    color:"#f00",
    fontSize:16
  }
})




