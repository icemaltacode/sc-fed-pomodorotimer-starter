import { createContext, useContext, useState, useEffect } from 'react';
import useToggle from './hooks/useToggle.jsx';
import { Section } from './ui/Section.jsx';
import Heading from './ui/Heading.jsx';
import TomatoClock from './ui/TomatoClock.jsx';
import './App.css';

const AppContext = createContext();

function App() {

  return <div className='container'>
    <Section>
      <Heading role='secondary'>Pomodoro Timer</Heading>
    </Section>
    <Section role='tertiary'>
      <div className='row'>
        <div className='col col-xs-12 col-md-3'>
          {/* The timer goes here */}
        </div>
        <div className='col col-xs-12 col-md-6'>
          <div className='card h-100'>
            <div className='card-body'>
              {/* The task list goes here */}
            </div>
          </div>
        </div>
        <div className='col col-xs-12 col-md-3'>
          <div className='card h-100'>
            <div className='card-body'>
              {/* The stats go here */}
            </div>
          </div>
        </div>
      </div>
    </Section>
</div>
}

export default App;
