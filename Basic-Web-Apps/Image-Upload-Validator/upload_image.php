<?php
$target_dir = "upload/";
$returnText = "";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);

// Check image format
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
    && $imageFileType != "gif" ) {
    $returnText =  "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}

if ($uploadOk == 0) {
    $returnText = "Sorry, your file was not uploaded.";
} else {
    // if everything is ok, try to upload file
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        $returnText =  basename( $_FILES["fileToUpload"]["name"]);
    } else {
        $uploadOk = 0;
        $returnText = "Sorry, there was an error uploading your file.";
    }
}

echo json_encode(array("status"=>$uploadOk,"returnText"=>$returnText));
?>