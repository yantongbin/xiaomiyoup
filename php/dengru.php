<?php 
    $json = file_get_contents("php://input");
    $json = json_decode($json);
    $username = $json -> username;
    $password = $json -> password;
    $coon = new Mysqli("localhost", "root", "", "db_zuce_adime", 3306);
    $sql = "SELECT * FROM userinfo where telephone ='$username' and password = '$password'" ;
    $coon->query("SET CHARACTER SET'utf8'");
    $coon->query("SET NAMES 'utf8'");
    $row = $coon -> query($sql);
    $result = $row -> fetch_assoc();
    if($result){
        $arr = array("code" => "200", "msg" =>"");
    }else{
        $arr = array("code" => "1000" , "msg" => "用户名或密码输入错误" , "data" => array());
    }
    echo json_encode($arr);

?>