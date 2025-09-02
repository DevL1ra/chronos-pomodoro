
import { Container } from './components/Container/index';
import { Logo } from './components/Logo/index';
import { Menu } from './components/Menu/index';
import './styles/theme.css';
import './styles/global.css';
import { CountDown } from './components/CountDown';
import { Defaultinput } from './components/Defaultinput';
import { Cycles } from './components/Cycles';
import { Defaultbutton } from './components/Defaultbutton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';



export function App() {

  
  return (
    <>

        <Container>
           <Logo />
        </Container>

        <Container>
             <Menu />
        </Container>

        <Container>
             <CountDown/>
        </Container>
    
        <Container>
             <form className='form' action="">
                
                <div className="formRow"> 
                  
                  <Defaultinput
                      labelText='task'                      
                      id='meuInput'
                      type='text' 
                      placeholder='Digite algo'
                  />

                </div>


                <div className="formRow"> 

                  <p>
                    Lorem ipsum dolor sit amet.
                  </p>

                </div>
                
                <div className="formRow"> 

                  <Cycles />

                </div>

                <div className="formRow"> 

                  < Defaultbutton icon={<PlayCircleIcon /> } />
                  

                </div>

             </form>  
        </Container>

        <Container>
          < Footer />
           </Container>

    </>
  );

  
}

