
<?php
// Загальна відправка
if(isset($_POST['submit'])){

$to = "Elena357910@yandex.com";  
$from = "Elena357910@yandex.com"; 
$s140000="s140000";
$s190000="s190000";
$first_name = $_POST['first_name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$subject = "Форма отправки сообщений с сайта zaga";
     

if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
show_error("<br /> Е-mail адрес не существует");
}

$mail_to_myemail = "Здравствуйте! 
Было отправлено сообщение с сайта! 
Имя отправителя: $first_name
E-mail: $email
Номер телефона: $phone
Чтобы ответить на письмо, создайте новое сообщение, скопируйте электронный адрес и вставьте в поле Кому.";  
     
$headers = "From: $from \r\n";
     
mail($to, $subject, $mail_to_myemail, $headers . 'Content-type: text/plain; charset=utf-8');
echo "Сообщение отправлено. Спасибо Вам " . $first_name . ", мы скоро свяжемся с Вами.";
echo "<br /><br /><a href='#!'>Вернуться на сайт.</a>";
}
?>
<!--Переадресация на главную страницу сайта, через 3 секунды-->
<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="https://epicblog.net");}
window.setTimeout("changeurl();",3000);
</script>