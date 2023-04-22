import React from "react";
import { Layout } from "antd";
import DashboardCard from "../../UI Components/Card/DashboardCard";
import StudentPageLayout from "../Layout/StudentPageLayout";
import axios from "axios";
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
 
  onCohereCall =(e)=>{

    const options = {
      method: 'POST',
      url: 'https://api.cohere.ai/v1/generate',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: 'Bearer Aqd9HhJm4cAU9Myu4f2RG4ktJvbMh08MvoYrqGf8'
      },
      data: {
        k: 0,
        max_tokens: 300,
        model: 'command-xlarge-nightly',
        return_likelihoods: 'NONE',
        
        stop_sequence: [],
        stream: true,
        temperature: 0.9,
        prompt: "I\'d like to welcome you to business law 265\n this course is a course in the legal system and the more importantly it\'s a course in your legal rights that we all have very valuable very important legal rights but that many of us are not aware of them for himself or herself so we do not have a big brother kind of a system where the government or some some power is looking after you do your own interest and I really starts with being aware of what your rights are because if you\'re not aware of those rights then there\'s no way that you can take advantage of that you can enjoy them\n I think the best example I can think of that that problem or that situation involves the asbestos industry now you may remember that stress this one time was considered the Wonder product a wonderful thing but it didn\'t burn so it was very big fire resistant to the very good for a building\'s lot of schools and other buildings had time to dispatch to send them because it was good construction material was thought to be safe to blow us Festus insulation to their houses and insulation and cleaning excetera and it was thought to be great stuff well after a little while people realize that the dust that is Festus a product create can cause a lot of health problems people would inhale that dust and they would develop disease specifically a disease called Asperger\'s ptosis which is very serious\n any medications cause even fail\n a particularly the people who were affected by this war of the people who work in the factories manufacturing of special products like the brake linings Etc car so they were in a Dusty environment that was asbestos dust in the air all around them and after breathing it for 10 years or 15 years many of them came down with this disease fastest horses in this class is employment rights employment law and then one of the important aspects of employment law is workers compensation in American worker is injured on the job has a work-related injury or illness such as vital to a medical benefits and if the worker should die the worker is entitled to a death benefit and that death benefit is automatically table as long as\n they are the disease was work-related such as a square and also it is tax exempt cuz it\'s not income in the 1950s quite a few very men working in the factories died leaving a Widow\'s widows and to see how many of those widows had applied for and received the death benefit that workers compensation provided who was Samantha death certificate showing that the death cause of death was asking and also some documentation that the worker had worked for at least 10 years and Industry without a paper they would get a substantial amount of money $50,000 equivalent to in today\'s money of maybe three or four hundred thousand dollars\n apply for it while the research has produced some surprising results of the research showed that only about 50% only about half of those women are almost exclusively women The Widow\'s approximately half of them had applied for and received their workers compensation death benefit of course on the questionnaire the next question after you know if you checked out that you did not receive a reply if your death benefit next question was well what was the reason why not and they stand to reason that the women are all checked off was they were not aware of that they didn\'t know that they had this valuable legal right and the cars they were not aware of their right naturally they could not apply for it they could not receive it and so they and their families went without that important benefit without then for\n right simply because they didn\'t know about the right and there are many other cases like that many of the situations where not knowing what your rights are will naturally cause you not to enjoy their benefit it\'s just like not having a right at all so I think that one of the primary purposes and taking this course and studying and learning about business law or legal environment is to learn what your rights are so that you\'ll be able to manage your personalized manager business transactions and effective manner manners that allows you to take advantage of all of your rights and also your obligations because sometimes in the loss we have obligations as well as rights in fact I think a good way of thinking about obligations as I think of them as the same thing as right but just a different side of the same coin\n for sale for let\'s say you went somebody $1,000 and they had their supposed to repay you today with interests $100 interest you have a right to collect $1,100 today that\'s your legal right that you cannot enforce and get that money on the other hand you are legal right to collect level is the obligation of the person that you lent the money too so let\'s say you left the money to John it\'s Jon\'s obligation to pay you the $11 it\'s your right to receive it only has a corresponding obligation there really two sides of the same coin\n but it\'s important to understand your obligations as well because if you don\'t execute your obligations you can wind up in a lot more trouble that if you had done what your obligations required for example employment is the Americans with Disability Act which requires that if a worker it has a disability the employer is required has an obligation to make a reasonable accommodation that is to spend a reasonable amount of money to Ally this worker to continue to work let\'s say you have a small business and you have a good worker has been working for a couple of years and that worker is that in a car accident and because of the a car accident the worker he is confined to a wheelchair but can certainly get around as a good wheelchair can get around with it but unfortunately your place of business has some steps and and he can't get up the steps\n can you do a little ramp to be built so you can guess we'll tear into their business and once he's in the business he can perform his job to why he had before it might cost a two or three hundred dollars to build a ramp for would say that this ain't good worker has a right to a reasonable accommodation that is he has a right to have you spend a reasonably small amount of money in order to accommodate his disability that will allow him to continue to work that's the employees the workers right but just know I said a moment ago rights and obligations are two sides of the same coin now you as the owner of the small business you have an obligation to provide that reasonable accommodation to build him that little lamp and if for some reason you decline to carry out your obligation that worker I very well might turn around and sue you and you'll end up paying thousands of dollars\n House of dollars in Damages and legal fees because you didn't recognize your obligation but we have put it sometimes it is just as important to recognize obligations\n so after taking this course you're not going to be an expert and I can build a hang out your shingle and practice law but you'll certainly have a much better idea of what your rights are and what your obligations are which will help you enormously I think in your life and in your your career\n closer look at the topic so going to be covering in this course direct your attention to the syllabus and the back page of the sodas we have 24 instructional classes listed you'll notice that topic for our segments the first segment is contracts and we spend actually 10 classes on contracts\n the reason we start with contracts and spend so much time on them is that probably the contract section that is the contract topic is of the greatest practical use for you if you think about your life activities in the things you go about doing your constantly involved in contracts\n if you're renting an apartment if your lease is a form of contract\n which is a form of contract when you buy a meal when you're going to buy lunch today that's a contract for the purchase and sale of that food all the clothes your where is the result of contract if you have a car and the car was acquired by probably buy purchase again with a contract and next time you put gasoline into a car again it's a contract for the purchase of gasoline all of these transactions\n are contracts and in each case we have rights and obligations that are being created so it's very important to understand the number one whether a contract has been formed because if there is no contract then these rights and obligations do not come into being\n once we can recognize that a contract exists we can understand what the rights of the buyer and the seller are and once again once you know those right you'll be able to manage your Affairs manager life much more effectively because you will know what you're entitled to and you will assert those rights were as if you were in the dark. Ignorance or you wouldn't be able to do that so we look at how contracts are created we look at the various elements that are necessary in order to have a contract we look at the issue of written vs. oral contract will discover is it not all contracts have to be written but some do with your closer look at what the writing requirement is and then we'll look at the images of mother issues in connection with contract so after I study English section you should have a pretty good overview of contracts and importantly your rights under contract\n and you'll be entering into contracts continuously every day you'll be involved in in contracts are the legal system a little bit at criminal law and towards which are a civil lawsuit not based on contract and we're going to spend some time on the Internet or the internet and intellectual property which is a topic which is increasingly important everybody leaving use internet every day multiple times that's the way the people nowadays will communicate get information do all kinds of things and saw a little bit on the your rights and obligations in connection with the internet\n can the first segment is agency and business organizations were going to learn that the law of agency under a lot of employment law by which we take a look at it when we take a look at various business organizations like Partnerships and corporations give you an idea of what the basic rules are in terms of these different kinds of a business organizations so you can make more intelligent decision with respect to know what kind of they business organization you wish to operate to operate with\n band of finally will take a look at property where is that with property this is certainly a practical subjects for you because we all have to live somewhere if we have a business of the business has to have some kind of a physical location out of Wichita operates even if it's a virtual business customers over the Internet still you have to have a physical location out of whichever ship products you have to have physical servers and and people to take care of those servers and other electronic equipment so every business has to have some kind of a location that either it rains or it all ends and course most people would like to own their own home and so real estate transactions are quite important and you learn some of the fundamentals of those and importantly you'll also learn some of the fundamentals of real estate Finance because most people\n cannot afford to purchase their own your own home out of out of their checking account or savings account let them borrow some money and so will learn the different ways of doing that and there are advantages and disadvantages in different ways so that's those are the topics that will be useful topics are going to help you in in the transactions in the dealings that you have in your life\n\n Lexus take a look at page five of the syllabus that shows you the academic calendar\n\n create 5 questions of easy level from this lecture\n"
      }
    };
    
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    
    };

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
    <button onClick={this.onCohereCall}>Generate text</button>
     <label htmlFor="inventoryPicture">Transcript</label>
    <input type="file" name="someFile" accept=".jpg" id="photo"/>
   
    
</div>


       
        </Content>
      </StudentPageLayout>
    );
  }
}

  

export default SiderDemo;
