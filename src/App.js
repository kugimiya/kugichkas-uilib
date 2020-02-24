import React from 'react';
import { TextInput } from './components/UI/TextInput/TextInput';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1><a href='styleguide/index.html'>Go to styleguide page</a></h1>

      <TextInput
        placeholder='Фамилия сотрудника'
        onChange={ val => console.log({ val }) }
      />

      <br/>

      <TextInput
        placeholder='Фамилия сотрудника'
        value='Горюнов'
        onChange={ val => console.log({ val }) }
      />

      <br/>

      <TextInput
        placeholder='Фамилия сотрудника'
        error
        errorTip={ (
          <>
            <span>Поле не может быть пустым! </span>
            <br />
            <span>Укажите фамилию, например <b>Горюнов</b></span>
          </>
        ) }
        onChange={ value => console.log(value) }
      />

      <br/>

      <TextInput
        placeholder='Фамилия сотрудника'
        value='Горюнов111'
        error
        errorTip={ 'Фамилия не может содержать символы, отличные от букв' }
        onChange={ val => console.log({ val }) }
      />

      <br />

      <TextInput
        placeholder='420px width'
        customStylesContainer={ { maxWidth: '420px' } }
        onChange={ val => console.log({ val }) }
      />

      <br />
    </div>
  );
}

export default App;
