```jsx
<MediaProgressBar
  progressDirection="right"
  style={{ background: 'black', height: 30 }}
  progressStyle={{ background: 'orange' }}
/>
```

You can also supply a custom handle (which is convenient if the progress bar is thin):

```jsx
<MediaProgressBar
  progressDirection="right"
  style={{ background: 'black', height: 4 }}
  progressStyle={{ background: 'orange' }}
  handle={
    <div
      style={{
        width: 30,
        height: 30,
        background: '#fff',
        borderRadius: '50%',
        border: '2px solid black'
      }}
    />
  }
/>
```
