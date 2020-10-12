<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
	<html>
	<body>
	<h1>Celluloid Movie details</h1>
	
	<table border="1">
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