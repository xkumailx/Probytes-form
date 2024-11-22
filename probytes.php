
<?php

if (isset($_FILES['resume']) && $_FILES['resume']['error'] === UPLOAD_ERR_OK) {
    $uploadDir = 'uploads/';
    $uploadFile = $uploadDir . basename($_FILES['resume']['name']);
    if (move_uploaded_file($_FILES['resume']['tmp_name'], $uploadFile)) {
        echo "Resume uploaded successfully!";
    } else {
        echo "Error uploading resume.";
    }
}

?>