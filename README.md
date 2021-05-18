# Typewriter web component 
a type-writer web component

![type-writer](https://github.com/eatsjobs/type-writer/blob/main/type-writer.gif)

```bash 
npm i @eatsjobs/type-writer
```

```bash
import '@eatsjobs/type-writer'
```

or

```html
<script type="module">
  import 'node_modules/@eatsjobs/type-writer';
</script>
```
```html
  <type-writer
      style="
        --playground-background: #282a36;
        --text-color: #50fa7b;
        --font-family: Special Elite, cursive;
        --font-size: 2.5rem;
        --cursor-width: 1.5rem;
        --cursor-height: 0.5rem;
      "
      autostart
      linebreakdelay='1000'
      typingdelay='75'      
    >
      Hello I'm @eatsjobs.
      This is a type-writer web component
      To style it you have some css variables:
        --text-color
      --playground-background
      --font-family
      --font-size
      --cursor-width
      --cursor-height
      You also have some attributes and properties to be able to interact with:
      - linebreakdelay
      - typingdelay
      - autostart
      And also some methods to stop, restart, pause and resume the typewriting.
  </type-writer>
```

