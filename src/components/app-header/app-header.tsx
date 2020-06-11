import React, { useCallback } from 'react';
import logo from '../../assets/proshield.png';
import { NavLink } from 'react-router-dom';
import { AppState } from '../../redux/reducer';
import { Dispatch, AnyAction, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deactivateUser } from '../../redux/actions';
import './app-header.scss';

export const AppHeader: React.FC<ContactProps> = ({ activeUser, deactivateUser }) => {
    console.log('active user', activeUser);
    const handleLogout = useCallback(() => {
        deactivateUser()
    },[]);
    
    return (
        <div className='App-header'>
            <div className='App-header-text'>
                Welcome to ProShield
            </div>
            <div className='App-header-logo'>
                <img width='20px' src={logo} alt='logo'/>
            </div>
            <div className='App-header-nav-buttons'>
            {!activeUser && 
                <div>
                    <button className='App-header-btn'>
                        <NavLink to={'/Signin'} style={{color: 'white', textDecoration: 'none', border: '0px'}}>
                            <div> Signin </div>
                        </NavLink>
                    </button>
                    <button className='App-header-btn'>
                        <NavLink to={'/Signup'} style={{color: 'white', textDecoration: 'none', border: '0px'}}>
                            <div> Signup </div>
                        </NavLink>
                    </button>
                </div>}
                {!!activeUser && 
                    <button className='App-header-btn' onClick={handleLogout}>
                        <div> Logout </div>
                    </button>
                }
                <button className='App-header-btn'>
                    <NavLink to={'/'} style={{color: 'white', textDecoration: 'none', border: '0px'}}>
                        <div> Home </div>
                    </NavLink>
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppState) => {
    return {
        activeUser: state.activeUser
    }
}

type ContactProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
    bindActionCreators({ deactivateUser }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppHeader)