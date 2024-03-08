<template>
  <div class="card">
    <DataTable v-model:filters="filters" :value="enterprises" :globalFilterFields="['Land', 'Unternehmen']"
      :stripedRows="true">
      <template #header>
        <div class="flex justify-content-end">
          <IconField iconPosition="left">
            <InputIcon>
              <i class="pi pi-search" />
            </InputIcon>
            <InputText v-model="filters['global'].value" placeholder="Suche"
              @input="validateInputHandler($event.target.value)" />
          </IconField>
          <span v-if="invalidInput" style="color: red;">Ungültige Eingabe. Nur die Eingabe von Buchstaben und
            Leerzeichen ist erlaubt.
          </span>
        </div>
      </template>

      <template #empty> Kein Suchtreffer. </template>

      <Column field="Land" header="Land" sortable style="width: 25%">

        <template #body="{ data }">
          {{ data.Land }}
        </template>
      </Column>
      <Column field="Unternehmen" header="Unternehmen" sortable style="width: 25%">

        <template #body="{ data }">
          {{ data.Unternehmen }}
        </template>
      </Column>
      <Column field="CO2_Emissionen" header="CO2-Emissionen" style="width: 25%">

        <template #body="{ data }">
          {{ data.CO2_Emissionen }}
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup>
import { ref } from 'vue';


// Import des aus Primevue
import { FilterMatchMode } from 'primevue/api';

// Import der JSON-Datei
import enterprisesJson from "./enterprises.json";

// Import der inputValidation
import { validateInput } from './inputValidation';

// Erstellung reaktiven Referenz zum Sortieren der Tabelle
const enterprises = ref(enterprisesJson);

// Erstellung reaktiven Referenz zum Filtern der Tabelle
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

// Zustand für ungültige Eingaben
const invalidInput = ref(false);

// Überprüfe die Eingabe mit der inputValidation
const validateInputHandler = (value) => {
  invalidInput.value = !validateInput(value);
};

</script>