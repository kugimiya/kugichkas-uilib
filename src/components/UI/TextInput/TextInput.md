Пример обычного использования:
```js
<TextInput
  placeholder='Имя нового сотрудника'
  value='Андрей'
  onChange={ () => {} }
/>
```

Пример с указанием ошибки:
```js
<TextInput
  placeholder='Имя нового сотрудника'
  error
  errorTip='Что-то пошло не так'
  onChange={ () => {} }
/>
```

Текст ошибки (`errorTip`) может иметь тип string или React.Component для глубокой кастомизации:
```js
<TextInput
  placeholder='Имя нового сотрудника'
  error
  errorTip={ (
    <span><b>Вы что!!!</b> Исправьте сейчас же!</span>
  ) }
  onChange={ () => {} }
/>
```

Можно расширить стили главного контейнера компонента. Например, чтобы увеличить максимальную ширину:
```js
<TextInput
  placeholder='480 пикселей в ширину'
  customStylesContainer={ { maxWidth: '480px' } }
  onChange={ () => {} }
/>
```