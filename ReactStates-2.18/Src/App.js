import Header from './Components/Header';
import Footer from './Components/Footer';
import StudentCard from './Components/StudentCard';
import Counter from './Components/Counter';

function App() {
  return (
    <div>
      <Header />

      <StudentCard name="Alice" course="Node.js" />
      <StudentCard name="Bob" course="React" />

      <Counter />

      <Footer />
    </div>
  );
}

export default App;
