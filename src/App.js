import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, FormControl , HelpBlock } from 'react-bootstrap';
import marked from 'marked';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			html: ''
		}

		this.getUserCode = this.getUserCode.bind(this);
		this.createMarkup = this.createMarkup.bind(this);
	}

	getUserCode(e) {
		marked.setOptions({
			gfm: true,
			tables: true,
			breaks: false,
			pedantic: false,
			sanitize: true,
			smartLists: true,
			langPrefix: 'language-'
		});
		
		let changed = marked(e.target.value);

		this.setState({
			html: changed
		})
  	}

	createMarkup() {
		return {__html: this.state.html};
	}

	render() {
		return (
			<div className="App">
				<header className="header">
					<Grid>
						<Row>
							<Col lg={12}>
								<h1><strong>MarkDown</strong> Previewer</h1>
							</Col>
						</Row>
					</Grid>
				</header>
				<div className="body">
					<Grid>
						<Row>
							<Col lg={6}>
								<form>
									<FormGroup
										controlId="formBasicText"
									>
									<FormControl
										rows="20"
										className="textArea"
										componentClass="textarea"
										placeholder="Your MarkDown code"
										onChange={this.getUserCode} />
									<HelpBlock>Made with <b>React</b> by Delesto</HelpBlock>
									</FormGroup>
								</form>
							</Col>
							<Col lg={6}>
								<div className="markdownContainer">
									<div dangerouslySetInnerHTML={this.createMarkup()} />
								</div>
							</Col>
						</Row>
					</Grid>
				</div>
			</div>
		);
	}
}

export default App;
