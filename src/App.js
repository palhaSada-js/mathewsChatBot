import React, { Component } from 'react';
import { sendMessage } from './chat';
import { connect } from 'react-redux';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import { styles } from './styles'

library.add(faPlayCircle, faPauseCircle)

class App extends Component {


  messageTemp

  handlePlayPause(id) {
    const audio = document.getElementById(id);
    if (audio.paused) {
      audio.play()
      audio.ontimeupdate = () => {
        const bar = document.getElementById(id + 'Proggress');
        bar.style.width = audio.currentTime / audio.duration * 100 + '%';
      }
      this.setState({ playing: true });
    } else {
      audio.pause();
      this.setState({ playing: false });
    }
  }



  render() {
    const { feed, sendMessage } = this.props;
    return (
      <div className="App">
        <header className="App-header">
        
          <h1>MathewSZinho</h1>
          <div style={styles.mainContainer}>
            {feed.map(entry => {
              console.log(entry)
              if (entry.sender === 'user') {
                return (
                  <div key={entry.id} style={styles.containterSender}>
                    <img style={styles.img} src='http://petmedmd.com/images/user-profile.png' alt="profile" />
                    <div style={styles.text}>
                      <p>{entry.text} </p>
                    </div>
                  </div>)
              } else {
                if (entry.src) {
                  if (entry.text.length > 0) {
                    return (
                      <React.Fragment key={entry.id + 'frag'}>
                        <div style={styles.containter} key={entry.id + 'text'}>
                          <img style={styles.img} src='https://media.licdn.com/dms/image/C4E03AQEC3kDfzMPS4g/profile-displayphoto-shrink_800_800/0?e=1558569600&v=beta&t=B6qHJQRr7gEHjytbQbX-tYcypgPqStIlUWA6aQm_2ww' alt="profile" />
                          <div style={styles.text}>
                            <p> {entry.text} </p>
                          </div>
                        </div>
                        <div style={styles.containter}>
                          <img style={styles.img} src='https://media.licdn.com/dms/image/C4E03AQEC3kDfzMPS4g/profile-displayphoto-shrink_800_800/0?e=1558569600&v=beta&t=B6qHJQRr7gEHjytbQbX-tYcypgPqStIlUWA6aQm_2ww' alt="profile" />
                          <div style={styles.width}>
                            <div id={entry.id + 'Proggress'} style={styles.proggress}></div>
                          </div>
                          <div style={styles.buttons}>
                            <FontAwesomeIcon icon={
                              document.getElementById(entry.id) && document.getElementById(entry.id).paused ?
                                'play-circle' : !document.getElementById(entry.id) ?
                                  'play-circle' : 'pause-circle'} size='1x' style={styles.playButton}
                              onClick={() => this.handlePlayPause(entry.id)}
                            />
                          </div>
                          <audio id={entry.id} src={entry.src} type="audio/ogg"></audio>
                        </div>
                      </React.Fragment>
                    );
                  } else {
                    return (
                      <React.Fragment key={entry.id + 'frag'}>
                        <div style={styles.containter}>
                          <img style={styles.img} src='https://media.licdn.com/dms/image/C4E03AQEC3kDfzMPS4g/profile-displayphoto-shrink_800_800/0?e=1558569600&v=beta&t=B6qHJQRr7gEHjytbQbX-tYcypgPqStIlUWA6aQm_2ww' alt="profile" />
                          <div style={styles.width}>
                            <div id={entry.id + 'Proggress'} style={styles.proggress}></div>
                          </div>
                          <div style={styles.buttons}>
                            <FontAwesomeIcon icon={
                              document.getElementById(entry.id) && document.getElementById(entry.id).paused ?
                                'play-circle' : !document.getElementById(entry.id) ?
                                  'play-circle' : 'pause-circle'} size='1x' style={styles.playButton}
                              onClick={() => this.handlePlayPause(entry.id)}
                            />
                          </div>
                          <audio id={entry.id} src={entry.src} type="audio/ogg"></audio>
                        </div>
                      </React.Fragment>
                    )
                  }
                }
                return (
                  <div key={entry.id} style={styles.containter}>
                    <img style={styles.img} src='https://media.licdn.com/dms/image/C4E03AQEC3kDfzMPS4g/profile-displayphoto-shrink_800_800/0?e=1558569600&v=beta&t=B6qHJQRr7gEHjytbQbX-tYcypgPqStIlUWA6aQm_2ww' alt="profile" />
                    <div style={styles.text}>
                      <p> {entry.text} </p>
                    </div>
                  </div>)
              }
            })}
            <input id="inputField" style={styles.input} placeholder='escreva sua mensagem para mathewszinho' onKeyDown={(e) => e.keyCode === 13 ? sendMessage(e.target.value) : null} />
          </div>
        <About />
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  feed: state
});

class About extends Component {
  render() {
    return (
      <div style={styles.about}>

        <p style={styles.title}> Lista de Perguntas sugeridas </p>
        <ul style={styles.list}>
          <li>bom dia</li>
          <li>canta uma musica ae</li>
          <li>pq vc não veio trabalhar?</li>
          <li>e os role?</li>
          <li>me ajuda ai, mano</li>
          <li>a mina era zuada?</li>
          <li>canta um rap ai cuzão</li>
          <li>deixa eu te contar uma fita</li>
          <li>e o minecraft?</li>
          <li>conta a história do mendigo</li>
          <li>eae</li>
          <li>q q eu falo pros cara?</li>
          <li>explica direito ai</li>
          <li>curte fandangos?</li>
          <li>me adiciona lá carai</li>
          <li>eae, ta de boa?</li>
          <li>me chama de harry</li>
          <li>conta a fita do uber</li>
        </ul>
        <p style={styles.title}> Pode parecer React mas foi feito com Palha$ada.Js </p>
      </div>
    );
  }
}


export default connect(mapStateToProps, { sendMessage })(App);
