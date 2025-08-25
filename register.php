<?php require_once 'config.php';?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="asset/css/bootstrap.css">
  <link rel="stylesheet" href="asset/css/register.css">
  <title>Document</title>
</head>
<body>
    <header>
      <a href="index.html"
        ><img id="logo" src="asset/img/logo-kpath.PNG" alt="logo"
      /></a>
        <h3>Inscrivez-vous</h3>
    </header>
  <section class="vh-100 bg-image"
    style="background-image: url('asset/img/acceuil-img.jpg');">
    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                    <div class="card" style="border-radius: 15px;">
                        <div class="card-body p-5">
                            <form method="post" action="register.php">
                                <div class="mb-3 mt-4 mx-4 ">
                                    <label for="firstname" class="form-label">Veuillez saisir votre prénom*:</label>
                                    <input type="text" class="form-control" id="firstname" aria-describedby="emailHelp" name="firstname" required>
                                </div>
                                <div class="mb-3 mx-4">
                                    <label for="lastname" class="form-label">Veillez saisir votre nom*:</label>
                                    <input type="text" class="form-control" id="lastname" aria-describedby="emailHelp" name="lastname" required>
                                </div>
                                <div class="mb-3 mx-4">
                                    <label for="Email" class="form-label"> Votre Email*: </label>
                                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" name="email"required>
                                </div>
                                <div class="mb-3 mx-4">
                                    <label for="Password" class="form-label">Votre mot de passe*:</label>
                                    <input type="password" class="form-control" id="password" name="pwd" required>
                                </div>

                                <button type="submit" class="btn btn-primary mx-4" name="submit">S'inscrire</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>
  

   <script src="asset/js/bootstrap.js"></script>
</body>
</html>

<?php 


if (isset($_POST['submit'])) {
    // trim enlève les espaces avant/après
    $firstname = trim($_POST['firstname']);
    $lastname = trim($_POST['lastname']);
    $email = trim($_POST['email']);
    $pwd = trim($_POST['pwd']);

    // Vérifications simples
    if (empty($firstname) || empty($lastname) || empty($email) || empty($pwd)) {
        echo "Tous les champs sont obligatoires.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Email invalide.";
    } elseif (strlen($pwd) < 6) {
        echo "Le mot de passe doit contenir au moins 6 caractères.";
    } else {
        // Ici tu pourras enregistrer dans ta BDD
        echo "Formulaire valide ✅";
    }

    $hashedPassword = password_hash($pwd, PASSWORD_DEFAULT);

    try {
        $stmt = $pdo->prepare("INSERT INTO users (firstname,lastname, email, pwd) VALUES (?, ?, ?,?)");
        $stmt->execute([$firstname, $lastname, $email, $hashedPassword]);
        echo "Inscription réussie ✅";
         header("Location: khub.html"); 
    } catch (PDOException $e) {
        echo "Erreur : " . $e->getMessage();
    }
}




?>