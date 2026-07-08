### [Neiki's Editor](https://github.com/neikiri/neiki-editor)

#### Install using Git

If you are a git user, you can install the theme and keep up to date by cloning the repo:

```bash
git clone https://github.com/dracula/neiki-editor.git
```

#### Install manually

Download using the [GitHub `.zip` download](https://github.com/dracula/neiki-editor/archive/main.zip) option and unzip them.

#### Activating theme

1. Make sure you're using Neiki's Editor 3.4.0 or later, which ships the Dracula theme built in;
2. Pass `theme: 'dracula'` when creating the editor.

```js
const editor = new NeikiEditor('#editor', {
  theme: 'dracula'
});
```

Or open the toolbar's theme selector and choose **Dracula**, or switch to it at runtime with `editor.setTheme('dracula')`.

> **Note:** the selected theme is remembered globally in `localStorage`. If a user previously picked a different theme, that saved choice takes precedence over the `theme` option on subsequent loads — the config value only applies as the initial default.

3. Boom! It's working ✨
