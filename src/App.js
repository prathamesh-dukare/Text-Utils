import './App.css';
import { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	const [alertMsg, setAlertMsg] = useState(null)
	const callAlert = (message) => {
		setAlertMsg(message)
	}
	// setTimeout(() => {
	// 	setAlertMsg(null)
	// }, 2100);
	return (
		<Router>
			<div itemID="id">
				<Navbar appName="Text-Utils" />
				<Alert message={alertMsg} />
				<Switch>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/">
						<Home textValue="Enter Text Here" callAlert={callAlert} />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
