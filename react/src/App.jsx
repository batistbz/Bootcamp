import Header from "./components/Header";
import CourseSection from "./components/CoursesSection";
import NewSection from "./components/NewSection"
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Header/>
    <main>
    <CourseSection/>
    <NewSection/>
    <ContactForm/>
    <Footer/>
    </main>
    </>
  );
}

export default App;
