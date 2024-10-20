import menuItems from "./menu-items";

const createMenu = async (): Promise<void> => {
  chrome.contextMenus.removeAll();
  const localStorage = await chrome.storage.local.get(null);
  for (const item of menuItems) {
    if (localStorage[item + "-Enabled"] === "1") {
      chrome.contextMenus.create({
        title: localStorage[item + "-Name"],
        id: item,
        contexts: ["image"]
      });
    }
  }
};

export default createMenu;