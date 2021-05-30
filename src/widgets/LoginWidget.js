import React from 'react';
import './LoginWidget.css';
import { useHistory } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';
import LoginWidgetIcon from '../assets/img/login_widget_icon1.png';

export default function LoginWidget() {
    const history = useHistory();
    const { signout, currentUser } = useAuth();
    const handleSignout = () => {
        signout();
        history.push('/');
      };
      
    return (
        <>
            {currentUser === null ? (      
                <div className="LoginWidgetAlign" onClick={() => history.push(`/login`)}>
                    <img src={LoginWidgetIcon} alt="LoginIcon"/>
                    <p>Ingresa</p>
                </div>
            ) : (
                <div className="LoginWidgetAlign" onClick={handleSignout}>
                    <img src={LoginWidgetIcon} alt="LoginIcon"/>
                    <p>Logout</p>
                </div>
            )}            
        </>
    )
}
