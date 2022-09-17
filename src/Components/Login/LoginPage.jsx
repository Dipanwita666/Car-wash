import React from 'react';
// import Footer from '../FrontPage/Footer';
import Navbar from '../FrontPage/Navbar';
import LoginForm from './LoginForm';

const LoginPage = props => {
    return (
        <div>
            <Navbar />
            <div>
                <div className="container-fluid" style={{ backgroundImage: `url(./carwash_illustration.jpg)`, backgroundSize: 'cover', height: '100vh' }}>
                    <div className="card m-auto" id="login-block" >
                        <div className="card-body text-center">
                            <div className='rounded' id='loginTitle'>
                            <h3 className="card-title mb-2 fw-bold fs-1 py-2">CARWASH</h3>
                            </div>
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <Footer /> */}
        </div>
    );
};

export default LoginPage;