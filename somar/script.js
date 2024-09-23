function Somar(){

        var n1 = parseFloat(document.getElementById("s1").value);
        var n2 = parseFloat(document.getElementById("s2").value);
        var n3 = parseFloat(document.getElementById("s3").value);
        var resp = document.getElementById("respId");
        resp.textContent = n1 + n2 + n3;
}