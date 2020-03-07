import React from 'react';
import { Checkbox } from './Checkbox';
import { TextInput } from './TextInput';
import { Selector } from './Selector';
import { Block } from './Block';
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

function SelectorExample () {
  return (
    <ExampleContainer>
      <h3>Selector component example</h3>

      <Selector
        CheckboxComponent={ Checkbox }
        BlockComponent={ Block }
        placeholder='Главный менеджер клиента'
        items={ [
          { id: 1, text: 'Менеджер 1' },
          { id: 2, text: 'Менеджер 2' },
          { id: 3, text: 'Менеджер 3' },
          { id: 4, text: 'Менеджер 4' },
          { id: 5, text: 'Менеджер 5' },
          { id: 6, text: 'Менеджер 6' },
          { id: 7, text: 'Менеджер 7' },
          { id: 8, text: 'Менеджер 8' },
          { id: 9, text: 'Менеджер 9' },
        ] }
        value={ [2, 3] }
        onChange={ console.log }
        multiple
      />

      <br />

      <Selector
        CheckboxComponent={ Checkbox }
        BlockComponent={ Block }
        placeholder='Главный менеджер клиента'
        items={ [
          { id: 1, text: 'Менеджер 1' },
          { id: 2, text: 'Менеджер 2' },
          { id: 3, text: 'Менеджер 3' },
        ] }
        value={ [] }
        error
        errorTip='Нужно указать менеджера'
      />

      <br />

      <Selector
        CheckboxComponent={ Checkbox }
        BlockComponent={ Block }
        placeholder='Главный менеджер клиента'
        items={ [
          { id: 1, text: 'Менеджер 1' },
          { id: 2, text: 'Менеджер 2' },
          { id: 3, text: 'Менеджер 3' },
        ] }
        value={ [2, 3] }
        disabled
      />

      <br />

      <Selector
        CheckboxComponent={ Checkbox }
        BlockComponent={ Block }
        FetchingComponent={ () => (<div style={ { padding: '10px' } }>Загрузка...</div>) }
        placeholder='Главный менеджер клиента'
        items={ [] }
        value={ [] }
        fetching
      />
    </ExampleContainer>
  )
}

function App() {
  return (
    <div className="App">
      <a href='styleguide/index.html'>Go to styleguide page (extended documentation)</a>

      <hr />

      <div className='examples'>
        <TextInputExample />
        <CheckboxExample />
        <SelectorExample />
      </div>
    </div>
  );
}

export default App;
