<script>
  function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (name == "" || email == "" || password == "") {
      alert("All fields are required");
      return false;
    }
  }
</script>

