import React from 'react';

class SignIn extends React.Component {
	constructor() {
		super();
		this.state = {
			signInEmail: '',
			signInPassword: ''
		}
	}

	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}

	render() {
		const { onRouteChange } = this.props;
		return (
			<article className="br ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
				<div>
						<main className="pa4 black-80">
							<div className="measure">
								<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
									<legend className="f4 fw6 ph0 mh0">Sign In</legend>
									<div className="mt3">
										<label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
										<input className="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" type="email" name="email-address"  id="email-address" />
									</div>
									<div className="mv3">
										<label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
										<input className="b pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" type="password" name="password"  id="password" />
									</div>
								</fieldset>
								<div className="">
									<input
									//onRouteChange not rendered, but invoked when clicked
									onClick={() => onRouteChange('home')}
									className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
									type="submit"
									value="Sign in" />
								</div>
								<div className="lh-copy mt3">
									<p onClick={() => onRouteChange('register')} className="f6 link dim black db pointer">Register</p>
								</div>
							</div>
						</main>
				</div>
			</article>
		);
	}

}

export default SignIn;
