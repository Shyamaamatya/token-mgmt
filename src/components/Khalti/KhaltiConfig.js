import { api } from '../../Helper/api';
import myKey from './KhaltiKeys'

let config = {
    
    // replace this key with yours
    "publicKey": myKey.publicTestKey,
    "productIdentity": "1234567890",
    "productName": "Bank Token Management System",
    "productUrl": "http://localhost:3000",
    "eventHandler": {
        onSuccess (payload) {
            // hit merchant api for initiating verfication
            console.log(payload);  
            // const data = {
            // token: payload.token,
            // amount: payload.amount,
            // };

            api.post('/payment/verify', {
                token: payload.token,
                amount: payload.amount,
            }
            ).then((res)=>{
              console.log(res.data);
              alert("Thankyou!")
            })
            .catch((error)=>{
              console.log(error);
            })
            
        },
        // onError handler is optional
        onError (error) {
            // handle errors
            console.log(error);
        },
        onClose () {
            console.log('widget is closing');
        }
    },
    "paymentPreference": ["KHALTI", "EBANKING","MOBILE_BANKING", "CONNECT_IPS", "SCT"],
};

export default config;