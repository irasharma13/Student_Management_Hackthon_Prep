import React from "react";
import { Layout } from "antd";
import DashboardCard from "../../UI Components/Card/DashboardCard";
import StudentPageLayout from "../Layout/StudentPageLayout";

import StudentClasses from "../StudentHome.module.css";

const { Content } = Layout;

class SiderDemo extends React.Component {
  handleAudioUpload = (event) => {
    const file = event.target.files[0];
    console.log('Selected file:', file);
    //upload it to a server
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
          
        </Content>
      </StudentPageLayout>
    );
  }
}
export default SiderDemo;
