<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
	<html>
	<head>
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
	
	
	</style>
	
	</head>
	<body>
	<h1 style="text-align:center;">Celluloid Movie details</h1>
	
	<table class="center">
	<tr>
	<th>Movie Name</th>
	<th>Year</th>
	<th>Directed by</th>
	<th>Starring</th>
	<th>Rating</th>
	<th>Plot</th>
	
	</tr>
	
	<xsl:for-each select="globalmovie/movie">
	<tr>
	<td><xsl:value-of select="moviename"></xsl:value-of></td>
	<td><xsl:value-of select="year"></xsl:value-of></td>
	<td><xsl:value-of select="director"></xsl:value-of></td>
	<td><xsl:value-of select="starring"></xsl:value-of></td>
	<td><xsl:value-of select="rating"></xsl:value-of></td>
	<td><xsl:value-of select="plot"></xsl:value-of></td>
	</tr>
	
	
	
	
	</xsl:for-each>
	</table>
	
	</body>
	</html>
	
	
		<!-- TODO: Auto-generated template -->
	</xsl:template>
</xsl:stylesheet>