Пример обычного использования:
```js
<Checkbox
  active
>Использовать этот режим</Checkbox>
```

Пример поля с запрещением редактирования:
```js
<Checkbox
  disabled
>Использовать этот режим</Checkbox>
```

Пример с указанием ошибки:
```js
<Checkbox
  error
>Использовать этот режим</Checkbox>
```

Текст ошибки (`errorTip`) может иметь тип string или React.Component для глубокой кастомизации:
```js
<Checkbox
  error
  errorTip={ <i>Хей!</i> } 
>Использовать этот режим</Checkbox>
```

Можно расширить стили главного контейнера компонента.
```js
<Checkbox
  customStylesContainer={ { border: '1px solid black', paddingTop: '25px' } }
>Использовать этот режим</Checkbox>
```
