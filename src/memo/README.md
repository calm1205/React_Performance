# memo

props が同じなら再レンダリングしない。<br/>
（メモリ上のコンポーネントを活用する）

親コンポーネントが再レンダリングされたとしても memo 化されたコンポーネントは props が同じであれば再レンダリングされない。