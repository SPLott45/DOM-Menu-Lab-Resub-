let mainEl = document.querySelector('main');

mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

mainEl.classList.add('flex-ctr');

let topMenuEl = document.getElementById('top-menu');

topMenuEl.style.height = '100%';

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

topMenuEl.classList.add('flex-around');

// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

  menuLinks.forEach(function(item)  {
    let menuItem = document.createElement('a')
    menuItem.setAttribute('href', item.href)
    menuItem.textContent = item.text
    topMenuEl.append(menuItem)
});

let subMenuEl = document.getElementById('sub-menu');

subMenuEl.style.height = '100%';

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

subMenuEl.classList.add('flex-around');

subMenuEl.style.position = 'absolute';

subMenuEl.style.top = '0';


let topMenuLinks = document.topMenuEl.getElementById('a');

var showingSubMenu = false;

//may need to store this event listener to a const. variable called btn
topMenuEl.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();
  if(event.target.tagName !== topMenuLinks) {
    return
  };
  if(event.target.tagName === topMenuLinks) {
    topMenuLinks.forEach(function(item) {
      topMenuLinks.classList.remove('active')
      let showingSubMenu = false
      subMenuEl.style.top = '0'
      return
    });
  };
  if(topMenuLinks === 'click') {
    topMenuLinks.classList.add('active');
  }
  if(topMenuLinks === 'click' && topMenuLinks.menuLinks.subLinks) {
    showingSubMenu = true
  } else showingSubMenu = false;
  if(showingSubMenu = true) {
    buildSubMenu(subLinks); 
    subMenuEl.style.top = '100%'
    } else if(showingSubMenu = false) {
      subMenuEl.style.top = '0'
    }
  function buildSubMenu() {
    //need help with Task 5.8.1
    subLinks.forEach(function (item) {
      let menuItem = document.createElement('a')
      menuItem.setAttribute('href', item.href)
      menuItem.textContent = item.text
      subMenuEl.append(menuItem)
      })
    }
  } 

  subMenuEl.addEventListener('click', handleClick);

  function handleClick(event) {
    event.preventDefault();
    if(event.target.tagName !== subLinks) {
      return
    };
    if(event.target.tagName === subLinks) {
      subLinks.forEach(function(item) {
        topMenuLinks.classList.remove('active')
        let showingSubMenu = false
        subMenuEl.style.top = '0'
        return
      });
  } 
  }

  //need help with 6.3 and 6.4
