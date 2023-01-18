const settingsData = [
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
];


const settings = document.getElementById('settings');
const settingsPanel = document.getElementById('settingsPanel');

settingsData.forEach(setting => {
    createSetting(setting);
});


function createSetting(data) {
    let setting = document.createElement('div');
    setting.classList = 'setting';

    let label = document.createElement('label');
    label.setAttribute('for', data.uid);
    let title = document.createElement('span');
    title.textContent = data.title;
    let desc = document.createElement('span');
    desc.textContent = data.description;
    label.appendChild(title);
    label.appendChild(desc);

    let toggle = document.createElement('input');
    toggle.type = 'checkbox';
    toggle.id = data.uid;

    if (data.isChecked) {
        toggle.checked = true;
    } else {
        toggle.checked = false;
    }

    setting.appendChild(label);
    setting.appendChild(toggle);

    settings.appendChild(setting);

}


if (document.getElementById('darkMode')) {
    document.getElementById('darkMode').addEventListener('change', e => {
        if (e.target.checked) {
            settingsPanel.classList.add('dark');
        } else {
            settingsPanel.classList.remove('dark');
        }
    })
}



