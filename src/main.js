// Importe der Vue Komponenten
import { createApp } from 'vue'
import App from './App.vue'
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import "primevue/resources/themes/lara-light-green/theme.css";
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import PrimeVue from "primevue/config";

// Erstellung der Instanz
const app = createApp(App)

//Verwendung des PrimeVue-Plugins
app.use(PrimeVue, {});

//Registrierung der Vue Komponenten
app.component('Column', Column);
app.component('DataTable', DataTable);
app.component('InputIcon', InputIcon);
app.component('InputText', InputText);
app.component('IconField', IconField);

// Mounten der Anwendung
app.mount('#app')