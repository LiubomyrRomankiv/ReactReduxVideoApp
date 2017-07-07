import React from 'react'; 
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDYkmMHStgo7Em1dKeI_ylJNdZwuBK1fNw';

class App extends React.Component{
	constructor(props) {
		super(props);
		
		this.state = {
			videos: []
		}

		YTSearch({
			key: API_KEY,
			term: 'surfboards'
		}, (videos) => {
			this.setState({videos});
		});
	}

	render(){
		return 	(
			<div>
				<SearchBar />
			</div>
		);
	}
}
	

ReactDOM.render(<App />, document.querySelector('.container'));