import createMenu from "./create-menu";

/**
 * Saves options to localStorage.
 */
const saveSettings = async (): Promise<void> => {
  const localStorage = await chrome.storage.local.get(null);

  let location = document.getElementById("loadLocation") as HTMLSelectElement;
  localStorage["loadLocation"] = (location.selectedOptions.length === 0) ? "1" : location.selectedOptions[0].value;

  //SauceNAO
  let select = document.getElementById("saucenao-enabled") as HTMLInputElement;
  if (select.checked) {
    localStorage["SauceNAO-Enabled"] = "1";
  } else {
    localStorage["SauceNAO-Enabled"] = "0";
  }
  select = document.getElementById("saucenao-multi") as HTMLInputElement;
  if (select.checked) {
    localStorage["SauceNAO-Multi"] = "1";
  } else {
    localStorage["SauceNAO-Multi"] = "0";
  }
  localStorage["SauceNAO-Name"] = (document.getElementById("saucenao-name") as HTMLInputElement).value;
  localStorage["SauceNAO-URL"] = (document.getElementById("saucenao-url") as HTMLInputElement).value;

  //IQDB
  select = document.getElementById("iqdb-enabled") as HTMLInputElement;
  if (select.checked) {
    localStorage["IQDB-Enabled"] = "1";
  } else {
    localStorage["IQDB-Enabled"] = "0";
  }
  select = document.getElementById("iqdb-multi") as HTMLInputElement;
  if (select.checked) {
    localStorage["IQDB-Multi"] = "1";
  } else {
    localStorage["IQDB-Multi"] = "0";
  }
  localStorage["IQDB-Name"] = (document.getElementById("iqdb-name") as HTMLInputElement).value;
  localStorage["IQDB-URL"] = (document.getElementById("iqdb-url") as HTMLInputElement).value;

  //TinEye
  select = document.getElementById("tineye-enabled") as HTMLInputElement;
  if (select.checked) {
    localStorage["TinEye-Enabled"] = "1";
  } else {
    localStorage["TinEye-Enabled"] = "0";
  }
  select = document.getElementById("tineye-multi") as HTMLInputElement;
  if (select.checked) {
    localStorage["TinEye-Multi"] = "1";
  } else {
    localStorage["TinEye-Multi"] = "0";
  }
  localStorage["TinEye-Name"] = (document.getElementById("tineye-name") as HTMLInputElement).value;
  localStorage["TinEye-URL"] = (document.getElementById("tineye-url") as HTMLInputElement).value;

  //Google
  select = document.getElementById("google-enabled") as HTMLInputElement;
  if (select.checked) {
    localStorage["Google-Enabled"] = "1";
  } else {
    localStorage["Google-Enabled"] = "0";
  }
  select = document.getElementById("google-multi") as HTMLInputElement;
  if (select.checked) {
    localStorage["Google-Multi"] = "1";
  } else {
    localStorage["Google-Multi"] = "0";
  }
  localStorage["Google-Name"] = (document.getElementById("google-name") as HTMLInputElement).value;
  localStorage["Google-URL"] = (document.getElementById("google-url") as HTMLInputElement).value;

  //Other1
  select = document.getElementById("other1-enabled") as HTMLInputElement;
  if (select.checked) {
    localStorage["Other1-Enabled"] = "1";
  } else {
    localStorage["Other1-Enabled"] = "0";
  }
  select = document.getElementById("other1-multi") as HTMLInputElement;
  if (select.checked) {
    localStorage["Other1-Multi"] = "1";
  } else {
    localStorage["Other1-Multi"] = "0";
  }
  localStorage["Other1-Name"] = (document.getElementById("other1-name") as HTMLInputElement).value;
  localStorage["Other1-URL"] = (document.getElementById("other1-url") as HTMLInputElement).value;

  //Other2
  select = document.getElementById("other2-enabled") as HTMLInputElement;
  if (select.checked) {
    localStorage["Other2-Enabled"] = "1";
  } else {
    localStorage["Other2-Enabled"] = "0";
  }
  select = document.getElementById("other2-multi") as HTMLInputElement;
  if (select.checked) {
    localStorage["Other2-Multi"] = "1";
  } else {
    localStorage["Other2-Multi"] = "0";
  }
  localStorage["Other2-Name"] = (document.getElementById("other2-name") as HTMLInputElement).value;
  localStorage["Other2-URL"] = (document.getElementById("other2-url") as HTMLInputElement).value;

  //Other3
  select = document.getElementById("other3-enabled") as HTMLInputElement;
  if (select.checked) {
    localStorage["Other3-Enabled"] = "1";
  } else {
    localStorage["Other3-Enabled"] = "0";
  }
  select = document.getElementById("other3-multi") as HTMLInputElement;
  if (select.checked) {
    localStorage["Other3-Multi"] = "1";
  } else {
    localStorage["Other3-Multi"] = "0";
  }
  localStorage["Other3-Name"] = (document.getElementById("other3-name") as HTMLInputElement).value;
  localStorage["Other3-URL"] = (document.getElementById("other3-url") as HTMLInputElement).value;

  //Other4
  select = document.getElementById("other4-enabled") as HTMLInputElement;
  if (select.checked) {
    localStorage["Other4-Enabled"] = "1";
  } else {
    localStorage["Other4-Enabled"] = "0";
  }
  select = document.getElementById("other4-multi") as HTMLInputElement;
  if (select.checked) {
    localStorage["Other4-Multi"] = "1";
  } else {
    localStorage["Other4-Multi"] = "0";
  }
  localStorage["Other4-Name"] = (document.getElementById("other4-name") as HTMLInputElement).value;
  localStorage["Other4-URL"] = (document.getElementById("other4-url") as HTMLInputElement).value;

  //Other5
  select = document.getElementById("other5-enabled") as HTMLInputElement;
  if (select.checked) {
    localStorage["Other5-Enabled"] = "1";
  } else {
    localStorage["Other5-Enabled"] = "0";
  }
  select = document.getElementById("other5-multi") as HTMLInputElement;
  if (select.checked) {
    localStorage["Other5-Multi"] = "1";
  } else {
    localStorage["Other5-Multi"] = "0";
  }
  localStorage["Other5-Name"] = (document.getElementById("other5-name") as HTMLInputElement).value;
  localStorage["Other5-URL"] = (document.getElementById("other5-url") as HTMLInputElement).value;

  //Other6
  select = document.getElementById("other6-enabled") as HTMLInputElement;
  if (select.checked) {
    localStorage["Other6-Enabled"] = "1";
  } else {
    localStorage["Other6-Enabled"] = "0";
  }
  select = document.getElementById("other6-multi") as HTMLInputElement;
  if (select.checked) {
    localStorage["Other6-Multi"] = "1";
  } else {
    localStorage["Other6-Multi"] = "0";
  }
  localStorage["Other6-Name"] = (document.getElementById("other6-name") as HTMLInputElement).value;
  localStorage["Other6-URL"] = (document.getElementById("other6-url") as HTMLInputElement).value;

  //Multi
  select = document.getElementById("multi-enabled") as HTMLInputElement;
  if (select.checked) {
    localStorage["Multi-Enabled"] = "1";
  } else {
    localStorage["Multi-Enabled"] = "0";
  }
  localStorage["Multi-Name"] = (document.getElementById("multi-name") as HTMLInputElement).value;

  await chrome.storage.local.set(localStorage);
  createMenu();

  // Update status to let user know options were saved.
  const status = document.getElementById("status") as HTMLSpanElement;
  status.innerHTML = "Changes Applied...";
  setTimeout(() => {
    status.innerHTML = "";
  }, 750);
};

/**
 * Restores select box state to saved value from localStorage.
 */
const loadSettings = async () => {
  const localStorage = await chrome.storage.local.get(null);

  //Load Location
  let _select = document.getElementById("loadLocation") as HTMLSelectElement;
  for (const child of _select.options) {
    if (child.value === localStorage["loadLocation"]) {
      child.selected = true;
      break;
    }
  }
  //SauceNAO
  let select = document.getElementById("saucenao-enabled") as HTMLInputElement;
  if (localStorage["SauceNAO-Enabled"] === "1") {
    select.checked = true;
  } else {
    select.checked = false;
  }
  select = document.getElementById("saucenao-multi") as HTMLInputElement;
  if (localStorage["SauceNAO-Multi"] === "1") {
    select.checked = true;
  } else {
    select.checked = false;
  }
  (document.getElementById("saucenao-name") as HTMLInputElement).value = localStorage["SauceNAO-Name"];
  (document.getElementById("saucenao-url") as HTMLInputElement).value = localStorage["SauceNAO-URL"];

  //IQDB
  select = document.getElementById("iqdb-enabled") as HTMLInputElement;
  if (localStorage["IQDB-Enabled"] === "1") {
    select.checked = true;
  } else {
    select.checked = false;
  }
  select = document.getElementById("iqdb-multi") as HTMLInputElement;
  if (localStorage["IQDB-Multi"] === "1") {
    select.checked = true;
  } else {
    select.checked = false;
  }
  (document.getElementById("iqdb-name") as HTMLInputElement).value = localStorage["IQDB-Name"];
  (document.getElementById("iqdb-url") as HTMLInputElement).value = localStorage["IQDB-URL"];

  //TinEye
  select = document.getElementById("tineye-enabled") as HTMLInputElement;
  if (localStorage["TinEye-Enabled"] === "1") {
    select.checked = true;
  } else {
    select.checked = false;
  }
  select = document.getElementById("tineye-multi") as HTMLInputElement;
  if (localStorage["TinEye-Multi"] === "1") {
    select.checked = true;
  } else {
    select.checked = false;
  }
  (document.getElementById("tineye-name") as HTMLInputElement).value = localStorage["TinEye-Name"];
  (document.getElementById("tineye-url") as HTMLInputElement).value = localStorage["TinEye-URL"];

  //Google
  select = document.getElementById("google-enabled") as HTMLInputElement;
  if (localStorage["Google-Enabled"] === "1") {
    select.checked = true;
  } else {
    select.checked = false;
  }
  select = document.getElementById("google-multi") as HTMLInputElement;
  if (localStorage["Google-Multi"] === "1") {
    select.checked = true;
  } else {
    select.checked = false;
  }
  (document.getElementById("google-name") as HTMLInputElement).value = localStorage["Google-Name"];
  (document.getElementById("google-url") as HTMLInputElement).value = localStorage["Google-URL"];

  //Other1
  select = document.getElementById("other1-enabled") as HTMLInputElement;
  if (localStorage["Other1-Enabled"] === "1") {
    select.checked = true;
  } else {
    select.checked = false;
  }
  select = document.getElementById("other1-multi") as HTMLInputElement;
  if (localStorage["Other1-Multi"] === "1") {
    select.checked = true;
  } else {
    select.checked = false;
  }
  (document.getElementById("other1-name") as HTMLInputElement).value = localStorage["Other1-Name"];
  (document.getElementById("other1-url") as HTMLInputElement).value = localStorage["Other1-URL"];

  //Other2
  select = document.getElementById("other2-enabled") as HTMLInputElement;
  if (localStorage["Other2-Enabled"] === "1") {
    select.checked = true;
  } else {
    select.checked = false;
  }
  select = document.getElementById("other2-multi") as HTMLInputElement;
  if (localStorage["Other2-Multi"] === "1") {
    select.checked = true;
  } else {
    select.checked = false;
  }
  (document.getElementById("other2-name") as HTMLInputElement).value = localStorage["Other2-Name"];
  (document.getElementById("other2-url") as HTMLInputElement).value = localStorage["Other2-URL"];

  //Other3
  select = document.getElementById("other3-enabled") as HTMLInputElement;
  if (localStorage["Other3-Enabled"] === "1") {
    select.checked = true;
  } else {
    select.checked = false;
  }
  select = document.getElementById("other3-multi") as HTMLInputElement;
  if (localStorage["Other3-Multi"] === "1") {
    select.checked = true;
  } else {
    select.checked = false;
  }
  (document.getElementById("other3-name") as HTMLInputElement).value = localStorage["Other3-Name"];
  (document.getElementById("other3-url") as HTMLInputElement).value = localStorage["Other3-URL"];

  //Other4
  select = document.getElementById("other4-enabled") as HTMLInputElement;
  if (localStorage["Other4-Enabled"] === "1") {
    select.checked = true;
  } else {
    select.checked = false;
  }
  select = document.getElementById("other4-multi") as HTMLInputElement;
  if (localStorage["Other4-Multi"] === "1") {
    select.checked = true;
  } else {
    select.checked = false;
  }
  (document.getElementById("other4-name") as HTMLInputElement).value = localStorage["Other4-Name"];
  (document.getElementById("other4-url") as HTMLInputElement).value = localStorage["Other4-URL"];

  //Other5
  select = document.getElementById("other5-enabled") as HTMLInputElement;
  if (localStorage["Other5-Enabled"] === "1") {
    select.checked = true;
  } else {
    select.checked = false;
  }
  select = document.getElementById("other5-multi") as HTMLInputElement;
  if (localStorage["Other5-Multi"] === "1") {
    select.checked = true;
  } else {
    select.checked = false;
  }
  (document.getElementById("other5-name") as HTMLInputElement).value = localStorage["Other5-Name"];
  (document.getElementById("other5-url") as HTMLInputElement).value = localStorage["Other5-URL"];

  //Other6
  select = document.getElementById("other6-enabled") as HTMLInputElement;
  if (localStorage["Other6-Enabled"] === "1") {
    select.checked = true;
  } else {
    select.checked = false;
  }
  select = document.getElementById("other6-multi") as HTMLInputElement;
  if (localStorage["Other6-Multi"] === "1") {
    select.checked = true;
  } else {
    select.checked = false;
  }
  (document.getElementById("other6-name") as HTMLInputElement).value = localStorage["Other6-Name"];
  (document.getElementById("other6-url") as HTMLInputElement).value = localStorage["Other6-URL"];

  //Multi
  select = document.getElementById("multi-enabled") as HTMLInputElement;
  if (localStorage["Multi-Enabled"] === "1") {
    select.checked = true;
  } else {
    select.checked = false;
  }
  (document.getElementById("multi-name") as HTMLInputElement).value = localStorage["Multi-Name"];
};

window.addEventListener("load", () => {
  loadSettings();
  document.getElementById("saveSettings")?.addEventListener("click", saveSettings);
  document.getElementById("loadSettings")?.addEventListener("click", loadSettings);
});