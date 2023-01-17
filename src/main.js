import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons';
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faFileCircleMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPersonCirclePlus } from '@fortawesome/free-solid-svg-icons';

import router from './routeur';

library.add(faPowerOff);
library.add(faMoneyBillTransfer);
library.add(faFileInvoice);
library.add(faFileCirclePlus);
library.add(faFileCircleMinus);
library.add(faPersonCirclePlus);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .mount('#app');
