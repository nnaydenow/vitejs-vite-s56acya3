import './style.css';
import '@ui5/webcomponents/dist/Avatar.js';
import '@ui5/webcomponents/dist/AvatarGroup.js';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  <ui5-avatar-group type="Group"
  ><ui5-avatar icon="employee"></ui5-avatar
  ><ui5-avatar initials="JD"></ui5-avatar
  ><ui5-avatar
    ><img
      src="https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_5.png"
      alt="Avatar1" /></ui5-avatar
  ><ui5-avatar
    ><img
      src="https://sap.github.io/ui5-webcomponents/images/avatars/man_avatar_3.png"
      alt="Avatar2" /></ui5-avatar
></ui5-avatar-group>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
