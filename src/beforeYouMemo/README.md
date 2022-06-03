# Before You Memo

## React のレンダリングルール

以下の場合はレンダリングが走る。

1. props の変更
2. state の変更
3. 親コンポーネントの変更

### 例外

props で渡したコンポーネントは、親コンポーネントがレンダリングしても再レンダリングされない。

```tsx
// この場合は「Counter」が再レンダリングされても、「Logger」は再レンダリングされない。
ReactDOM.render(
  <Counter logger={<Logger label="counter" />} />,
  document.getElementById('root')
);
```

# 参考

[beforeYouMemo](https://overreacted.io/before-you-memo/)
[One Simple trick to optimize](https://kentcdodds.com/blog/optimize-react-re-renders)
