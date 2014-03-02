( function(w,$){
    $.fn.tagcloud.defaults = {
        size: {start: 12, end: 19, unit: 'pt'},
        color: {start: '#cde', end: '#f52'}
    };
    $('#mySkills a').tagcloud();
    $(document).on('click','#myskills ul li a', function(e){
        e.preventDefault(); return false;
    });
})(window, jQuery)