import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import "./Home.scss"
import profileImage from '../../assets/profile.jpg';
import { useSelector, useDispatch } from 'react-redux'
import { addUser } from '../../app/store/reducers/userSlice';
import { StoreState } from '../../app/store/userStore';
const HomeComponent: FunctionComponent<{}> = (props) => {
    const userSelector = useSelector((state: StoreState) => state.user.name);
    const dispatch = useDispatch();
    return (
        <div className="card">
            user: {userSelector}
            <button onClick={() => dispatch(addUser({ name: 'Sam Merante' }))}>Add User</button>
            <img src={profileImage} className="card-img-top" alt="Profile of sam" />
            <div className="card-body">
                <h5 className="card-title">Sam Merante</h5>
                <h6 className="card-subtitle mb-2 text-muted">Software Developer</h6>
                <p className="card-text">
                    I am a York University graduate with a bachelors degree in Computer Science from the Lassonde School of
                    Engineering. I have several years of programming
                    experience in languages such as Java, AngularJS/2+, C++, Python, C#, C, among other languages.
                </p>
                <p className="card-text">
                    Please visit my <Link to="/cv">CV</Link> for a full detail of my experience.
                </p>
            </div>
        </div>)
}

export default HomeComponent