<?php
include "connectionchrist.php"
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>stu-info</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
 
  <style type="text/css">
    
    body { 
      color: black;
      font-weight: bold;
  
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  padding-bottom: 0px;
  font-family: 'Montserrat', sans-serif;
  padding: 0px;
  

}

table{
  background-color: white;
}

#searchtable{
  margin-top: 0px;
  margin-bottom: 40px;
}


label{
  color: white;
}
input[type="text"]{
  background-color: white;
  color: black;
  border-color: black;
}

select, textarea{
  border-color: black;
}
  </style>


</head>
<body>
 
<div class="container-fluid">
  <h1 style="text-align: center; color: black; font-weight: bold; ">Christ(Deemed to be University)</h1>
  <h3 style="text-align: center;color: black; margin-bottom: 50px;">Student Database</h4>
  <div class="col-lg-4">
  
  <form action="" name="form1" method="post" >
    <p>Enter Student Infomation:</p>
    <div class="form-group">
      <label for="email">Student ID:</label>
      <input type="text" class="form-control" id="stuid" placeholder="Enter ID" name="stuid">
    </div>
    <div class="form-group">
      <label for="email">Student Name:</label>
      <input type="text" class="form-control" id="stuname" placeholder="Enter Name" name="stuname">
    </div>
    <div class="form-group">
      <label for="pwd">Age:</label>
      <input type="text" class="form-control" id="age" placeholder="Enter age" name="age">
    </div>
    <div class="form-group">
      <label style="color: black;" for="gender">Gender:</label>

      <select style="border-color: black;" name="gender" id="gender" class="form-control">
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="others">Others</option>
      
    </select>
    </div>
    <div class="form-group">
      <label for="pwd">Course:</label>
      <input type="text" class="form-control" id="course" placeholder="Enter course" name="course">
    </div>
    <div class="form-group">
      <label for="pwd">Address:</label>
      <textarea style="border-color: black;" type="text" class="form-control" id="address" placeholder="Enter address" name="address"></textarea>
    </div>
    <button type="submit" name="insert" class="btn btn-default" onclick="return validate()">Insert</button>
    <button  name="update" class="btn btn-default">Update</button>
    <button  name="delete" class="btn btn-default">Delete</button>
    <button  name="search" class="btn btn-default">search</button>

   
  </form>

  <p style="color: black; margin-top: 20px;">Search Results: </p>
</div>




<div style="margin-left: 40px;" class="col-lg-7">
<table class="table table-bordered">
    <thead>
      <tr>
        <th>Student ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Course</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
      <?php
      $res=mysqli_query($link,"select *from stuinfo");
      while($row=mysqli_fetch_array($res))
      {
        echo "<tr>";
        echo "<td>"; echo $row["stuid"];echo "</td>";
        echo "<td>"; echo $row["stuname"];echo "</td>";
        echo "<td>"; echo $row["age"];echo "</td>";
        echo "<td>"; echo $row["gender"];echo "</td>";
        echo "<td>"; echo $row["course"];echo "</td>";
        echo "<td>"; echo $row["address"];echo "</td>";
        echo "</tr>";
      }

      ?>
    </tbody>
  </table>

</div>



<div style="margin-left: 40px;" class="col-lg-7">

  <h2>Students studying MCA</h2>
<table class="table table-bordered">
    <thead>
      <tr>
        <th>Student ID</th>
        <th>Name</th>
        
      </tr>
    </thead>
    <tbody>
      <?php
      $res=mysqli_query($link,"select stuid, stuname from stuinfo where course='MCA' ");
      while($row=mysqli_fetch_array($res))
      {
        echo "<tr>";
        echo "<td>"; echo $row["stuid"];echo "</td>";
        echo "<td>"; echo $row["stuname"];echo "</td>";
        
        echo "</tr>";
      }

      ?>
    </tbody>
  </table>

</div>

</div>

<p style="margin-top: 20px; margin-left: 20px; color: white;">Search Results: </p>

</body>
<?php
 if(isset($_POST['search']))
  {
    $a=$_POST['stuid'];
    $query=mysqli_query($link,"select * from stuinfo where stuid='$a'");
      while($row=mysqli_fetch_array($query))
      {
        echo "<div class='container'>";
        echo "<table id='searchtable' class='table table-bordered'>";
        echo "<tr>";
        echo "<td>"; echo $row["stuid"];echo "</td>";
        echo "<td>"; echo $row["stuname"];echo "</td>";
        echo "<td>"; echo $row["age"];echo "</td>";
        echo "<td>"; echo $row["gender"];echo "</td>";
        echo "<td>"; echo $row["course"];echo "</td>";
        echo "<td>"; echo $row["address"];echo "</td>";
        echo "</tr>";
        echo "</table></div>";
      }

  }
  ?>

<?php
if(isset($_POST["insert"]))
{
mysqli_query($link,"insert into stuinfo values('$_POST[stuid]','$_POST[stuname]','$_POST[age]','$_POST[gender]','$_POST[course]','$_POST[address]')");
?>
<script type="text/javascript">
  window.location.href= window.location.href;
</script>
<?php
}
if(isset($_POST["delete"]))
{

mysqli_query($link,"delete from stuinfo where stuid='$_POST[stuid]'");
?>
<script type="text/javascript">
  window.location.href= window.location.href;
</script>
<?php
}
if(isset($_POST["update"]))
{
mysqli_query($link,"update stuinfo set stuname='$_POST[stuname]', age='$_POST[age]',gender='$_POST[gender]',course='$_POST[course]',address='$_POST[address]'  where stuid='$_POST[stuid]'");
?>
<script type="text/javascript">
  window.location.href= window.location.href;
</script>
<?php
}
?>

<script type="text/javascript">
  
  

  function show(){
    $("#searchtable").show();
  }


</script>

<script type="text/javascript">
  
  function validate(){
  var stuid = document.forms["form1"]["stuid"].value;
  var stuname = document.forms["form1"]["stuname"].value;
  var age = document.forms["form1"]["age"].value;
  var gender = document.forms["form1"]["gender"].value;
  var course = document.forms["form1"]["course"].value;
  var address = document.forms["form1"]["address"].value;

  

  

  if(stuid==""||stuid==null){
    alert("Enter ID");
    return false;
  }
  else if(stuname == ""||stuname == null){
  
    alert("Enter Name");
    return false;
  }

  else if(age== ""||age==null){
    alert("Enter age");
    return false;
  }
  else if(gender== ""||gender==null){
    alert("Enter gender");
    return false;
  }
  else if(course== ""||course==null){
    alert("Enter course");
    return false;
  }
  else if(address== ""||address==null){
    alert("Enter address");
    return false;
  }
  

}





</script>
</html>