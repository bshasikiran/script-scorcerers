import React from 'react';
import ReactDOM from 'react-dom';

function Header() {
  return (
    <header>
      <h1>Welcome to My Website</h1>
    </header>
  );
}

function MainContent() {
  return (
    <main>
      <h2>About Us</h2>
      <p>This is a simple website built using React.</p>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2024 My Website</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
function AboutUs() {
  return (
    <section id="about-us">
      <div className="container">
        <h2>About EduGameX</h2>
        <p>EduGameX is a revolutionary platform that combines education with the excitement and engagement of gaming. Our mission is to make learning fun, accessible, and effective for students of all ages.</p>
        <p>At EduGameX, we believe that learning should be an enjoyable experience that encourages curiosity, critical thinking, and creativity. By incorporating gamification elements into our platform, we aim to motivate and inspire learners to achieve their full potential.</p>
        <p>With a diverse range of interactive games, quizzes, and challenges, EduGameX offers personalized learning experiences tailored to individual interests and learning styles. Whether you're studying math, science, languages, or any other subject, there's something for everyone on EduGameX.</p>
        <p>Join us on our mission to revolutionize education and unlock the power of learning through play. Together, we can make learning an adventure!</p>
      </div>
    </section>
  );
}

export default AboutUs;


ReactDOM.render(<App />, document.getElementById('root'));
