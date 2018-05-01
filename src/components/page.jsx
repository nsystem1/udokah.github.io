import React from 'react';
import ReactDOM from 'react-dom';

const STORE_KEY = 'USE_DARK_MODE';

class Page extends React.Component {
	state = {
		checkedInput: true
	};

	handleToggle = () => this.setState({ checkedInput: !this.state.checkedInput });

	render() {
		return (
			<div id="wrapper" className={this.state.checkedInput ? 'dark-theme' : 'default-theme'}>
				<section className="controls">
					<div className="toggle-theme">
						<i className="mdi mdi-24px mdi-white-balance-sunny" />
						<label className="switch">
							<input checked={this.state.checkedInput} onChange={this.handleToggle} type="checkbox" />
							<span className="slider" />
						</label>
						<i className="mdi mdi-24px mdi-weather-night" />
					</div>
				</section>
				<section className="container">
					<header>
						<h1 className="intro">Hello!</h1>
						<h2 className="tagline">
							I'm <strong>Udo Nkwocha</strong>, a front-end software engineer with an eye for design and experience developing database applications, currently focused on building beautiful
							and intuitive interfaces.
						</h2>
					</header>
					<nav className="links">
						<a className="link-item" href="mailto:writeudo@gmail.com">
							<i className="mdi mdi-email" /> <span>writeudo@gmail.com</span>
						</a>
						<a className="link-item" href="https://udoka.me/resume">
							<i className="mdi mdi-briefcase" /> <span>Resume</span>
						</a>
						<a className="link-item" href="https://ng.linkedin.com/in/thisisudo">
							<i className="mdi mdi-linkedin" /> <span>LinkedIn</span>
						</a>
						<a className="link-item" href="https://github.com/udokah/">
							<i className="mdi mdi-github-circle" /> <span>Github</span>
						</a>
					</nav>
				</section>
			</div>
		);
	}
}

export default Page;
