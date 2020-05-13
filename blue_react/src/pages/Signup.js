import React, { Component } from 'react';
import { responseFacebook, responseGoogle } from '../App'
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

class Signup extends Component {
	render() {
		return (
		    <div className="signup-form">
		      <form action="#" method="post">
		      <h2>Create an Account</h2>
		      <p className="hint-text">Sign up with your social media account or email address</p>
		      <div className="social-btn text-center">
		          <FacebookLogin 
		            appId="1501831806656820"
		            fields="name,email,picture"
		            callback={responseFacebook}
		            textButton="Facebook"
		            redirectUri="/"
		            cssClass="btn btn-primary btn-lg"
		            icon="fa-facebook"
		            />
		          <GoogleLogin 
		            clientId="58667510182-k1alatliu4pb91eadvgp2sk107mp9npm.apps.googleusercontent.com"
		            render={renderProps => (
		              <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="btn btn-danger btn-lg"><i className="fa fa-google"></i> Google</button>
		            )}
		            onSuccess={responseGoogle}
		            onFailure={() => {console.log("google login failure")}}
		            cookiePolicy={'single_host_origin'}
		            cssClass="btn btn-primary btn-lg"
		          />
		        </div>
		      <div className="or-seperator"><b>or</b></div>
		          <div className="form-group">
		            <input type="text" className="form-control input-lg" name="username" placeholder="Username" required="required" />
		          </div>
		      <div className="form-group">
		            <input type="email" className="form-control input-lg" name="email" placeholder="Email Address" required="required" />
		          </div>
		      <div className="form-group">
		              <input type="password" className="form-control input-lg" name="password" placeholder="Password" required="required" />
		          </div>
		      <div className="form-group">
		              <input type="password" className="form-control input-lg" name="confirm_password" placeholder="Confirm Password" required="required" />
		          </div>  
		          <div className="form-group">
		              <button type="submit" className="btn btn-success btn-lg btn-block signup-btn">Sign Up</button>
		          </div>
		      </form>
		      <div className="text-center">Already have an account? <a href="login">Login here</a></div>
		  </div>
		);
	}
}

export default Signup;