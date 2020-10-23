<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
	
	<html>
	<head>
	
	<title>Employee details</title>
	
	<style>
	table,th,td{
	border:1px solid white;
	border-collapse:collapse;
	
	
	}
	
	body{
	background-color:black;
	color:white;
	font-size:30px;
	}
	
	th{
	padding:10px;
	font-size:20px;
	}
	
	td{
	padding:10px;
	font-size:20px;
	text-align:center;
	}
	
	table{
	width:70%;
	
	}
	
	table.center{
	margin-left:auto;
	margin-right:auto;
	
	}
	
	p{
	margin-right:200px;
	font-size:12px;
	text-align: right;
	}
	
	
	</style>
	
	</head>
	
	<body>
	
	<h1 style="text-align:center;">Employee Management System</h1>
	<p>Aditya Raghavan<br></br>2047204</p>
	
	<table class="center">
	<tr>
	<th>ID</th>
	<th>NAME</th>
	<th>AGE</th>
	<th>SALARY</th>
	<th>EMAIL</th>
	<th>MobNum</th>
	<th>Designation</th>
	<th>Promotion</th>
	
	</tr>
	
	<xsl:for-each select="company/employee">
	<tr>
	<td><xsl:value-of select="@id"></xsl:value-of></td>
	<td><xsl:value-of select="Emp-name"></xsl:value-of></td>
	<td><xsl:value-of select="Emp-age"></xsl:value-of></td>
	<td><xsl:value-of select="Emp-salary"></xsl:value-of></td>
	<td><xsl:value-of select="Emp-emailid"></xsl:value-of></td>
	<td><xsl:value-of select="Emp-phonenum"></xsl:value-of></td>
	<td><xsl:value-of select="Emp-designation"></xsl:value-of></td>
	<xsl:choose>
	<xsl:when test="Emp-age >= 50">
	<td>Associate Project Manager</td>
	</xsl:when>
	<xsl:when test="Emp-age &gt;= 40">
	<td>Team Leader</td>
	</xsl:when>
	<xsl:when test="Emp-age &lt; 40">
	<td>Developer</td>
	</xsl:when>
	</xsl:choose>
	</tr>
	</xsl:for-each>
	</table>
	
	</body>
	</html>
	
		<!-- TODO: Auto-generated template -->
	</xsl:template>
</xsl:stylesheet>