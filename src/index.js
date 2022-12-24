import _ from 'lodash';
import './style.css';
import AddScores from './views/AddScore.js';
import Footer from './views/Footer.js';
import Modal from './views/Modal.js';
import recentScores from './views/RecentScores.js';

const leaderContent = document.querySelector('.leaderboard-content');

// update leaderboard content
leaderContent.innerHTML = _ + recentScores() + AddScores();

// update body
document.body.innerHTML += Modal() + Footer();