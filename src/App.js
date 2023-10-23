import './App.css';
function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://img.freepik.com/free-vector/cute-cat-playing-laptop-cartoon-vector-icon-illustration-animal-technology-icon-concept-isolated_138676-9529.jpg?w=826&t=st=1698086285~exp=1698086885~hmac=80650b3167bc221f8568bb886f371d5e4c26c132e8ebc5f47289df37483ec0d0' alt="cutest kitten"/>
      </header>
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Musik</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <img src='https://kartinki.pibig.info/uploads/posts/2023-04/thumbs/1680592686_kartinki-pibig-info-p-mnogo-kotov-na-odnoi-kartinke-arti-38.jpg'/>
      </div>
    </div>
  );
}

export default App;
