import React from 'react';
import './Account.css';

function Account() {
    return (
        <div className="account-container">
            <h1 className="account-header">M y  A c c o u n t</h1>
            <div className="account-forms">
                <div className="login-section">
                    <h2 className="section-header">L O G I N </h2>
                    <form className="account-form">
                        <label className="form-label">
                            Username or email address <span className="required">*</span>
                            <input type="text" name="username" required className="form-input"/>
                        </label>
                        <label className="form-label">
                            Password <span className="required">*</span>
                            <input type="password" name="password" required className="form-input"/>
                        </label>
                        <label className="remember-me">
                            <input type="checkbox" name="remember" className="form-checkbox"/>
                            Remember me
                        </label>
                        <button type="submit" className="login-button account-button">L O G   I N </button>
                        <a href="/forgot-password" className="forgot-password">Lost your password?</a>
                    </form>
                </div>
                <div className="register-section">
                    <h2 className="section-header">R E G I S T E R </h2>
                    <form className="account-form">
                        <label className="form-label">
                            Email address <span className="required">*</span>
                            <input type="email" name="email" required className="form-input"/>
                        </label>
                        <p className="form-text">
                            A link to set a new password will be sent to your email address.
                        </p>
                        <p className="privacy-notice form-text">
                            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="/privacy-policy">privacy policy</a>.
                        </p>
                        <button type="submit" className="register-button account-button">R E G I S T E R</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Account;
