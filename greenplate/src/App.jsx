import React from "react";
import "./App.css";
import Video from "../components/Video";
import Image from "../components/Image";
import Gallery from "../components/Gallery";
import ProfileCard from "../components/ProfileCard";
import CollapsibleCard from "../components/CollapsibleCard";

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
            videoUrl="https://www.youtube.com/embed/bTOgIGYsCzI?si=uKpIcHJJkeR5UPTL"
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
            id=""
            imageUrl="DomainModel.png"
            alt="A descriptive text for the image"
            description="This domain model represents the classes we have implemented in our app and their respective attributes, offering a comprehensive and easy-to-see view of the structure of our app. Our model consists of a two different 'types' of classes. First, we have the 'entry' type class, or any type of class that can have an instance. This includes the user, recipe, ingredient, and input meal classes, which have individual attributes that depend on user input. The second type of class is the 'database' type class.This includes the user database, meal database, the cookbook (recipes database), the pantry (ingredients database), and the shopping list. These databases are structured using Firebase to store instances of the 'entry' type class accordingly. The domain model shows the relationship between these classes using arrows, multiplicities, and verbs."
          />
          <br></br>
          <div style={{ borderBottom: "1px solid #ccc", margin: "5rem" }}></div>
          <h2>System Diagram</h2>
          <Image
            id=""
            imageUrl="SystemDiagram.png"
            alt="A descriptive text for the image"
            description="The sequence diagram is a model that shows a specific user-system interaction based on one use case. This sequence diagram shows a scenario where a user wants to add an ingredient entry into their pantry. First, the user must use the navigation bar to click on the ingredients section, which is facilitated by Main Activity. From there, the user is able to click the add ingredient button, which calls the addIngredient method, displaying a pop up that allows the user to enter the name, quantity, calories per serving, and expiration date of the ingredient. The system attempts to write this to the ingredient database using Firebase, and this can lead to one of two outcomes: onFail or onSuccess. OnFail is called when adding the ingredient was unsuccessful, due to reasons such as the ingredient being a duplicate, the user entering only whitespace, etc. This will then return an error message to the user describing the issue. OnSuccess is called when adding the ingredient is successful, which then allows the pop up screen to close, and the ingredient to be added to the database."
          />
          <br></br>
          <div style={{ borderBottom: "1px solid #ccc", margin: "5rem" }}></div>
          <h2>Design Class Diagram</h2>
          <Image
            id=""
            imageUrl="DesignClassDiagram.png"
            alt="A descriptive text for the image"
            description="The Design Class Diagram can be thought of as a more detailed, rigorous extension of the idea of the domain model. In the design class diagram, classes are represented as a box with two sections, the top section being attributes of the class, and the bottom section being methods of the class. The visibility of the attributes and methods are defined by the -, #, or + symbol before them. - represents private, # is protected, and + is public. Defining the visibility in this way provides an easy way to determine how classes are working in interaction with each other. Similar to the domain model, this diagram also uses verbs and multiplicities to describe the relationship, but also includes the directionality. The lines and arrows of the diagram also define the relationship between classes. For example, the dotted open arrow connecting the ingredients database and the ingredients fragment indicates a dependency relationship, while the white diamond arrow from recipes fragment to recipes activity indicates an aggregational relationship. Thus, the DCD provides a comprehensive view into the intricate details of the app's classes."
          />
        </div>
      </div>
      <div className="body-dark">
        <div className="body-content-container">
          <h2>UI Highlights</h2>
          <Image
          id="bigger"
          imageUrl="UIHighlights.png"
          alt=""
          description=""
          />
        </div>
      </div>
      <div className="body">
        <div className="body-content-container">
          <h2>Project Outcomes</h2>
          <div className="p-container">
            <div>
            <p>Over the past 16 weeks, we proudly worked on and finished our semester-long project: GreenPlate. Our team of six met for the first time at the beginning of the semester, eager to design and implement our app.</p>
            </div>
          </div>
          <CollapsibleCard
            title="Sprint 1 : App Framework"
            content="The journey began with establishing a solid foundation during Sprint 1. For some of us, it was our first time using Android Studio, running scrum meetings, and using task distribution systems like Jira. We also learned how to implement software architecture structures like Model-View-ViewModel into our code to ensure a streamlined design. Our main goal for Sprint 1 was implementing the general structure of our app by creating diagrams, adding placeholder screens, and setting up the different feature classes such as Ingredients, Recipes, Shopping Cart, Meals, and User Info."
          />
          <CollapsibleCard
            title="Sprint 2 : Implementing Specific Features"
            content='Sprint 2 aimed at enhancing the Input Meals feature, personalizing calorie goals, displaying calorie intake, and integrating data visualization. The objectives were set to create a more interactive and user-friendly experience in tracking daily meals and calorie intake, thereby aligning with our project goal of promoting sustainable eating habits. Our team began implementing the methods and logical components of our app, and engaged in hands-on learning of the refactoring techniques we learned in class to implement the Singleton pattern. We also learned about user-app interactions with Sequence Diagrams, and refined the System Sequence Diagram and Domain Model we created in Sprint 1.'
          />
          <CollapsibleCard
          title="Sprint 3 : Heavy Use of Firebase Database"
          content="As we delved into Sprint 3, our aspirations were high as we aimed to elevate the functionality of GreenPlate's Recipes and Ingredients screens. Our main goals were to implement a scrollable list in both screens so that users would be able to add and choose from a global selection of recipes, and update their pantry with the ingredients they had on hand. The combination of these screens would allow users to get ideas for recipes and make healthy, sustainable meal choices based on their personal pantry."
          />
          <CollapsibleCard
          title="Sprint 4 : Fullstack Features"
          content="In our last Sprint, we worked to finalize our app by implementing a functional shopping list screen, allowing users to add, modify, and purchase ingredients needed for recipes. Additionally, the sprint enables users to cook a recipe of their choice, which automatically updates the meal database and calorie tracking system. These goals collectively aimed to enhance user convenience, streamline meal planning, and improve overall app functionality."
          />
          <CollapsibleCard
          title="Our Impact"
          content="We are extremely proud of our final product and the work we have completed this semester. As we reflect on our journey, we are grateful to this class and to each other for the treasurable lessons learned and the goals achieved throughout the project. Our collective dedication and perseverance have culminated in a product that we are confident in its potential to positively impact users' lives. As this project has come to a close, we carry with us the experience of countless hours spent collaborating, problem-solving, and innovating. We hope the impact this project made on us translates to our users and continues to resonate as we embark on new endeavors."
          />
          <div style={{ borderBottom: "1px solid #ccc", margin: "5rem" }}></div>
          <h2>Project Challenges</h2>
          <div className="p-container">
            <div>
              <p>Throughout the four sprints of our GreenPlate project, our team encountered and overcame several challenges that shaped our journey and helped us grow.</p>
            </div>
          </div>
          <CollapsibleCard
          title="Sprint 1 : Overlooking Requirements"
          content="In Sprint 1, while we successfully created the app's initial structure and linked essential pages, such as the login and account creation screens, we realized only after the sprint that we missed an essential component: the navigation bar. This made us realize the importance of attention to detail, particularly in user interface design, and helped us to learn an essential part of testing our app: to test our app as if we were a user, not just a developer."
          />
          <CollapsibleCard
          title="Sprint 2 : Unrealistic Goals"
          content="In Sprint 2, our focus was implementing features that would allow users to log meals and integrating data visualization of calories to promote sustainable eating habits. As this was our first time working with data visualization, we largely underestimated the complexity of this task and assigned it to one team member only. As a result of this, we only had the structure for visualization by the end of the sprint, with no reflection of user meal inputs. This experience highlighted the importance of realistic goal-setting and teamwork, as well as creating a sprint backlog that accurately reflected our abilities. This sprint also tested our communication abilities. Due to lack of communication and last-minute work, our team had to learn to communicate concerns in an effective and constructive manner to ensure our project goals would be met. With the lessons learned, we headed into Sprint 3."
          />
          <CollapsibleCard
          title="Sprint 3 : Feature Interdependency"
          content="Sprint 3 presented its own set of challenges, mainly concerning task distribution. When we initially distributed tasks, we broke it down into many parts and assigned around 4-5 members to work on different parts of one larger task. In an effort to not burden one team member with a huge task, we overcompensated in this sprint and unintentionally introduced an unstable, “high-coupling'' dynamic. This led to us being extremely dependent on each others’ parts; if even one team member was late on their part, everyone else was unable to do their part. Thus, we recognized the need for stricter adherence to deadlines and clearer task distribution to ensure organizational efficiency."
          />
          <CollapsibleCard
          title="Sprint 4 : Improvement Plan"
          content="By Sprint 4, we learned the most efficient way of distributing tasks. In this sprint, we were tasked with implementing the Shopping List screen and updating the recipe screen. We assigned 3 team members to each screen and made sure to assign parts that would allow each member to push into the main branch of the project without waiting for other members. This has proved effective: in this sprint, even if one part was taking long, other parts of the app could be developed simultaneously."
          />
          <CollapsibleCard
          title="Reflections"
          content="Overall, the challenges encountered throughout our GreenPlate project helped us grow both individually and as a team. We can confidently say that each obstacle was a stepping stone towards project success, and the knowledge we gained will definitely be carried into our future projects."
          />
        </div>
      </div>
      <div className="body-dark">
        <div className="body-content-container">
          <h2>Contributions & Learnings</h2>
          <ProfileCard
            profilePic="AV.png"
            name="Allison Vu"
            description="This project taught me how to translate client's needs to technical TODOs for my team, roadmap a timeline to ensure we deliver the requirements, and work with my team to identify bottlenecks in the workflow. I used Jira to track Sprint TODOs. I also worked on the front-end (e.g. I created the navigation bar using Fragments, form validation, form-entry modals using Dialogs, and the splash screen), reviewed code + fixed bugs for my team, and created our demo site using React."
          />
          <div style={{ borderBottom: "1px solid #ccc", margin: "1rem" }}></div>
          <ProfileCard
            profilePic="RL.png"
            name="Rhoney Lee"
            description="I learned the importance of communication, how to coordinate meetings, and checked in with my team members frequently. It was my first time using Android Studio, and I learned so much including but not limited to coding JUnits, creating buttons + entry forms, how to use version control, and how to design a Domain Model, Design Class Diagram, + Sequence Digram. I oversaw the design diagrams throughout the semester and updated them each Sprint."
          />
          <div style={{ borderBottom: "1px solid #ccc", margin: "1rem" }}></div>

          <ProfileCard
            profilePic="KS.jpeg"
            name="Keon Sanavandi"
            description="This project was an interesting dive into programming in a group context, working with others to implement a complex and interconnected app. I took a role in a variety of portions of the app, learning real world database usages through firebase, as well as working to integrate the meals database, ingredients database, shopping list database, and recipes database. In addition, I did a lot of front-end event response work, responding to button clicks and integrating with the databases. In total, this project helped me learn a variety of Agile techniques, and real world programming strategies."
          />
          <div style={{ borderBottom: "1px solid #ccc", margin: "1rem" }}></div>

          <ProfileCard
            profilePic="MM.jpeg"
            name="Michael Manchiraju"
            description="This project taught me how to translate a client’s needs into specific requirements that our team can implement and develop into a final product. Along this journey, I learned how to utilize the Agile development toolkit, such as sprint planning, scrum, and sprint review meetings, and use tools such as Jira to manage the product backlog. Additionally, I was introduced to the Git version control system and learned how to effectively and efficiently utilize Git to ensure the integrity of our project through suitable employment of Pull Requests and managing merge conflicts using industry-specific best practices. I also worked with the Firebase database management platform and learned to integrate front-end UI elements with the real-time database. I played an essential role as a mediator within our group, ensuring group morale remained high, everyone’s opinions were heard respectfully and professionally, and issues were solved effectively and professionally."
          />
          <div style={{ borderBottom: "1px solid #ccc", margin: "1rem" }}></div>

          <ProfileCard
            profilePic="BT.png"
            name="Brendan Thomasson"
            description="This project had me dive elbows deep into a practical, real-world Agile development environment. I learned how to interface with GitHub - how to coordinate with team members to keep the project modular and operating as its parts were engineered and plugged in. I learned valuable lessons in how best to operate within a group, ensuring my code would assimilate with the others cleanly. 
            I worked to integrate the front and back-end of the project, polling asynchronous information from Firebase and using it to update scrollable lists, calculate for numeric displays, and build objects. Bugfixing was an endless journey, but that process helped build the skills of reading other's code to gain a wholistic understanding of all the project's moving parts. 
            Throughout development, I learned the ins-and-outs of Android Studio, including how to make scrollable lists, manipulate individual elements of a list, create buttons, create dialogues, and how to push and pull from Firebase. "
          />
          <div style={{ borderBottom: "1px solid #ccc", margin: "1rem" }}></div>

          <ProfileCard
            profilePic="SP.jpg"
            name="Seong Won Park"
            description="Through this project, I gained a deep appreciation for the importance of communication within a team. By utilizing Jira, we were able to enhance our team's efficiency significantly. Employing the Agile Scrum methodology allowed us to experience real-life app development, which illuminated how databases interact with user interfaces. Additionally, I acquired hands-on experience in app creation using Android Studio. I was responsible for designing the front-end elements such as creating buttons on the input meal screen and compiling lists for the shopping list. Additionally, I developed functions within the database to support these features."
          />
        </div>
      </div>
      <div className="body">
        <div className="footer">
          <p>Site Developer - Allison Vu</p>
          <p>Introduction & Functionality Video - Rhoney Lee</p>
          <p>Design & Architecture - Keon S. + Brendan T.</p>
          <p>UI Highlights - Sophia Park</p>
          <p>Conclusions & Challenges - Michael M.</p>
          <p>Learning & Contributions - Everyone</p>
          <p>Made with ❤️ - Allison Vu ©️ 2024</p>
        </div>
      </div>
    </div>
  );
}

export default App;
