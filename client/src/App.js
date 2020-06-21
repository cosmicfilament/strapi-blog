import React from 'react';
import { Switch, Route } from 'react-router-dom';
// styled components
import GlobalStyles from './shared/styles/GlobalStyles';

// local code
import Home from './home';
import PostDetail from './postDetail';
import Header from './header';
import Footer from './footer';

function App () {
	return (
		<React.Fragment>
			<GlobalStyles />
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/:id' component={PostDetail} />
			</Switch>
			<Footer />
		</React.Fragment>
	);
}

export default App;
