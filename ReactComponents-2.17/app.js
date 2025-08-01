import Header from './Header';
import Footer from './Footer';
import StudentCard from './StudentCard';

function App() {
  return (
    <div>
      <Header />
      
      <StudentCard name="Sanket" course="Node.js" />
      <StudentCard name="BobTheBuilder" course="React" />
      
      <Footer />
    </div>
  );
}

export default App;
