import React from 'react';
import Checkbox from './../Checkbox';
import TextInput from './../TextInput';
import './App.css';

function ExampleContainer({ children }) {
  return (
    <div className='example-container'>
      { children }
    </div>
  );
}

function TextInputExample() {
  return (
    <ExampleContainer>
      <h3>TextInput component examples</h3>

      <TextInput
        placeholder='Фамилия сотрудника'
        value='Горюнов'
        disabled
        onChange={ val => console.log({ val }) }
      />

      <br/>

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
    </ExampleContainer>
  )
}

function CheckboxExample() {
  return (
    <ExampleContainer>
      <h3>Checkbox component examples</h3>

      <Checkbox>Учитывать все цены</Checkbox>

      <br />

      <Checkbox active>Учитывать <b>все цены</b></Checkbox>

      <br />

      <Checkbox disabled>Учитывать все цены</Checkbox>

      <br />

      <Checkbox active disabled>Учитывать <b>все цены</b></Checkbox>

      <br />

      <Checkbox
        error
        errorTip='Вы должны быть согласны :^)'
      >Я согласен с правилами сервиса</Checkbox>

      <br />

      <Checkbox
        error
        errorTip={
          <b>Это обязательное поле!</b>
        }
      >Я согласен с правилами сервиса</Checkbox>
    </ExampleContainer>
  );
}

function App() {
  return (
    <div className="App">
      <a href='styleguide/index.html'>Go to styleguide page (extended documentation)</a>

      <hr />

      <div className='examples'>
        <TextInputExample />
        <CheckboxExample />
      </div>
    </div>
  );
}

export default App;
