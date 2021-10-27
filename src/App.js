import './App.css';
import { useState } from 'react'
import Navbar from './components/Navbar';
import Input from './components/Input';
import Footer from './components/Footer';
import Alert from './components/Alert';


function App() {
	const [alertMsg, setAlertMsg] = useState(null)
	const callAlert = (message) => {
		setAlertMsg(message)
	}
	setTimeout(() => {
		setAlertMsg(null)
	}, 2100);
	return (
		<div itemID="id">
			<Navbar appName="Text-Utils" />
			<Alert message={alertMsg} />
			<div className="container"><Input textValue="Enter Text Here" callAlert={callAlert} /></div>
			<Footer />
		</div>
	);
}

export default App;
