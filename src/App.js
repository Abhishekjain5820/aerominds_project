import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div  className='main-div'> 
      {/* left portion of the page */}
      <div className='left'>

        <div className='empty'>

        </div>
        
        <div className='main-content'>

          <div className='bold-content'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.

          </div>

          <div className='light-content'>
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

          </div>
          <div className='app-link'> 

            <div className='appstore-logo'> 
              
            </div>

            <div className='playstore-logo'> 

            </div>



          </div>

        </div>

      </div>


{/* right portion of the page */}
      <div className='right'>
        

      <div >

        <div className='list-content' align='left'> 
        <ul className='list'>
          
        <li ><a href='/pages/About.html'>About</a></li>
        <li ><a href='#blog'>Blog</a></li>
        <li ><a href='carrer'> Carrer</a></li>
        <li ><a href='contact'> Contact</a></li>
      </ul> 

        </div>
        <div className='right-content'>
        <div className='title'>
          Type Text

        </div>
        <div className='inside-content'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>

        </div>
        <div>
          <div  className='empty-icon'>

          </div>
        <div className='icons'>
          <div className='fb-icon'></div>
          <div className='linkdin-icon'></div>
          <div className='twitter-icon'></div>
        </div>
        </div>
        
        

      </div>
      </div> 


      
        
      </div>
    </div>
  );
}

export default App;
