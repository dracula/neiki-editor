### [Neiki's Editor](https://github.com/neikiri/neiki-editor)

The Dracula theme is an external package for Neiki's Editor 3.14.0 and later. Clone or download this repository to install the theme source.

#### Install using Git

If you are a Git user, you can clone the repo and keep it up to date:

```bash
git clone https://github.com/dracula/neiki-editor.git
```

#### Install manually

Download using the [GitHub `.zip` download](https://github.com/dracula/neiki-editor/archive/main.zip) option and unzip it.

#### Activating theme

1. Copy this repository's `themes/dracula/` folder into your Neiki's Editor `themes/` folder.
2. Add `"dracula/theme.json"` to the `themes` array in Neiki's Editor's central `themes/index.json` manifest.
3. Pass `theme: 'dracula'` when creating the editor, open the toolbar's theme selector and choose **Dracula**, or switch to it at runtime with `editor.setTheme('dracula')`.

```js
const editor = new NeikiEditor("#editor", {
  theme: "dracula",
});
```

If your themes folder has another name or location, configure its URL with `themesUrl`:

```js
const editor = new NeikiEditor("#editor", {
  themesUrl: "/assets/neiki-themes/",
});
```



> **Note:** the selected theme is remembered globally in `localStorage`. If a user previously picked a different theme, that saved choice takes precedence over the `theme` option on subsequent loads — the config value only applies as the initial default.

4. Boom! It's working ✨
