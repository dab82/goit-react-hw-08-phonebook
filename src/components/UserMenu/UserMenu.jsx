import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import { FaSignInAlt } from 'react-icons/fa';
// import defaultAvatar from 'Icon/logo.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'unset',
    fontSize: 'x-large',
    fontWeight: 'bold',
    borderRadius: '50%',
    border: '1px solid #024972',
    backgroundColor: '#4299c2',
  },
  button: {
    marginLeft: '10px',
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const [letter] = name.split('');

  return (
    <div style={styles.container}>
      {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
      <span style={styles.name}>{letter?.toUpperCase()}</span>
      <span>{name}</span>
      <button
        type="button"
        style={styles.button}
        onClick={() => dispatch(authOperations.logOut())}
      >
        <FaSignInAlt size="30" />
      </button>
    </div>
  );
}
