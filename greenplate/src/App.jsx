import React from "react";
import "./App.css";
import Video from "../components/Video";
import Image from "../components/Image";
import Gallery from "../components/Gallery";
import ProfileCard from "../components/ProfileCard";

function App() {
  const imageArray = [
    {
      url: "Temp.jpeg",
      alt: "Description of image 1",
      description: "This is image 1",
    },
    {
      url: "Temp.jpeg",
      alt: "Description of image 2",
      description: "This is image 2",
    },
    {
      url: "Temp.jpeg",
      alt: "Description of image 2",
      description: "This is image 3",
    },
    {
      url: "Temp.jpeg",
      alt: "Description of image 2",
      description: "This is image 4",
    },
    {
      url: "Temp.jpeg",
      alt: "Description of image 2",
      description: "This is image 5",
    },
    {
      url: "Temp.jpeg",
      alt: "Description of image 2",
      description: "This is image 6",
    },
    // Add more image objects here
  ];

  return (
    <div>
      <div className="heading">
        <div className="heading-content-container">
          <h1>Introducing GreenPlate</h1>
          <div className="p-container">
            <p>
              GreenPlate is a sustainable food management system designed to
              streamline food consumption and shopping practices. By tracking
              daily calorie intake, managing ingredient inventories, and
              facilitating efficient grocery shopping, GreenPlate not only
              enhances dietary habits but also ensures that food waste is
              reduced and resource use is optimized.
            </p>
          </div>
        </div>
      </div>
      <div className="ui">
        <div className="ui-content-container">
          <Video
            videoUrl="https://www.youtube.com/embed/SKqCNqWc8nM?si=InYKl7QeKCENkzIQ"
            description={
              "Delve into the world of sustainable eating with our comprehensive functionality demo of the GreenPlate app. This video walkthrough showcases how our app simplifies tracking your daily food intake, managing your pantry, and planning your shopping with an eye toward sustainability. "
            }
          />
        </div>
      </div>
      <div className="body">
        <div className="body-content-container">
          <h2>Domain Model</h2>
          <Image
            imageUrl="Temp.jpeg"
            alt="A descriptive text for the image"
            description="Your description for the image here."
          />
          <br></br>
          <div style={{ borderBottom: "1px solid #ccc", margin: "5rem" }}></div>
          <h2>System Diagram</h2>
          <Image
            imageUrl="Temp.jpeg"
            alt="A descriptive text for the image"
            description="Your description for the image here."
          />
          <br></br>
          <div style={{ borderBottom: "1px solid #ccc", margin: "5rem" }}></div>
          <h2>Design Class Diagram</h2>
          <Image
            imageUrl="Temp.jpeg"
            alt="A descriptive text for the image"
            description="Your description for the image here."
          />
        </div>
      </div>
      <div className="body-dark">
        <div className="body-content-container">
          <h2>UI Highlights</h2>
          <Gallery images={imageArray} />
        </div>
      </div>
      <div className="body">
        <div className="body-content-container">
          <h2>Project Outcomes</h2>
          <p>What features did we complete each sprint?</p>
          <div style={{ borderBottom: "1px solid #ccc", margin: "5rem" }}></div>
          <h2>Project Challenges</h2>
          <p>What were some of the challenges?</p>
        </div>
      </div>
      <div className="body-dark">
        <div className="body-content-container">
          <h2>Contributions & Topics Learned</h2>
          <ProfileCard
            profilePic="AV.png"
            name="Allison Vu"
            description="This project taught me how to translate client's needs to technical TODOs for my team, roadmap a timeline to ensure we deliver the requirements, and work with my team to identify bottlenecks in the workflow. I used Jira to track Sprint TODOs. I also worked on the front-end (e.g. I created the navigation bar using Fragments, form validation, form-entry modals using Dialogs, and the splash screen), reviewed code + fixed bugs for my team, and created our demo site using React."
          />
          <div style={{ borderBottom: "1px solid #ccc", margin: "1rem" }}></div>
          <ProfileCard
            profilePic="AV.png"
            name="Rhoney Lee"
            description="I learned the importance of communication, how to coordinate meetings, and checked in with my team members frequently. It was my first time using Android Studio, and I learned so much including but not limited to coding JUnits, creating buttons + entry forms, how to use version control, and how to design a Domain Model, Design Class Diagram, + Sequence Digram. I oversaw the design diagrams throughout the semester and updated them each Sprint."
          />
          <div style={{ borderBottom: "1px solid #ccc", margin: "1rem" }}></div>

          <ProfileCard
            profilePic="AV.png"
            name="Keon Sanavandi"
            description="Description"
          />
          <div style={{ borderBottom: "1px solid #ccc", margin: "1rem" }}></div>

          <ProfileCard
            profilePic="AV.png"
            name="Michael Manchiraju"
            description="Description"
          />
          <div style={{ borderBottom: "1px solid #ccc", margin: "1rem" }}></div>

          <ProfileCard
            profilePic="AV.png"
            name="Brendan Thomasson"
            description="Description"
          />
          <div style={{ borderBottom: "1px solid #ccc", margin: "1rem" }}></div>

          <ProfileCard
            profilePic="AV.png"
            name="Seong Won Park"
            description="Description"
          />
        </div>
      </div>
      <div className="body">
        <div className="footer">
        <p>Site Developer - Allison Vu</p>
        <p>Demo Video + Site Content Creator - Rhoney Lee</p>
          <p>Made with ❤️ - Allison Vu ©️ 2024</p>
        </div>
      </div>
    </div>
  );
}

export default App;
