<?php
include 'db_config.php';

$name = $email = $course = "";
$message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $course = trim($_POST["course"]);

    $stmt = $conn->prepare("INSERT INTO students (name, email, course) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $course);

    if ($stmt->execute()) {
        $message = "Registration successful!";
    } else {
        $message = "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Student Registration</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h2>Register Student</h2>

    <?php if ($message): ?>
        <p><?php echo htmlspecialchars($message); ?></p>
    <?php endif; ?>

    <form method="POST" action="">
        <label>Name:</label><br>
        <input type="text" name="name" required><br><br>

        <label>Email:</label><br>
        <input type="email" name="email" required><br><br>

        <label>Course:</label><br>
        <input type="text" name="course" required><br><br>

        <input type="submit" value="Register">
    </form>
</body>
</html>
