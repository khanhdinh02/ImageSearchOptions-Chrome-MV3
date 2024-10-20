import createMenu from "./create-menu";
import menuItems from "./menu-items";

const doSearch = async (info: chrome.contextMenus.OnClickData, tab?: chrome.tabs.Tab): Promise<void> => {
  const src = info.srcUrl;
  const localStorage = await chrome.storage.local.get(null);

  if (!src) {
    alert("No Image Found");
  } else if (src.startsWith("data:")) {
    alert("Not Yet Compatible With Data URIs");
  } else if (info.menuItemId === "Multi") {
    for (const menuItem of menuItems) {
      if (localStorage[menuItem + "-Multi"] === "1") {
        const url = localStorage[menuItem + "-URL"] + encodeURIComponent(src);
        if ((localStorage["loadLocation"] === "1")) {
          chrome.tabs.create({ url, active: true });
        } else {
          chrome.tabs.create({ url, active: false });
        }
      }
    }
  } else {
    const url = localStorage[info.menuItemId + "-URL"] + encodeURIComponent(src);
    if ((localStorage["loadLocation"] === "1")) {
      chrome.tabs.create({ url, active: true });
    } else {
      chrome.tabs.create({ url, active: false });
    }
  }
};

const initialize = async (): Promise<void> => {
  const localStorage = await chrome.storage.local.get(null);
  if (localStorage["loadLocation"] === undefined) localStorage["loadLocation"] = "1";

  if (localStorage["SauceNAO-Enabled"] === undefined) localStorage["SauceNAO-Enabled"] = "1";
  if (localStorage["SauceNAO-Multi"] === undefined) localStorage["SauceNAO-Multi"] = "1";
  if (localStorage["SauceNAO-Name"] === undefined) localStorage["SauceNAO-Name"] = "SauceNAO Search";
  if (localStorage["SauceNAO-URL"] === undefined) localStorage["SauceNAO-URL"] = "https://saucenao.com/search.php?db=999&url=";

  if (localStorage["IQDB-Enabled"] === undefined) localStorage["IQDB-Enabled"] = "1";
  if (localStorage["IQDB-Multi"] === undefined) localStorage["IQDB-Multi"] = "1";
  if (localStorage["IQDB-Name"] === undefined) localStorage["IQDB-Name"] = "IQDB Search";
  if (localStorage["IQDB-URL"] === undefined) localStorage["IQDB-URL"] = "https://iqdb.org/?url=";

  if (localStorage["TinEye-Enabled"] === undefined) localStorage["TinEye-Enabled"] = "1";
  if (localStorage["TinEye-Multi"] === undefined) localStorage["TinEye-Multi"] = "1";
  if (localStorage["TinEye-Name"] === undefined) localStorage["TinEye-Name"] = "TinEye Search";
  if (localStorage["TinEye-URL"] === undefined) localStorage["TinEye-URL"] = "https://tineye.com/search/?url=";

  if (localStorage["Google-Enabled"] === undefined) localStorage["Google-Enabled"] = "1";
  if (localStorage["Google-Multi"] === undefined) localStorage["Google-Multi"] = "1";
  if (localStorage["Google-Name"] === undefined) localStorage["Google-Name"] = "Google Search";
  if (localStorage["Google-URL"] === undefined || localStorage["Google-URL"] === "https://www.google.com/searchbyimage?image_url=")
    localStorage["Google-URL"] = "https://lens.google.com/uploadbyurl?url=";

  if (localStorage["Other1-Enabled"] === undefined) localStorage["Other1-Enabled"] = "0";
  if (localStorage["Other1-Multi"] === undefined) localStorage["Other1-Multi"] = "0";
  if (localStorage["Other1-Name"] === undefined) localStorage["Other1-Name"] = "Other Search 1";
  if (localStorage["Other1-URL"] === undefined) localStorage["Other1-URL"] = "https://other-site-1";

  if (localStorage["Other2-Enabled"] === undefined) localStorage["Other2-Enabled"] = "0";
  if (localStorage["Other2-Multi"] === undefined) localStorage["Other2-Multi"] = "0";
  if (localStorage["Other2-Name"] === undefined) localStorage["Other2-Name"] = "Other Search 2";
  if (localStorage["Other2-URL"] === undefined) localStorage["Other2-URL"] = "https://other-site-2";

  if (localStorage["Other3-Enabled"] === undefined) localStorage["Other3-Enabled"] = "0";
  if (localStorage["Other3-Multi"] === undefined) localStorage["Other3-Multi"] = "0";
  if (localStorage["Other3-Name"] === undefined) localStorage["Other3-Name"] = "Other Search 3";
  if (localStorage["Other3-URL"] === undefined) localStorage["Other3-URL"] = "https://other-site-3";

  if (localStorage["Other4-Enabled"] === undefined) localStorage["Other4-Enabled"] = "0";
  if (localStorage["Other4-Multi"] === undefined) localStorage["Other4-Multi"] = "0";
  if (localStorage["Other4 Name"] === undefined) localStorage["Other4-Name"] = "Other Search 4";
  if (localStorage["Other4-URL"] === undefined) localStorage["Other4-URL"] = "https://other-site-4";

  if (localStorage["Other5-Enabled"] === undefined) localStorage["Other5-Enabled"] = "0";
  if (localStorage["Other5-Multi"] === undefined) localStorage["Other5-Multi"] = "0";
  if (localStorage["Other5-Name"] === undefined) localStorage["Other5-Name"] = "Other Search 5";
  if (localStorage["Other5-URL"] === undefined) localStorage["Other5-URL"] = "https://other-site-5";

  if (localStorage["Other6-Enabled"] === undefined) localStorage["Other6-Enabled"] = "0";
  if (localStorage["Other6-Multi"] === undefined) localStorage["Other6-Multi"] = "0";
  if (localStorage["Other6-Name"] === undefined) localStorage["Other6-Name"] = "Other Search 6";
  if (localStorage["Other6-URL"] === undefined) localStorage["Other6-URL"] = "https://other-site-6";

  if (localStorage["Multi-Enabled"] === undefined) localStorage["Multi-Enabled"] = "1";
  if (localStorage["Multi-Name"] === undefined) localStorage["Multi-Name"] = "ALL";

  await chrome.storage.local.set(localStorage);
  createMenu();
};

chrome.runtime.onInstalled.addListener(initialize);
// chrome.runtime.onStartup.addListener(initialize);
chrome.contextMenus.onClicked.addListener(doSearch);