function output() {
    var nama = document.getElementById("exampleInputName1").value;
    document.getElementById("tampilkanNama").innerHTML = nama_lengkap;

    var tanggal_lahir = document.getElementById("exampleInputDate1").value;
    document.getElementById("tampilkanTTL").innerHTML = tanggal_lahir;

    var radio = document.forms["form1"].elements["inlineRadioOptions"];
    var jenis_kelamin = "";
    for (let i = 0; i < radio.length; i++) {
        if(radio[i].checked) {
            jenis_kelamin = radio[i].value;
        }
    }
	
    document.getElementById("tampilkanGender").innerHTML = jenis_kelamin;

    var checkbox = document.forms["form1"].elements["inlineCheckboxOptions"];
    var hobi = "";
    for (let i = 0; i < checkbox.length; i++) {
        if(checkbox[i].checked) {
            hobi = hobi + checkbox[i].value + ", ";
        }
    }
    document.getElementById("tampilkanHobi").innerHTML = hobi.replace(/,\s*$/, "");

    var agama = document.getElementById("inputReligion").value;
    document.getElementById("tampilkanAgama").innerHTML = agama;

    var pesan = document.getElementById("inputMessage").value;
    document.getElementById("tampilkanPesan").innerHTML = pesan;
}