import React from "react";
import { Layout } from "antd";
import DashboardCard from "../../UI Components/Card/DashboardCard";
import StudentPageLayout from "../Layout/StudentPageLayout";

import StudentClasses from "../StudentHome.module.css";
// import { SpeechClient } from '@google-cloud/speech';
// import { promisify } from 'util';



const { Content } = Layout;

class SiderDemo extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     transcript: '',
  //   };
  //   this.handleSpeechRecognition = this.handleSpeechRecognition.bind(this);
  // }
  

  handleAudioUpload = async(event) => {
    const file = event.target.files[0];
    console.log('Selected file:', file.name);
    //const { promisify } = require('util');
    //upload it to a server
    // const url = 'https://storage.googleapis.com/upload/storage/v1/b/la2023hacks/o?uploadType=media&name=${file.name}';
    const audioUrl = 'https://storage.googleapis.com/upload/storage/v1/b/la2023hacks/o?uploadType=media&name='+file.name;
     try {
        const response = await fetch(audioUrl, {
            method: 'POST',
            body: file,
            mode: 'cors',
            headers: {
              authorization: 'Bearer ya29.a0Ael9sCP6ww8gk1FGkA9hRlWOnNePlPzMMBf-PYbZ-4qIgZCZgZhH7ObMQB41tpPRUVxpuDQsb5Dz0idH1YE_x0y4don3TRIZmMzIFBa1hUlFOMaw6E-UJy1-GG90RNbM8XOD-74VjEqAI2HFuw5IJe-ngYp2aCgYKAVESARISFQF4udJhmH36OPSWWp6otprvhLltNQ0163'
            }
        });
        console.log(response);
        const bucketUrl = response.url;
        const speechToTextUrl = 'https://speech.googleapis.com/v1p1beta1/speech:longrunningrecognize';
        //console.log(response.url);

        const secondResponse = await fetch(speechToTextUrl, {
          method: 'POST',
          headers: {
           // 'Content-Type': 'application/json',
           authorization: 'Bearer ya29.a0Ael9sCPG3MJUrwrpe23MqLM0EwdA3k7IruOXg95HOS-aCUR-CnVZAiKCKclmZhqsmsI2OesGBkw-mDGNYHK4muC55c6wVp_S-DPB8zZrUBPbxJJsTDDU9iSeY79hqMw688cjJ0NvowNebAv0G02jXBGW-Td0aCgYKAXoSARISFQF4udJhuuSeARZWhKO1Zhs0Eh_DJA0163'
          },
          body: JSON.stringify( {
            config: {
              "encoding": "MP3",
              "sample_rate_hertz": 16000,
              "language_code": "en-US"
            },
            audio: {
              "uri": "gs://la2023hacks/audio-files_Introduction_to_the_Course.mp3"
            },
            output_config: {
              "gcs_uri": "gs://la2023hacks/transcript/transcript7.txt"
            }
          })
      });
  
      //Handle the response from the second API call
      const data = await secondResponse.json();
      console.log(data);

    } catch (error) {
        console.error('Error:', error);
    }
   
  }
 
  

  render() {
    return (
      <StudentPageLayout menuSelect="1">
        <Content className={StudentClasses.dashboard}>
        <label htmlFor="audio-upload">Upload Audio File:</label>
                   <input type="file" id="audio-upload" onChange={this.handleAudioUpload} />
                   
         {/* <DashboardCard
            imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwmgYEUwvWfI5ivwD5eXaBGzR35wdzrjI-B1MDYIBK9PJBSrwF-A"
            title="Assignments"
            link="/assignments"
    />*/}
    <div>
     <label htmlFor="inventoryPicture">Transcript</label>
    <input type="file" name="someFile" accept=".jpg" id="photo"/>
   
    
</div>


       
        </Content>
      </StudentPageLayout>
    );
  }
}

  

export default SiderDemo;
