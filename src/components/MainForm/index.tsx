import { Cycles } from '../Cycles';
import { Defaultbutton } from '../DefaultButton';
import { Defaultinput } from '../DefaultInput';
import { PlayCircleIcon } from 'lucide-react';

export function MainForm() {
  return (
    <form className='form' action=''>
      <div className='formRow'>
        <Defaultinput
          labelText='task'
          id='meuInput'
          type='text'
          placeholder='Digite algo'
        />
      </div>

      <div className='formRow'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <Defaultbutton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
