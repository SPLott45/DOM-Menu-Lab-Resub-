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

let mainEl = document.querySelector('main');

mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

mainEl.classList.add('flex-ctr');

let topMenuEl = document.getElementById('top-menu');

topMenuEl.style.height = '100%';

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

topMenuEl.classList.add('flex-around');

menuLinks.forEach(function(item)  {
  let menuItem = document.createElement('a')
  menuItem.setAttribute('href', item.href)
  menuItem.textContent = item.text
  topMenuEl.appendChild(menuItem)
});

let subMenuEl = document.getElementById('sub-menu');

subMenuEl.style.height = '100%';

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

subMenuEl.classList.add('flex-around');

subMenuEl.style.position = 'absolute';

subMenuEl.style.top = '0';


let topMenuLinks = topMenuEl.querySelectorAll('a');

let showingSubMenu = false;

//may need to store this event listener to a const. variable called btn
topMenuEl.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();
  // console.log(event.target.tagName);
  // console.log(topMenuLinks);
  console.log(event.target.textContent);
  if(event.target.tagName !== "A") {
    return;
  }; 
  if(event.target.classList.contains('active')) {
    event.target.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    return
  };
  for(let i = 0; i < topMenuLinks.length; i++) {
    topMenuLinks[i].classList.remove('active');
  }
  event.target.classList.add('active');
  let linkObject; 
  for(let i = 0; i < menuLinks.length; i++) {
    if(event.target.innerText.toLowerCase() === menuLinks[i].text) {
      if(menuLinks[i].subLinks) {
        linkObject = menuLinks[i].subLinks;
        showingSubMenu = true;
      } else showingSubMenu = false;
    }
  }
  function buildSubMenu(linkObject) {
    subMenuEl.innerHTML = '';
    for(let i = 0; i < linkObject.length; i++) {
      let newv = document.createElement('a');
      newv.setAttribute('href', linkObject[i].href);
      newv.textContent = linkObject[i].text;
      subMenuEl.appendChild(newv)
    }
 } 
 if(showingSubMenu = true) {
  buildSubMenu(linkObject);
  subMenuEl.style.top = '100%'
} else if(showingSubMenu = false) {
  subMenuEl.style.top = '0'
};
}

subMenuEl.addEventListener('click', handleSubClick); 

function handleSubClick(event) {
  event.preventDefault();
  if(event.target.tagName !== "A") {
    return
    };
    console.log(event.target.textContent);
    showingSubMenu = false;
    subMenuEl.style.top = '0';
  
  }; 

  // if(topMenuLinks === 'click') {
  //   topMenuLinks.classList.add('active');
  // }
  // if(topMenuLinks === 'click' && topMenuLinks.menuLinks.subLinks) {
  //   showingSubMenu = true
  // } else showingSubMenu = false;
  // if(showingSubMenu = true) {
  //   buildSubMenu(subLinks); 
  //   subMenuEl.style.top = '100%'
  //   } else if(showingSubMenu = false) {
  //     subMenuEl.style.top = '0'
  //   }
  // function buildSubMenu() {
  //   //need help with Task 5.8.1
  //   subLinks.forEach(function (item) {
  //     let menuItem = document.createElement('a')
  //     menuItem.setAttribute('href', item.href)
  //     menuItem.textContent = item.text
  //     subMenuEl.append(menuItem)
  //     })
  //   }
  // } 

  // subMenuEl.addEventListener('click', handleClick);

  // function handleClick(event) {
  //   event.preventDefault();
  //   if(event.target.tagName !== subLinks) {
  //     return
  //   };
  //   if(event.target.tagName === subLinks) {
  //     subLinks.forEach(function(item) {
  //       topMenuLinks.classList.remove('active')
  //       let showingSubMenu = false
  //       subMenuEl.style.top = '0'
  //       return
  //     });
  // } 
  // }

  // //need help with 6.3 and 6.4
