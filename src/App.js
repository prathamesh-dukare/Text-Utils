import './App.css';
import Navbar from './components/Navbar';
import Input from './components/Input';

function App() {
	return (
		<div itemID = "id">
			<Navbar appName = "Text-Utils"/>
			<div className="container"><Input textValue = "Enter Text Here"/></div>
		</div>
	);
}

export default App;
