function validate() {
    var zip = $("#zip_code").val();
    if (zip.length == 0) return true;
    if (zip.length != 5 || isNaN(phone)) {
        alert("Zip code is not valid or not valid format.");
        return false;
    }

    var phone = $("#telephone").val();
    if (phone.length != 10 || isNaN(phone)) {
        alert("Phone  number is not valid or not valid format.");
        return false;
    }

}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {});
});