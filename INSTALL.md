### [Neiki's Editor](https://github.com/neikiri/neiki-editor)

The Dracula Theme ships with Neiki's Editor 3.4.0 and later — no separate theme install is required. Clone or download this repository only if you want the theme source.

#### Install using Git

If you are a Git user, you can clone the repo and keep it up to date:

```bash
git clone https://github.com/dracula/neiki-editor.git
```

#### Install manually

Download using the [GitHub `.zip` download](https://github.com/dracula/neiki-editor/archive/main.zip) option and unzip it.

#### Activating theme

1. Make sure you're using Neiki's Editor 3.4.0 or later, which ships with the Dracula theme built in.
2. Pass `theme: 'dracula'` when creating the editor, open the toolbar's theme selector and choose **Dracula**, or switch to it at runtime with `editor.setTheme('dracula')`.

```js
const editor = new NeikiEditor("#editor", {
  theme: "dracula",
});
```

> **Note:** the selected theme is remembered globally in `localStorage`. If a user previously picked a different theme, that saved choice takes precedence over the `theme` option on subsequent loads — the config value only applies as the initial default.

3. Boom! It's working ✨
