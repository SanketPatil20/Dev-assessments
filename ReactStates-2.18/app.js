import Header from './components/Header';
import Footer from './components/Footer';
import StudentCard from './components/StudentCard';
import Counter from './components/counter';

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
