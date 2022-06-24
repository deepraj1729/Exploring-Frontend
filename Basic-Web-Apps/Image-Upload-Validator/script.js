$(document).ready(function(){

     var _URL = window.URL || window.webkitURL;

     $('#file').change(function () {
         var file  =  $(this)[0].files[0];

         img = new Image();
         var imgwidth = 0;
         var imgheight = 0;
         var maxwidth = 1920;
         var maxheight = 1080;

         img.src = _URL.createObjectURL(file);
         img.onload = function() {
             imgwidth = this.width;
             imgheight = this.height;
             
             $("#width").text(imgwidth);
             $("#height").text(imgheight);
             if(imgwidth <= maxwidth && imgheight <= maxheight){
                 
                 var formData = new FormData();
                 formData.append('fileToUpload', $('#file')[0].files[0]);

                 $.ajax({
                     url: 'upload_image.php',
                     type: 'POST',
                     data: formData,
                     processData: false,
                     contentType: false,
                     dataType: 'json',
                     success: function (response) {
                         if(response.status == 1){
                             // Setting Image for Preview
                             $("#prev_img").attr("src","upload/"+response.returnText);
                             $("#prev_img").show();
                             $("#response").text("Upload successfully");
                         }else{
                             $("#response").text(response.returnText);
                         } 
                     }
                 });
             }else{
                 $("#response").text("Image size must be "+maxwidth+"X"+maxheight);
             }
         };
         img.onerror = function() {             
             $("#response").text("not a valid file: " + file.type);
         }

     });
 });
 
