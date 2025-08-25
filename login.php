<?php
session_start();
require 'config.php'; // connexion à la DB

if (isset($_POST['login']))  {
    $email = trim($_POST['email']);
    $pwd = $_POST['pwd'];

    // Vérifier si l'email existe
    $stmt = $pdo->prepare("SELECT id, pwd FROM users WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch();

    if ($user && password_verify($pwd, $user['pwd'])) {
        // Succès
        $_SESSION['user_id'] = $user['id'];
        header("Location: khub.html"); 
        exit();
    } else {
        // Erreur
        echo "Email ou mot de passe incorrect.";
    }
}
?>
