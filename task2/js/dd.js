$(document).ready(function () {
    var _mwi = 991;
    function toggleDropdown (e) {
      if(window.innerWidth > _mwi) {
          var _d = $(e.target);
          setTimeout(function () {
            var shouldOpen = e.type !== 'click' && _d.is(':hover');
            _d.parents('.nav-item.dropdown').find('.dropdown-menu').toggleClass('show', shouldOpen);
            _d.parents('.nav-item.dropdown').toggleClass('show', shouldOpen);
            $(e.target).attr('aria-expanded', shouldOpen);
          }, e.type === 'mouseleave' ? 300 : 0);
       }
    }
    $(document)
        .on('mouseenter','.nav-item.dropdown',toggleDropdown)
        .on('mouseleave','.nav-item.dropdown.show',toggleDropdown);
});
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});