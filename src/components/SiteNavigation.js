import { Link, NavLink } from 'react-router-dom';
import { Navigation } from './Navigation';
import styles from './Navigation.module.css';

export const SiteNavigation = ({isActive}) => {
    return (
        <Navigation style={styles.navigation}>
            <li><NavLink style={({isActive}) => ({color: isActive ? 'purple' : 'white'})} to="/">Home</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? styles['nav-active'] : '' } to="/posts">Posts</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? styles['nav-active'] : '' } to="/new">New</NavLink></li>
        </Navigation>
    );
};