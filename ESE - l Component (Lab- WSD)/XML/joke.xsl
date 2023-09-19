<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
 <xsl:template match="/ShopSmart">
    <html>
      <head>
        <title>Jokes</title>
      </head>
      <body>
        <h1>Jokes Table</h1>
        <table border="1">
          <tr>
            <th>Category</th>
            <th>Joke</th>
          </tr>
          <xsl:for-each select="joke/jokee/jokes">
            <tr>
              <td><xsl:value-of select="Category"/></td>
              <td><xsl:value-of select="Joke"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>