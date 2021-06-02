Web Component Analyzer analyzing 1 file...
# type-writer

A type-writer web component

## Attributes

| Attribute        | Type      | Description                          |
|------------------|-----------|--------------------------------------|
| `autostart`      | `Boolean` | start on mount                       |
| `linebreakdelay` | `Number`  | the delay between after linebreak \n |
| `typingdelay`    | `Number`  | the delay between each word in ms    |

## Properties

| Property         | Type      |
|------------------|-----------|
| `autoStart`      | `boolean` |
| `clean`          |           |
| `lineBreakDelay` | `number`  |
| `pause`          |           |
| `restart`        |           |
| `resume`         |           |
| `start`          |           |
| `stop`           |           |
| `typingDelay`    | `number`  |

## Methods

| Method                  | Type                                     |
|-------------------------|------------------------------------------|
| `clean`                 | `(): void`                               |
| `createLetterGenerator` | `(): Generator<string, string, unknown>` |
| `pause`                 | `(): Promise<void>`                      |
| `restart`               | `(): Promise<void \| null>`              |
| `resume`                | `(): void`                               |
| `start`                 | `(): Promise<void \| null>`              |
| `stop`                  | `(): Promise<void>`                      |

## Events

| Event  | Type               | Description                                   |
|--------|--------------------|-----------------------------------------------|
| `done` | `CustomEvent<any>` | Dispatched when type-writing naturally finish |

## CSS Custom Properties

| Property                  | Description                     |
|---------------------------|---------------------------------|
| `--cursor-height`         | the height of the cursor;       |
| `--cursor-width`          | the width of the cursor         |
| `--font-family`           | font-family                     |
| `--font-size`             | font-size                       |
| `--playground-background` | the background of the container |
| `--text-color`            | the color of the text           |

