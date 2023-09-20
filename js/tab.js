const dataTabs = Array.from(document.querySelectorAll(".info-tab"));
const tabPanels = Array.from(document.querySelectorAll(".data-info"));

function removeActiveFromTabs() {
  dataTabs.forEach((tab) => {
    tab.classList.remove("active");
  });
}

dataTabs.forEach((dataTab) => {
  dataTab.addEventListener("click", (e) => {
    removeActiveFromTabs();
    dataTab.classList.add("active")
    const tabName = e.target.id;
    e.target.classList.add("active");

    tabPanels.forEach((panel) => {
      if(panel.dataset.name === tabName) {
        panel.classList.add("active");
      } else {
        panel.classList.remove("active");
      }

      const header = document.querySelector('header');
      const container = document.querySelector(".container")
      if (tabName !== 'home') {
        header.classList.remove('active')
      } else {
        header.classList.add('active')    
      }

      if(tabName == 'menu' ) {
        container.classList.add('active')
      } else {
        container.classList.remove('active')    
      }
      
    });
  });
});