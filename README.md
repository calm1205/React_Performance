# React Performance Sandbox

React x Webpack の砂場環境。<br>
パフォーマンス検証用<br>

## React のコンポーネントの再レンダリング条件

1. state が更新された時
2. props が更新された時
3. 親のコンポーネントが更新された時

### 1. state の更新

```tsx
/**
 * buttonがクリックされるたびに再レンダリング
 */
() => {
  const [state, setState] = useState();
  const onClick = () => setState('newState');
  return <button onClick={onClick} />;
};
```

### 2. props の更新

```tsx
/**
 * dataの値が変わるとChildが再レンダリング
 */
const Parent = () => {
  // mountしてからAPIのレスポンスが返るまでdataはundefined
  const data = fetch('sample API');

  return (
    <>
      <Child {...data} />
    </>
  );
};
```

### 3. 親コンポーネントの再レンダリング

```tsx
return (
  // Parentコンポーネントが再レンダリング
  <Parent>
    <Child /> // するとChildも再レンダリング
  </Parent>
);
```
