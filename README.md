# settings-panel

Here are our css variables for our default, light theme:

```
    --panel-bg: #ffffff;
    --heading-color: #525a5f;
    --settings-info-color: #747d83;

    --checkbox-bg-unchecked: #d9d9d9;
    --checkbox-bg-checked: var(--primary-bg);
    --checkbox-switch-color: #ffffff;
```

Here are our css variables for our dark theme:

```
    --panel-bg: #46535a;
    --heading-color: #e5ecf0;
    --settings-info-color: #e5ecf0;

    --checkbox-bg-unchecked: #677176;
    --checkbox-bg-checked: var(--primary-bg);
    --checkbox-switch-color: #46535a;
```

When we use JavaScript to build out our UI, we'll use these objects:

```
    {
        title: 'auto save photos',
        uid: 'autoSavePhotos',
        description: 'automatically save photos when uploading them to your profile.',
        isChecked: false
    },
    {
        title: 'location services',
        uid: 'locationServices',
        description: 'allow the app to have access to your location to show you more relevant posts.',
        isChecked: true
    },
    {
        title: 'dark mode',
        uid: 'darkMode',
        description: 'toggle a darker theme for the app. this makes the UI easier on the eyes in darker environments.',
        isChecked: false
    }
```
