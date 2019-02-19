<?php 
    $coon = new Mysqli("localhost", "root", "", "db_zuce_adime", 3306);
    $sql = 'SELECT * FROM userinfo';
    $coon->query("SET CHARACTER SET'utf8' ");
    $coon->query("SET NAMES 'utf8' ");
    $row = $coon -> query($sql);
    $result = $row -> fetch_assoc();
    var_dump($result);
    if($result){
        $arr = array("code" => "200", "msg" =>"");
    }else{
        $arr = array("code" => "1000", "msg" => "注册失败");
    }
    echo json_encode($arr);

?>