
(function(){
  const today = new Date();
  const iso = today.toISOString().slice(0,10);
  document.querySelectorAll('.day[data-date="'+iso+'"]').forEach(el => el.classList.add('today'));
})();
